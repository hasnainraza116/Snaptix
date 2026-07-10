# Snaptix Website

AI products that work — chatbots, web apps, and intelligent systems.

## Structure

```
backend/    FastAPI service (Python 3.11)
frontend/   React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion
```

## Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate          # Windows
source venv/bin/activate       # Mac/Linux
pip install -r requirements.txt
# fill in API keys in .env (already present, gitignored)
uvicorn main:app --reload --port 8000
```

API available at `http://127.0.0.1:8000`, health check at `/health`.

Structure:

```
backend/
  main.py            FastAPI entry point, CORS, router registration
  .env                API keys (gitignored)
  requirements.txt
  routers/
    contact.py        POST /api/contact  (email via Resend)
    chat.py            POST /api/chat     (Anthropic streaming, optional RAG)
    projects.py        GET  /api/projects
  services/
    ai_service.py      Anthropic + OpenAI wrappers
    email_service.py   Resend email sending
    rag_service.py     LangChain RAG pipeline (in-memory vector store)
  models/
    schemas.py         Pydantic request/response models
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Dev server runs at `http://localhost:5173`. API calls go straight to the backend via
the axios instance in `src/lib/api.ts`, pointed at `VITE_API_URL` (`frontend/.env`,
defaults to `http://localhost:8000`).

Structure:

```
frontend/
  src/
    components/
      ui/           Button, Badge, Card, Input, Textarea, Select
      sections/     Hero, Services, Projects, Process, Stats, Contact
      layout/       Navbar, Footer
      animations/   ScrollReveal, CustomCursor, PageLoader, ParticleField
    pages/
      Home.tsx      Assembles all sections in order
    lib/
      api.ts         Axios instance -> VITE_API_URL
      cn.ts           clsx + tailwind-merge class helper
      content.ts      Static copy (services, process steps, stats)
    App.tsx          Router + global providers (PageLoader, CustomCursor)
    main.tsx
  tailwind.config.ts  Custom color tokens (void, panel, signal, beacon, paper, muted)
```

Color tokens: `void` (#0A0F0E background), `panel` (#111816 surfaces), `signal`
(#4FD8C4 primary accent), `beacon` (#E0883A secondary accent), `paper` (#EDE6D6 text),
`muted` (#6B7280 secondary text). Headings use Big Shoulders Display, body text uses Inter.

## Deployment

- Backend → Railway
- Frontend → Vercel

Update the CORS origins list in `backend/main.py` to include the deployed frontend URL,
and set `VITE_API_URL` in the frontend's production environment to the deployed backend URL.

## Contact

hasnainraza116@gmail.com
