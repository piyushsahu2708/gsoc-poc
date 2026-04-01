const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/sales-data', (req, res) => {
  res.json({
    products: [
      { id: 1, name: 'Laptop Pro 14', category: 'Electronics', unitsSold: 145, revenue: 217500 },
      { id: 2, name: 'Ergo Office Chair', category: 'Furniture', unitsSold: 89, revenue: 66750 },
      { id: 3, name: 'Mechanical Keyboard', category: 'Accessories', unitsSold: 212, revenue: 31800 },
      { id: 4, name: 'Noise Cancelling Headphones', category: 'Electronics', unitsSold: 134, revenue: 80400 }
    ]
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
