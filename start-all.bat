@echo off

REM Start backend Flask server
start cmd /k "cd backend && venv\Scripts\activate.bat && python app.py"

REM Start frontend React dev server
start cmd /k "cd frontend && npm start"

REM Start poller Node.js script
start cmd /k "cd poller && npm start"

echo All services started in new windows.
pause