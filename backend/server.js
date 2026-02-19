require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 5001;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// CORS: allow all origins (frontend handles security via env-configured API URL)
// This keeps local dev simple and also allows your Vercel frontend to call the API.
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API endpoint to submit leads
app.post('/api/leads', async (req, res) => {
  if (!supabase) {
    return res.status(503).json({
      success: false,
      message: 'Database not configured (SUPABASE_URL and SUPABASE_KEY required)',
    });
  }
  try {
    const { name, mobile, email, investmentAmount } = req.body;

    if (!name || !mobile || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name, mobile, and email are required',
      });
    }

    const { data, error } = await supabase
      .from('leads')
      .insert({
        name,
        mobile,
        email,
        investment_amount: investmentAmount || '',
        source: 'ELSS Landing Page',
      })
      .select('id, name, mobile, email, investment_amount, source, created_at')
      .single();

    if (error) {
      console.error('Supabase error saving lead:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to save lead',
      });
    }

    res.status(201).json({
      success: true,
      message: 'Lead submitted successfully',
      lead: {
        id: data.id,
        name: data.name,
        mobile: data.mobile,
        email: data.email,
        investmentAmount: data.investment_amount,
        source: data.source,
        createdAt: data.created_at,
      },
    });
  } catch (error) {
    console.error('Error saving lead:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

// API endpoint to get all leads (for admin)
app.get('/api/leads', async (req, res) => {
  if (!supabase) {
    return res.status(503).json({
      success: false,
      message: 'Database not configured (SUPABASE_URL and SUPABASE_KEY required)',
    });
  }
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('id, name, mobile, email, investment_amount, source, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error reading leads:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to load leads',
      });
    }

    const leads = (data || []).map((row) => ({
      id: row.id,
      name: row.name,
      mobile: row.mobile,
      email: row.email,
      investmentAmount: row.investment_amount,
      source: row.source,
      createdAt: row.created_at,
    }));

    res.json({
      success: true,
      count: leads.length,
      leads,
    });
  } catch (error) {
    console.error('Error reading leads:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

// API endpoint to delete a lead by id
app.delete('/api/leads/:id', async (req, res) => {
  if (!supabase) {
    return res.status(503).json({
      success: false,
      message: 'Database not configured (SUPABASE_URL and SUPABASE_KEY required)',
    });
  }
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ success: false, message: 'Lead id is required' });
  }
  try {
    const { error } = await supabase.from('leads').delete().eq('id', id).select('id').single();
    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ success: false, message: 'Lead not found' });
      }
      console.error('Supabase error deleting lead:', error);
      return res.status(500).json({ success: false, message: 'Failed to delete lead' });
    }
    res.json({ success: true, message: 'Lead deleted' });
  } catch (error) {
    console.error('Error deleting lead:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    supabase: !!supabase,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS: localhost + FRONTEND_ORIGIN + *.vercel.app`);
  console.log(`API endpoints:`);
  console.log(`  POST http://localhost:${PORT}/api/leads - Submit a new lead`);
  console.log(`  GET    http://localhost:${PORT}/api/leads - Get all leads`);
  console.log(`  DELETE http://localhost:${PORT}/api/leads/:id - Delete a lead`);
  console.log(`  GET    http://localhost:${PORT}/api/health - Health check`);
});
