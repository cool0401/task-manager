#!/bin/bash

# --- Backend (Flask) setup ---
echo "Setting up backend..."
python3 -m venv backend/venv
source backend/venv/bin/activate
python -m pip install --upgrade pip
pip install -r backend/requirements.txt
deactivate

# --- Frontend setup ---
echo "Setting up frontend..."
cd frontend || { echo "frontend folder not found"; exit 1; }
npm install
cd ..

# --- Poller setup ---
echo "Setting up poller..."
cd poller || { echo "poller folder not found"; exit 1; }
npm install
cd ..

echo "All dependencies installed!"
