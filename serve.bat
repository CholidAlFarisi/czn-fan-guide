@echo off
title Chaos Zero Nightmare - Local Web Server
cd /d "%~dp0"
echo ===================================================
echo   Starting Chaos Zero Nightmare Fan Guide (Local)
echo ===================================================
python serve.py
if errorlevel 1 (
    echo Python failed, trying python3 or basic http.server...
    python -m http.server 8000
)
pause
