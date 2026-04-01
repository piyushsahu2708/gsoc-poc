# Piyush API Dashboard PoC

This PoC includes:

- **Node.js + Express backend** with a `/sales-data` endpoint.
- **React frontend dashboard** with a button to fetch and display products.

## Project Structure

- `backend/` - Express API server (default port `4000`)
- `frontend/` - React app powered by Vite (default port `5173`)

## Run Locally

### 1) Start backend

```bash
cd backend
npm install
npm run start
```

### 2) Start frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser and click **Fetch Sales Data**.
