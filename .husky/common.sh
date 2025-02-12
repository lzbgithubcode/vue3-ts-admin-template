#!/bin/sh
command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# Workaround for Windows 10, Git Bash and Pnpm
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi

if [ -f "$HOME/.nvm/nvm.sh" ]; then
    # Load nvm for Unix-like systems
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    nvm use || exit
elif command -v nvm >/dev/null 2>&1; then
    # Load nvm for Windows (if using nvm-windows)
    nvm use 20.10.0 || exit
else
    echo "Error: nvm is not installed or configured correctly."
    exit 1
fi
