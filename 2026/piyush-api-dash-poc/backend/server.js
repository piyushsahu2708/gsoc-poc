const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const salesData = {
  products: [
    { id: 1, name: 'Analytics Pro Subscription', category: 'Software', revenue: 124500 },
    { id: 2, name: 'Cloud Storage Add-on', category: 'Infrastructure', revenue: 89300 },
    { id: 3, name: 'Team Collaboration Suite', category: 'Software', revenue: 156750 },
    { id: 4, name: 'AI Insights Package', category: 'Electronics', revenue: 210200 }
  ]
};

function runSalesTools(products) {
  const topProduct = [...products].sort((a, b) => b.revenue - a.revenue)[0];

  const revenueByCategory = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + product.revenue;
    return acc;
  }, {});

  const topCategory = Object.entries(revenueByCategory).sort((a, b) => b[1] - a[1])[0];

  return {
    topProduct,
    topCategory: { name: topCategory[0], revenue: topCategory[1] },
    totalRevenue: products.reduce((sum, product) => sum + product.revenue, 0)
  };
}

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

app.get('/mcp-query', (req, res) => {
  const toolOutput = runSalesTools(salesData.products);

  res.json({
    workflow: {
      agent: 'Sales Analytics Agent',
      server: 'MCP-style Sales Server',
      toolsUsed: ['topProductTool', 'categoryRevenueTool', 'totalRevenueTool']
    },
    insight: `Top category is ${toolOutput.topCategory.name} with $${toolOutput.topCategory.revenue.toLocaleString()} in revenue. Prioritize campaigns around ${toolOutput.topProduct.name}.`,
    toolOutput
  });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
