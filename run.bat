@echo off
echo Starting Lyra Tool Directory...
echo.

REM Check if node_modules exists, if not run install
if not exist "node_modules\" (
    echo Installing dependencies...
    call pnpm install
)

echo Starting development server...
call pnpm run dev
