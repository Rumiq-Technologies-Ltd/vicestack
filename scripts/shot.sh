#!/usr/bin/env bash
# Full-page screenshot + slice. Usage: scripts/shot.sh <path> <name> [width] [height]
set -e
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
SHOTS="C:/Users/PMYLS/AppData/Local/Temp/claude/C--Haider-Jalal-Claude-Projects-vicestack/634215a1-a23e-44d3-bd75-c71410289b9d/scratchpad/shots"
P="${1:-/}"; N="${2:-page}"; W="${3:-1440}"; H="${4:-12800}"
mkdir -p "$SHOTS"
rm -f "$SHOTS/$N"-*.jpg
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --user-data-dir="$SHOTS/../cp-$RANDOM" --no-first-run --no-default-browser-check \
  --virtual-time-budget=10000 --window-size=$W,$H \
  --screenshot="$SHOTS/$N-raw.png" "http://localhost:3000$P" >/dev/null 2>&1
node "$(dirname "$0")/slice.cjs" "$SHOTS/$N-raw.png" "$N"
rm -f "$SHOTS/$N-raw.png"
