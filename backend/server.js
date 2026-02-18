const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS: allow frontend origin (local dev and production)
const frontendOrigin = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';
app.use(cors({
  origin: [frontendOrigin, 'http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Data directory: ./data relative to this file (backend/data)
const leadsDir = path.join(__dirname, 'data');
if (!fs.existsSync(leadsDir)) {
  fs.mkdirSync(leadsDir, { recursive: true });
}

const leadsFile = path.join(leadsDir, 'leads.json');

if (!fs.existsSync(leadsFile)) {
  fs.writeFileSync(leadsFile, JSON.stringify([], null, 2));
}

// API endpoint to submit leads
app.post('/api/leads', (req, res) => {
  try {
    const { name, mobile, email, investmentAmount } = req.body;

    if (!name || !mobile || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name, mobile, and email are required'
      });
    }

    const leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8'));

    const newLead = {
      id: Date.now(),
      name,
      mobile,
      email,
      investmentAmount: investmentAmount || '',
      source: 'ELSS Landing Page',
      createdAt: new Date().toISOString()
    };

    leads.push(newLead);
    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));

    res.status(201).json({
      success: true,
      message: 'Lead submitted successfully',
      lead: newLead
    });
  } catch (error) {
    console.error('Error saving lead:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// API endpoint to get all leads (for admin purposes)
app.get('/api/leads', (req, res) => {
  try {
    const leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8'));
    res.json({
      success: true,
      count: leads.length,
      leads
    });
  } catch (error) {
    console.error('Error reading leads:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS allowed origin: ${frontendOrigin}`);
  console.log(`API endpoints:`);
  console.log(`  POST http://localhost:${PORT}/api/leads - Submit a new lead`);
  console.log(`  GET  http://localhost:${PORT}/api/leads - Get all leads`);
  console.log(`  GET  http://localhost:${PORT}/api/health - Health check`);
});
