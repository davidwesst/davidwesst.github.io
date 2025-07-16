#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

# Update NPM
echo "Updating npm..."
npm install -g npm@latest

# Install project dependencies
echo "Installing npm dependencies..."
npm install -y

# Install Playwright Dependencies
echo "Installing Playwright dependencies..."
npx playwright install --with-deps

# Setup and checkout files with Git LFS
echo "Checking out LFS files..."
git lfs install
git lfs pull
git lfs checkout

# Build the project
echo "Building the project..."
npm run build

# Print completion message
echo "Post-create commands executed successfully!"