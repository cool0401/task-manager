@echo off

REM --- Backend (Flask) setup ---
echo Setting up backend...
python -m venv backend\venv
call backend\venv\Scripts\activate.bat
python -m pip install --upgrade pip
pip install -r backend\requirements.txt
deactivate

REM --- Frontend setup ---
echo Setting up frontend...
cd frontend
npm install
cd ..

REM --- Poller setup ---
echo Setting up poller...
cd poller
npm install
cd ..

echo.
echo All dependencies installed!
pause
