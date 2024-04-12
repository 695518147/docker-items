redis-cli --cluster create \
192.168.0.100:7379 \
192.168.0.100:7380 \
192.168.0.100:7381 \
192.168.0.100:7382 \
192.168.0.100:7383 \
192.168.0.100:7384 --cluster-replicas 1  --cluster-yes \
&& redis-cli -h redis-7379 cluster info