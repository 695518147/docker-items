for port in `seq 7379 7384`; do \
  mkdir -p $(dirname $0)/container/${port}/conf \
  && PORT=${port} envsubst < redis.conf.template > $(dirname $0)/container/${port}/conf/redis.conf \
  && mkdir -p $(dirname $0)/container/${port}/data;\
done