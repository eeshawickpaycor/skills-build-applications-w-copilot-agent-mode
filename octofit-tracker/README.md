# OctoFit Tracker 🐙💪

A modern multi-tier fitness tracking application built with GitHub Copilot Agent Mode.

## Architecture

| Tier | Technology | Port |
|------|-----------|------|
| Frontend | React 19 + Vite + TypeScript | 5173 |
| Backend | Node.js + Express + TypeScript | 8000 |
| Database | MongoDB + Mongoose | 27017 |

## Getting Started

### Frontend

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Backend

```bash
cd octofit-tracker/backend
npm install
npm run dev
```

API available at [http://localhost:8000](http://localhost:8000).

### MongoDB

Ensure MongoDB is running on port **27017**. The backend connects to `mongodb://localhost:27017/octofit` by default, or override with the `MONGO_URI` environment variable.
