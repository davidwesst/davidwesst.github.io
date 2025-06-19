#!/usr/bin/env bash

set -e

echo "Updating npm to latest version..."
npm install -g npm@latest

echo "Installing Playwright dependencies..."
npx playwright install --with-deps

echo "Installing project dependencies..."
npm install

echo "Pulling Git LFS files..."
if command -v git-lfs &> /dev/null; then
    git lfs install
    git lfs pull
else
    echo "Git LFS not installed. Installing Git LFS..."
    sudo apt-get update && sudo apt-get install -y git-lfs
    git lfs install
    git lfs pull
fi

echo "Post-create steps completed."