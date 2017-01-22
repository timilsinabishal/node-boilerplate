#!/usr/bin/env bash

#navigate
parent_path=$( cd "$(dirname "${BASH_SOURCE}")" ; pwd -P )
cd "$parent_path"

#load environment variables
source ../.env
docker-compose -f "../docker-compose.yml" up -d