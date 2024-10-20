for port in `seq 36379 36383`; do \
  mkdir -p container/redis-${port}/conf \
  && PORT=${port} envsubst < redis.conf.template > container/redis-${port}/conf/redis.conf \
  && mkdir -p container/redis-${port}/data;\
done

for port in `seq 26379 26381`; do \
  mkdir -p container/sentinel-${port}/conf \
  && PORT=${port} envsubst < sentinel.conf.template > container/sentinel-${port}/conf/sentinel.conf \
  && mkdir -p container/sentinel-${port}/data;\
done