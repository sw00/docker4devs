#!/usr/bin/env bash

if [ "$1" = "build" ]; then
    npm run build && \
	docker build -t demo/docker4devs --rm .
elif [ "$1" = "run" ]; then
    docker run --name d4d -d -p 80:80 demo/docker4devs
elif [ "$1" = "clean" ]; then
    docker kill d4d && \
	docker rm d4d
fi
