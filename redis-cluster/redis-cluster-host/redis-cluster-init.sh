redis-cli --cluster create \
192.168.0.105:7379 \
192.168.0.105:7380 \
192.168.0.105:7381 \
192.168.0.105:7382 \
192.168.0.105:7383 \
192.168.0.105:7384 --cluster-replicas 1  --cluster-yes \
&& redis-cli -h 192.168.0.105 -p 7379 cluster info