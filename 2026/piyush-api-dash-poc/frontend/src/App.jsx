import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchSalesData = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:4000/sales-data');
      if (!response.ok) {
        throw new Error('Failed to fetch sales data');
      }
      const data = await response.json();
      setProducts(data.products || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Sales Dashboard PoC</h1>
      <button onClick={fetchSalesData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Sales Data'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul style={{ marginTop: '1rem' }}>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}: ${product.revenue.toLocaleString()}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
