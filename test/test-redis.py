from faker import Faker
from rediscluster import RedisCluster

#构建所有的节点
startup_nodes = [
    {"host":"192.168.0.105", "port":6379},  # 主
    {"host":"192.168.0.105", "port":6380},  # 6379的从数据库
    {"host":"192.168.0.105", "port":6381},  # 主
    {"host":"192.168.0.105", "port":6382},  # 6380的从数据库
    {"host":"192.168.0.101", "port":6383},  # 主
    {"host":"192.168.0.102", "port":6384}   # 6381的从数据库
]
#构建StrictRedisCluster对象
redis_store= RedisCluster(startup_nodes=startup_nodes, decode_responses=True)
# 设置key键为name、money; value值为 '北京'、'10亿'
redis_store.set('name', '北京')
redis_store.set('money', '10亿')
fake = Faker(locale='zh_CN')
for item in range(100000):
    address = fake.address()
    redis_store.set('a' + str(item), address)
    print('a' + str(item), address)
