import { useState } from 'react';

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem 1rem',
    color: '#1f2937'
  },
  heading: {
    marginBottom: '1rem'
  },
  controls: {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: '1rem'
  },
  button: {
    border: 'none',
    background: '#2563eb',
    color: '#fff',
    padding: '0.6rem 1rem',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  insightBox: {
    background: '#eef2ff',
    border: '1px solid #c7d2fe',
    borderRadius: '10px',
    padding: '0.8rem',
    marginBottom: '1rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '0.8rem'
  },
  card: {
    background: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '0.9rem',
    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.06)'
  },
  meta: {
    margin: '0.2rem 0',
    color: '#4b5563'
  },
  error: {
    color: '#b91c1c'
  }
};

function App() {
  const [products, setProducts] = useState([]);
  const [insight, setInsight] = useState('');
  const [loadingSales, setLoadingSales] = useState(false);
  const [loadingInsight, setLoadingInsight] = useState(false);
  const [error, setError] = useState('');

  const fetchSalesData = async () => {
    setLoadingSales(true);
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
      setLoadingSales(false);
    }
  };

  const fetchInsight = async () => {
    setLoadingInsight(true);
    setError('');

    try {
      const response = await fetch('http://localhost:4000/agent-insight');
      if (!response.ok) {
        throw new Error('Failed to fetch AI insight');
      }
      const data = await response.json();
      setInsight(data.insight || 'No insight available.');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingInsight(false);
    }
  };

  return (
    <main style={styles.app}>
      <h1 style={styles.heading}>Sales Dashboard PoC</h1>

      <div style={styles.controls}>
        <button style={styles.button} onClick={fetchSalesData} disabled={loadingSales}>
          {loadingSales ? 'Loading Sales...' : 'Fetch Sales Data'}
        </button>
        <button style={styles.button} onClick={fetchInsight} disabled={loadingInsight}>
          {loadingInsight ? 'Generating...' : 'Get AI Insight'}
        </button>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      {insight && (
        <section style={styles.insightBox}>
          <strong>AI Insight:</strong> {insight}
        </section>
      )}

      <section style={styles.grid}>
        {products.map((product) => (
          <article key={product.id} style={styles.card}>
            <h3>{product.name}</h3>
            <p style={styles.meta}>Category: {product.category}</p>
            <p style={styles.meta}>Revenue: ${product.revenue.toLocaleString()}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
