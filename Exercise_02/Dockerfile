FROM mysql:latest
MAINTAINER ELAHEH_GOLGHANDASHTI
ENV MYSQL_ROOT_PASSWORD 123

ADD query.sql /docker-entrypoint-initdb.d
EXPOSE 3306


