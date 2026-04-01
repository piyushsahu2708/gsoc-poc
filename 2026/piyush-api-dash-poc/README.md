# API Dashboard PoC

This Proof of Concept demonstrates a simple full-stack sales dashboard using an Express backend and a React (Vite) frontend.

## Features

- Backend API with health check endpoint
- Backend sales data endpoint serving sample product revenue data
- Frontend button-driven data fetch from backend
- Frontend rendering of product names and revenue totals

## Tech Stack

- **Backend:** Node.js, Express, CORS
- **Frontend:** React, Vite

## Project Structure

```text
2026/piyush-api-dash-poc/
  backend/
    package.json
    server.js
  frontend/
    package.json
    index.html
    vite.config.js
    src/
      main.jsx
      App.jsx
  README.md
```

## How to Run

### 1) Start backend

```bash
cd 2026/piyush-api-dash-poc/backend
npm install
npm start
```

The backend runs on `http://localhost:4000`.

- Health check: `GET http://localhost:4000/health`
- Sales data: `GET http://localhost:4000/sales-data`

### 2) Start frontend

Open a second terminal:

```bash
cd 2026/piyush-api-dash-poc/frontend
npm install
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`). Open it and click **Fetch Sales Data**.
