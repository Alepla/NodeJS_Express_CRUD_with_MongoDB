# NodeJS_Express_CRUD_with_MongoDB

Node version v12.18.3

## To start in dev

```
npm i
cp .env.example .env
docker build -t node-app_rithmi .
docker-compose up -d
npm run dev
```

## To start all in docker

```
#Create the image for our node backend
docker build -t node-app_rithmi .
#Run the docker-compose.yml that creates the containers for our database in mongo and the backend
docker-compose up -d
#Now type http://localhost:49160/ in the browser
```

## Adding auth to MongoDB

```
#First we have to uncomment in the index.ts the line 24 and comment the line 25.

#Then we have to run:
docker build -t node-app_rithmi .
docker-compose up -d
docker exec -it mongodb_rithmi /bin/bash

use admin
db.createUser(
    {
        user: "root",
        pwd: "root",
        roles:["root"]
    }
);
use rithmi
db.createUser(
    {
        user: "alex",
        pwd: "alex",
        roles:[
            {
                role: "readWrite",
                db: "rithmi"
            }
        ]
    }
);

#Descoment this line in the docker-compose.yml
command: [--auth]

#And run again:
docker-compose up -d
```

## To test calls

```
You can import the file Rithmi.postman_collection.json in postman or use the following commands
```

```
GET
    curl http://localhost:49160/api/muestras
GET BY ID
    curl http://localhost:49160/api/muestraById/:id
GET BY ANOMALY
    curl http://localhost:49160/api/muestrasWithAnomaly
GET BY USER
    curl http://localhost:49160/api/muestraByUser/2
PUT
    curl -X PUT -H 'Content-Type: application/json' -d '{
        "date": "2021-02-04",
        "heartStatus": 499,
        "pulse": 87,
        "hasECG": true,
        "anomaly": true,
        "user": 700
    }' http://localhost:49160/api/update-muestra/:id
POST
    curl -X POST -H 'Content-Type: application/json' -d '{
        "date": "2021-02-04",
        "heartStatus": 499,
        "pulse": 87,
        "hasECG": true,
        "anomaly": true,
        "user": 700
    }' http://localhost:49160/api/add-muestra
DELETE
    curl -X DELETE http://localhost:49160/api/delete-muestra/:id
```
