#!/bin/bash

# start storage emulator
node_modules/.bin/azurite-blob --location ./tmp/azurite &
