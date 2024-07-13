#!/bin/bash

if docker ps -a --filter "name=lenx-java" --format '{{.Names}}' | grep -q "lenx-java"; then
    echo "Container with the name lenx-java exists. Removing it..."
    docker rm -f lenx-java
fi

FILE_NAME=$1

docker run -d --name lenx-java openjdk sleep infinity

if [ $? -ne 0 ]; then
    echo "Failed to start the container"
    exit 1
fi

docker cp "scripts/${FILE_NAME}" lenx-java:"/home/${FILE_NAME}"

if [ $? -ne 0 ]; then
    echo "Failed to copy the file to the container"
    docker rm -f lenx-java
    exit 1
fi

docker exec lenx-java java "home/${FILE_NAME}"

if [ $? -ne 0 ]; then
    echo "Failed to execute ${FILE_NAME} file"
    docker rm -f lenx-java
    exit 1
fi

docker rm -f lenx-java
