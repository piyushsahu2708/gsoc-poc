import { useState } from 'react';

const API_BASE_URL = 'http://localhost:4000';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchSalesData = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/sales-data`);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      setProducts(data.products || []);
    } catch (err) {
      setError(err.message || 'Failed to fetch sales data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <h1>Sales Dashboard</h1>
      <p>Click the button to load product sales data from the Express API.</p>

      <button className="fetch-btn" onClick={fetchSalesData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Sales Data'}
      </button>

      {error && <p className="error">{error}</p>}

      <section className="cards-grid">
        {products.map((product) => (
          <article className="card" key={product.id}>
            <h2>{product.name}</h2>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Units Sold:</strong> {product.unitsSold}</p>
            <p><strong>Revenue:</strong> ${product.revenue.toLocaleString()}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
