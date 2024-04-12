
import random
from string import ascii_letters

import pandas as pd
from loguru import logger
from rediscluster import (ClusterBlockingConnectionPool, ClusterConnectionPool,
                          RedisCluster)

if __name__ == "__main__":
    logger.info("redis集群开始连接！！！")
    # redis集群节点
    startup_nodes = [
        {'host': '127.0.0.1', 'port': 6379},
        {'host': '127.0.0.1', 'port': 6380},
        {'host': '127.0.0.1', 'port': 6381},
        {'host': '127.0.0.1', 'port': 6382},
        {'host': '127.0.0.1', 'port': 6383},
        {'host': '127.0.0.1', 'port': 6384}]
    # 构建连接池
    pool = ClusterConnectionPool(startup_nodes=startup_nodes)

    # 创建redis集群客户端
    redis_client = RedisCluster(connection_pool=pool)
    logger.info("redis集群连接成功！！！")

    # 数据写入测试
    for i in range(20):
        # 创建一个随机字符串作为key
        key = ''.join(random.sample(ascii_letters, k=7))
        redis_client.set(key, random.randint(1, 100), ex=100)
        print(key)
    logger.info("测试数据写入成功!!!")
