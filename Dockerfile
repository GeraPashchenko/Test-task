FROM postgres:14 as db
WORKDIR /app
COPY ./docker-initdb/01-init-db.sql ./docker-entrypoint-initdb.d/01-init-db.sql
COPY ./docker-initdb/02-load-data.sql ./docker-entrypoint-initdb.d/02-load-data.sql
