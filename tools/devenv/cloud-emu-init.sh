#!/bin/bash

# start storage emulator
node_modules/.bin/azurite-blob --location ./tmp/azurite &
AZURITE_PID=$!

# clone blog repository
git clone https://github.com/davidwesst/blog ./tmp/blog

# publish to emulator
CONNECTION_STRING="AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;DefaultEndpointsProtocol=http;BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;QueueEndpoint=http://127.0.0.1:10001/devstoreaccount1;TableEndpoint=http://127.0.0.1:10002/devstoreaccount1;"
./tmp/blog/.tools/publish.sh $CONNECTION_STRING ./tmp/blog/posts/

# clean up repository
rm -rf ./tmp/blog

# end storage emulator
kill $AZURITE_PID