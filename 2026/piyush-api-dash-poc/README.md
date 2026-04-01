# API Dashboard PoC

This Proof of Concept demonstrates a minimal full-stack sales dashboard using an Express backend and a React (Vite) frontend.

## Features

- Backend API with health check endpoint
- Sales data endpoint with sample product revenue
- Simulated AI insight endpoint (`/agent-insight`)
- MCP-style query endpoint (`/mcp-query`) with simulated tool execution
- Frontend actions for sales fetch, insight fetch, and agent run
- Clean dashboard cards for product display

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

## MCP Workflow (Simulated)

Inspired by AWS MCP Sales Analytics architecture:

1. **MCP Client (Frontend)** sends a request when user clicks **Run AI Agent**.
2. **MCP Server (Backend)** receives `/mcp-query` and coordinates tool calls.
3. **Tools (Simulated in backend)** compute top product, category revenue, and total revenue.
4. **Agent Response** returns workflow metadata + recommendation insight to the UI.

This keeps the project minimal while demonstrating MCP-style responsibilities (agent + server + tools).

## How to Run

### 1) Start backend

```bash
cd 2026/piyush-api-dash-poc/backend
npm install
npm start
```

Backend runs on `http://localhost:4000`.

- Health: `GET /health`
- Sales Data: `GET /sales-data`
- Agent Insight: `GET /agent-insight`
- MCP Query: `GET /mcp-query`

### 2) Start frontend

```bash
cd 2026/piyush-api-dash-poc/frontend
npm install
npm run dev
```

Open the printed local Vite URL (typically `http://localhost:5173`) and use:
- **Fetch Sales Data**
- **Get AI Insight**
- **Run AI Agent**
