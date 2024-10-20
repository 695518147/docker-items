# 方式一
redis-cli --cluster create \
192.168.0.105:5379 \
192.168.0.105:5380 \
192.168.0.105:5381 \
192.168.0.105:5382 \
192.168.0.105:5383 \
192.168.0.105:5384 --cluster-replicas 1  --cluster-yes \
&& redis-cli -h 192.168.0.105 -p 5379 cluster info

# 方式二
# redis-cli --cluster create \
# redis-5379:5379 \
# redis-5380:5380 \
# redis-5381:5381 \
# redis-5382:5382 \
# redis-5383:5383 \
# redis-5384:5384 --cluster-replicas 1  --cluster-yes \
# && redis-cli -h redis-5379 cluster info

# 方式三
# redis-cli --cluster create \
# 172.16.0.4:6379 \
# 172.16.0.5:6379 \
# 172.16.0.6:6379 \
# 172.16.0.7:6379 \
# 172.16.0.8:6379 \
# 172.16.0.9:6379 --cluster-replicas 1  --cluster-yes \
# && redis-cli -h redis-5379 cluster info


# 以上三种方式只有第一种可以



