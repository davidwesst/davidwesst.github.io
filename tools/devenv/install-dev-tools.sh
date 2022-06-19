#!/usr/bin/bash

# static web app and api requirements
yarn add -D @azure/static-web-apps-cli
yarn add -D azure-functions-core-tools@4 --unsafe-perm true

# wasm-pack for Rust
cargo install wasm-pack
