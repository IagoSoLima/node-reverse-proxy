FROM nginx:latest

RUN apt-get update &&\ 
    apt-get install curl

COPY html /usrl/share/nginx/html

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD ["nginx","-g","daemon off;"]