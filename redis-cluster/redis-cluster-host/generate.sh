for port in `seq 7379 7384`; do \
  mkdir -p container/${port}/conf \
  && PORT=${port} envsubst < redis.conf.template > container/${port}/conf/redis.conf \
  && mkdir -p container/${port}/data;\
done