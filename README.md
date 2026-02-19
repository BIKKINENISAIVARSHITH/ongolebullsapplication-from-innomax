# ELSS Landing Page – Monorepo

This project is a **monorepo** with two top-level applications:

- **`/frontend`** – React + Vite + TypeScript + Tailwind (ELSS landing page)
- **`/backend`** – Node.js + Express API (leads and health endpoints)

---

## Folder structure

```
ELSS Landing Page/
├── frontend/                 # React/Vite app
│   ├── src/
│   │   ├── components/
│   │   ├── sections/
│   │   ├── lib/
│   │   ├── hooks/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json          # frontend deps only
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── vercel.json           # for frontend-only deploy
│   └── .env.example
├── backend/                  # Express API
│   ├── server.js
│   ├── supabase-leads-table.sql   # run in Supabase to create leads table
│   ├── package.json          # backend deps only
│   └── .env.example
├── .gitignore
└── README.md                 # this file
```

*(The legacy `app/` folder can be removed after you confirm the new setup works.)*

---

## How to run locally

### Backend (API)

```bash
cd backend
npm install
npm run dev
```

- Server runs at **http://localhost:5000**
- Endpoints: `POST /api/leads`, `GET /api/leads`, `GET /api/health`
- **Supabase:** copy `backend/.env.example` to `backend/.env` and set `SUPABASE_URL`, `SUPABASE_KEY`. Create the `leads` table by running `backend/supabase-leads-table.sql` in the Supabase SQL Editor.
- Optional: set `PORT` or `FRONTEND_ORIGIN` in `backend/.env` if needed.

### Frontend (React app)

```bash
cd frontend
npm install
npm run dev
```

- App runs at **http://localhost:5173**
- In dev it calls the backend at **http://localhost:5000** unless you set `VITE_API_URL` in `frontend/.env`.

**Run both:** open one terminal for `backend` and one for `frontend`, then use the app at http://localhost:5173.

**Admin portal:** open http://localhost:5173/admin-portal and sign in with the configured admin password to view leads (see `frontend/src/AdminLeads.tsx` for the default).

---

## How to deploy

### Deploy frontend separately (e.g. Vercel)

1. In Vercel (or your host), set **Root Directory** to **`frontend`**.
2. Build command: `npm run build` (default for Vite).
3. Output directory: `dist`.
4. If the frontend is on a different domain than the API, set **Environment variable** in the dashboard:
   - `VITE_API_URL` = your backend base URL (e.g. `https://your-api.railway.app`), no trailing slash.

The frontend will call `${VITE_API_URL}/api/leads` in production when `VITE_API_URL` is set.

### Deploy backend separately (e.g. Railway, Render, Fly.io, VPS)

1. Set **Root Directory** to **`backend`** (or deploy only the `backend` folder).
2. Install: `npm install`, start: `npm start` (or `node server.js`).
3. Set env vars:
   - **`PORT`** – port the server listens on (often provided by the host).
   - **`SUPABASE_URL`** and **`SUPABASE_KEY`** – from your Supabase project (API URL and anon/service key).
   - **`FRONTEND_ORIGIN`** – your frontend URL for CORS (e.g. `https://your-app.vercel.app`). The backend also allows any `*.vercel.app` origin.

After deploy, use the backend URL as `VITE_API_URL` in the frontend project so the landing page talks to this API.

---

## Summary

| Task              | Command / Location |
|-------------------|--------------------|
| Run frontend     | `cd frontend && npm run dev` → http://localhost:5173 |
| Run backend      | `cd backend && npm run dev`   → http://localhost:5000 |
| Deploy frontend  | Root = `frontend`, set `VITE_API_URL` if API is elsewhere |
| Deploy backend   | Root = `backend`, set `PORT` and `FRONTEND_ORIGIN`     |
