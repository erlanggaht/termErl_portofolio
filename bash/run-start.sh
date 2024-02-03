#!/usr/bin/bash

# source .env
DEFAULT_HOST=0.0.0.0
DEFAULT_PORT=4003

EXE_HOST=${HOST:-$DEFAULT_HOST}
EXE_PORT=${PORT:-$DEFAULT_PORT}

npx next start -- -H $EXE_HOST -p $EXE_PORT
