# Plant Disease Detection

An end-to-end app to detect plant diseases from leaf images. The FastAPI backend serves a trained model, and the Vite + React frontend provides a beautiful, responsive UI with drag-and-drop uploads and instant predictions.

## Features
- AI-powered disease prediction with confidence score
- Drag-and-drop image upload with live preview
- Smooth scroll to results, history of recent predictions
- Simple hash-based routing with an About page
- Tailwind CSS styling and Inter font for clean typography

## Tech Stack
- Backend: FastAPI (Python), TensorFlow/Keras model
- Frontend: React 19, Vite, Tailwind CSS v4

## Prerequisites
- Python 3.10+
- Node.js 18+ and npm (or yarn/pnpm)

## Project Structure
```
Plant_Disease_Detection/
├─ backend/
│  ├─ main.py                 # FastAPI app with /predict endpoint
│  ├─ model.py                # Model loading/inference helpers
│  ├─ saved_model/            # Model weights and class names
│  └─ requirements.txt
├─ frontend/
│  ├─ index.html
│  ├─ src/
│  │  ├─ App.jsx
│  │  ├─ About.jsx
│  │  ├─ main.jsx
│  │  └─ components/
│  │     └─ ImageUploader.jsx
│  ├─ tailwind.css
│  └─ package.json
└─ .gitignore
```

## Setup

### 1) Backend (FastAPI)
From the `backend` directory:

```bash
python -m venv .venv
# Windows
.venv\Scripts\activate
# macOS/Linux
source .venv/bin/activate

pip install -r requirements.txt

# Run the API (reload for dev)
uvicorn main:app --reload --port 8000
```

This starts the API at `http://localhost:8000` with the `POST /predict` endpoint.

### 2) Frontend (Vite + React)
From the `frontend` directory:

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` (default Vite port).

## Usage
1. Start the backend (port 8000).
2. Start the frontend.
3. Open the app in your browser.
4. Drag-and-drop or select a leaf image to get a prediction and confidence score.

Note: The frontend expects the API at `http://localhost:8000/predict`. If you change the backend URL/port, update the fetch call in `frontend/src/components/ImageUploader.jsx`.

## API
- `POST /predict`
  - Body: multipart/form-data with `file` (image)
  - Response: `{ "prediction": string, "confidence": number }`

## Environment
- If you need environment variables, create a `.env` (ignored by git). Provide a `.env.example` for reference if needed.

## Development Notes
- Tailwind v4 syntax is used (e.g., `bg-linear-to-r`). If you see class warnings, ensure Tailwind is up to date and that `tailwind.css` is imported in `main.jsx`.
- The app uses a lightweight hash router (`#/` and `#/about`) to avoid extra dependencies.

## Deploy
- Backend: Deploy FastAPI (e.g., Uvicorn/Gunicorn, Docker, or a PaaS). Ensure the model files are included.
- Frontend: `npm run build` to produce static assets in `frontend/dist/`, then serve via any static host (Netlify, Vercel, Nginx, etc.). Update API URL for production.

## License
MIT


