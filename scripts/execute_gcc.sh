#!/bin/bash

if docker ps -a --filter "name=lenx-cpp" --format '{{.Names}}' | grep -q "lenx-cpp"; then
    echo "Container with the name lenx-cpp exists. Removing it..."
    docker rm -f lenx-cpp
fi

FILE_NAME=$1
INPUT_ARG=$2

docker run -d --name lenx-cpp gcc sleep infinity

if [ $? -ne 0 ]; then
    echo "Failed to start the container"
    exit 1
fi

docker cp "scripts/${FILE_NAME}" lenx-cpp:"/home/${FILE_NAME}"

if [ $? -ne 0 ]; then
    echo "Failed to copy the file to the container"
    docker rm -f lenx-cpp
    exit 1
fi

docker exec lenx-cpp g++ "home/${FILE_NAME}" -o home/cpp_exe

if [ $? -ne 0 ]; then
    echo "Failed to compile the ${FILE_NAME} file"
    docker rm -f lenx-cpp
    exit 1
fi

docker exec lenx-cpp bash -c "echo ${INPUT_ARG} | home/cpp_exe"

if [ $? -ne 0 ]; then
    echo "Failed to execute the compiled binary"
    docker rm -f lenx-cpp
    exit 1
fi

docker rm -f lenx-cpp
