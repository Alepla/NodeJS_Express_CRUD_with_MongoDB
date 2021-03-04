# NodeJS_Express_CRUD_with_MongoDB

Node version v12.18.3

## To start in dev

```
npm i
cp .env.example .env
np run dev
```

## To start all in docker

```
#Create the image for our node backend
sudo docker build -t node-app_rithmi .
#Run the docker-compose.yml that creates the containers for our database in mongo and the backend
sudo docker-compose up -d
#Now type http://localhost:49160/ in the browser
```

## To test calls

```
GET
    curl http://localhost:8000/api/muestras
GET BY ID
    curl http://localhost:8000/api/muestra/603f8f76e3f9410a183239b4
GET BY ANOMALY
    curl http://localhost:8000/api/muestrasWithAnomaly
GET BY USER
    curl http://localhost:8000/api/muestraByUser/2
PUT
    curl -X PUT -H 'Content-Type: application/json' -d '{
        "date": "2021-02-04 ",
        "heartStatus": 499,
        "pulse": 87,
        "hasECG": true,
        "anomaly": true,
        "user": 700
    }' http://localhost:8000/api/update-muestra/603fb96f0390dc7838a97f9a
POST
    curl -X POST -H 'Content-Type: application/json' -d '{
        "date": "2021-02-04 ",
        "heartStatus": 499,
        "pulse": 87,
        "hasECG": true,
        "anomaly": true,
        "user": 700
    }' http://localhost:8000/api/add-muestra
DELETE
    curl -X DELETE http://localhost:8000/api/delete-muestra/603fb96f0390dc7838a97f9a
```
