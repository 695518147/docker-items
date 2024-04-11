FROM redis:7.2.4
COPY ./redis.conf /usr/local/etc/redis/redis.conf
EXPOSE 7379
CMD [ "redis-server", "/usr/local/etc/redis/redis.conf" ]