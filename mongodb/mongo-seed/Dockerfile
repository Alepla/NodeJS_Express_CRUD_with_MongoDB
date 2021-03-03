FROM mongo

COPY samples.json /samples.json
CMD mongoimport --host mongodb --db rithmi --collection samples --type json --file /samples.json --jsonArray --mode upsert

