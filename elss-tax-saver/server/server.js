const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ensure leads directory exists
const leadsDir = path.join(__dirname, 'data');
if (!fs.existsSync(leadsDir)) {
  fs.mkdirSync(leadsDir, { recursive: true });
}

const leadsFile = path.join(leadsDir, 'leads.json');

// Initialize leads file if it doesn't exist
if (!fs.existsSync(leadsFile)) {
  fs.writeFileSync(leadsFile, JSON.stringify([], null, 2));
}

// API endpoint to submit leads
app.post('/api/leads', (req, res) => {
  try {
    const { name, mobile, email, investmentAmount } = req.body;

    // Validation
    if (!name || !mobile || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name, mobile, and email are required'
      });
    }

    // Read existing leads
    const leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8'));

    // Create new lead
    const newLead = {
      id: Date.now(),
      name,
      mobile,
      email,
      investmentAmount: investmentAmount || '',
      source: 'ELSS Landing Page',
      createdAt: new Date().toISOString()
    };

    // Add to leads
    leads.push(newLead);

    // Save to file
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
  console.log(`API endpoints:`);
  console.log(`  POST http://localhost:${PORT}/api/leads - Submit a new lead`);
  console.log(`  GET  http://localhost:${PORT}/api/leads - Get all leads`);
  console.log(`  GET  http://localhost:${PORT}/api/health - Health check`);
});
