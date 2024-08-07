### Install docker

https://docs.docker.com/desktop/install/windows-install/

```bash

docker
docker -v
docker build .

docker run -p 3001:3000 a481ae3d7b8fe9ca3c042af0d6124d79ac7c29edf919e6d7f96c3d5950c95685

# in new CMD or Powershell

# display all run container
docker ps

# stop container ID
docker stop e83584fc1f73


docker build . -t nest-demo-docker
docker run -p 3001:3000 nest-demo-docker

docker build . -t express-demo-docker
docker run -p 3002:3000 express-demo-docker

# https://hub.docker.com/_/postgres

docker run --name postgresdb -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=m4_lec_back -d postgres
docker container inspect postgresdb
# "IPAddress": "172.17.0.3",

docker network create nestnetwork
docker network ls

docker stop postgresdb
docker rm postgresdb


docker run --name postgresdb -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=m4_lec_back --network nestnetwork -d postgres


docker build . -t nest-demo-docker
docker run -p 3001:3000 --network nestnetwork nest-demo-docker


docker run --name postgresdb -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=m4_lec_back --network nestnetwork -v pgdata:/var/lib/postgresql/data -d postgres

# docker-compose.yml
docker compose up
# en segundo plano
docker compose up -d
docker compose stop
docker compose rm



# ========== coneccion a docker ==========
docker exec -it pm4be-fgp555-postgresdb-1 bash
psql -U postgres