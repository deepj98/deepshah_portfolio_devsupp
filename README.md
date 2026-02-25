# Portfolio

Single-page portfolio: profile, projects (automation + websites), work experience, about & contact.

## Tech

- **Frontend:** React (Vite)
- **Backend:** Node.js (Express)

## Run

```bash
# Install root + client + server deps
npm install
cd client && npm install && cd ..
cd server && npm install && cd ..

# Dev: run both (client on :5173, server on :3001)
npm run dev

# Open http://localhost:5173
```

## Edit content

Update **`client/src/data.js`** — profile, projects, work, and about/contact. No other code changes needed.

## Build for production

```bash
npm run build
cd server && npm start
# Serve from http://localhost:3001
```
