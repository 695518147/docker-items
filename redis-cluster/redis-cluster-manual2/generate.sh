for port in `seq 5379 5384`; do \
  mkdir -p container/${port}/conf \
  && PORT=${port} envsubst < redis.conf.template > container/${port}/conf/redis.conf \
  && mkdir -p container/${port}/data;\
done