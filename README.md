# NodeJS_Express_CRUD_with_MongoDB

# To start

```
npm i
cp .env.example .env
cd mongodb
docker-compose up -d
np run dev
```

# To test calls

```
GET
    curl http://localhost:8000/api/muestras
GET BY ID
GET BY ANOMALÍA
GET BY USUARIO
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
