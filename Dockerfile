FROM nginx
MAINTAINER Sett Wai

COPY dist /usr/share/nginx/html/docker4devs/dist
COPY index.html /usr/share/nginx/html/docker4devs/

EXPOSE 80 443

VOLUME ["/var/cache/nginx"]

CMD ["nginx", "-g", "daemon off;"]
