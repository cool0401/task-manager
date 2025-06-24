#!/bin/bash

# Open new terminals for each service (works on macOS with Terminal.app)
osascript <<EOF
tell application "Terminal"
    do script "cd $(pwd)/backend && source venv/bin/activate && python app.py"
    do script "cd $(pwd)/frontend && npm start"
    do script "cd $(pwd)/poller && npm start"
end tell
EOF

echo "All services started in new Terminal windows."