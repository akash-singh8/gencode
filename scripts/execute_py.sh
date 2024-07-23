#!/bin/bash

if docker ps -a --filter "name=lenx-py" --format '{{.Names}}' | grep -q "lenx-py"; then
    echo "Container with the name lenx-py exists. Removing it..."
    docker rm -f lenx-py
fi

FILE_NAME=$1
INPUT_ARG=$2

docker run -d --name lenx-py python sleep infinity

if [ $? -ne 0 ]; then
    echo "Failed to start the container"
    exit 1
fi

docker cp "scripts/${FILE_NAME}" lenx-py:"/home/${FILE_NAME}"

if [ $? -ne 0 ]; then
    echo "Failed to copy the file to the container"
    docker rm -f lenx-py
    exit 1
fi

docker exec lenx-py bash -c "echo ${INPUT_ARG} | python home/${FILE_NAME}"

if [ $? -ne 0 ]; then
    echo "Failed to execute ${FILE_NAME} file"
    docker rm -f lenx-py
    exit 1
fi

docker rm -f lenx-py
