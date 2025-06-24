# Task Manager Project

## Overview

This project includes:

- **Backend:** Flask API for task management (Python)
- **Frontend:** React app user interface
- **Poller:** Node.js service polling backend for upcoming tasks and sending notifications

---

## Requirements

- Python 3.8+
- Node.js 16+
- npm (comes with Node.js)
- Git

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/cool0401/task-manager.git
cd task-manager
```
### 2. Setup Backend (Flask API)

```bash
cd backend
python -m venv venv             # Create virtual environment
# Activate the venv:
# On macOS/Linux:
source venv/bin/activate        
# On Windows:
venv\Scripts\activate.bat       
pip install --upgrade pip
pip install -r requirements.txt
```

### 3. Setup Frontend (React App)

```bash
cd ../frontend
npm install
```

### 4. Setup Poller (Node.js Service)

```bash
cd ../poller
npm install
```

### Running the Services

#### Option 1: Run separately (3 terminals)

Backend:
```bash
cd backend
source venv/bin/activate   # Or venv\Scripts\activate.bat on Windows
python app.py
```

Frontend:
```bash
cd frontend
npm start
```

Poller:
```bash
cd poller
npm start
```

#### Option 2: Run all at once with scripts
From project root:

Windows:
```bash
setup.bat
start-all.bat
```
macOS/Linux:
```bash
./setup.sh
./start-all.sh
```
### URLs
Backend API: http://localhost:5000

Frontend: http://localhost:3000

Poller runs in background polling backend.

### Notes
Ensure ports 5000 and 3000 are free

Poller logs tasks and sends notifications (mock)

For production, use PM2 (Node.js) and Gunicorn (Flask)

### Troubleshooting

Python venv issues? Check Python version and activation
npm errors? Verify Node.js and npm versions
CORS errors? Confirm CORS enabled in Flask backend

