const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

const salesData = {
  products: [
    { id: 1, name: 'Analytics Pro Subscription', category: 'Software', revenue: 124500 },
    { id: 2, name: 'Cloud Storage Add-on', category: 'Infrastructure', revenue: 89300 },
    { id: 3, name: 'Team Collaboration Suite', category: 'Software', revenue: 156750 },
    { id: 4, name: 'AI Insights Package', category: 'Electronics', revenue: 210200 }
  ]
};

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/sales-data', (req, res) => {
  res.json(salesData);
});

app.get('/agent-insight', (req, res) => {
  res.json({
    insight: 'Electronics category has highest revenue. Focus marketing here.'
  });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
