for no in `seq 1 6`; do \
  mkdir -p container/redis-manual-${no}/conf \
  && NO=${no} envsubst < redis.conf.template > container/redis-manual-${no}/conf/redis.conf \
  && mkdir -p container/redis-manual-${no}/data;\
done