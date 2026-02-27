# Indian Data Club – Allenhouse Business School Campus Body

Full-stack dynamic portal inspired by modern campus tech community websites.

## Project Structure

```
.
├── backend
│   ├── config/db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── package.json
│   └── server.js
└── frontend
    ├── admin.html
    ├── index.html
    └── assets
        ├── css/styles.css
        └── js
            ├── admin.js
            └── main.js
```

## Backend Setup (Node + Express + MongoDB)

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Default admin credentials are read from `.env` (`ADMIN_EMAIL`, `ADMIN_PASSWORD`).

## Frontend Setup

Serve `frontend` using any static server (e.g. VSCode Live Server):

```bash
cd frontend
python3 -m http.server 5500
```

## Core Features

- Sticky responsive navbar with smooth scrolling
- Hero, About, Stats (animated counters), Team, Events, Gallery, Contact, Footer
- Join form submits to backend registration API
- Dynamic Team/Event/Gallery sections powered by REST API
- Admin login + dashboard for CRUD operations:
  - Events (add/update/delete with poster upload)
  - Team members (add/update/delete with photo upload)
  - Gallery (upload/delete)
  - Registrations list view

## REST Endpoints

- `POST /api/auth/login`
- `GET/POST/PUT/DELETE /api/events`
- `GET/POST/PUT/DELETE /api/team`
- `GET/POST/DELETE /api/gallery`
- `POST /api/registrations`
- `GET /api/registrations` (admin only)

