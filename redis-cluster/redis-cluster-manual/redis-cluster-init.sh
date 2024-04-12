# redis-cli --cluster create \
# 172.18.0.11:6379 \
# 172.18.0.12:6379 \
# 172.18.0.13:6379 \
# 172.18.0.14:6379 \
# 172.18.0.15:6379 \
# 172.18.0.16:6379 --cluster-replicas 1  --cluster-yes \
# && redis-cli -h redis-manual-1 cluster info

redis-cli --cluster create \
redis-manual-1:6379 \
redis-manual-2:6379 \
redis-manual-3:6379 \
redis-manual-4:6379 \
redis-manual-5:6379 \
redis-manual-6:6379 --cluster-replicas 1  --cluster-yes \
&& redis-cli -h redis-manual-1 cluster info