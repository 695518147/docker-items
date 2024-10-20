from faker import Faker
from redis.sentinel import Sentinel

sentinel_list = [
			("192.168.0.105", 26379),
			("192.168.0.105", 26380),
			("192.168.0.105", 26381)
		]
mySentinel = Sentinel(sentinel_list, password="redis_pwd")
master = mySentinel.master_for("mymaster")
slave = mySentinel.slave_for("mymaster")

# 使用master进行写的操作，使用slave进行读的操作
fake = Faker(locale='zh_CN')
# for item in range(100000):
#     address = fake.address()
#     master.set('b' + str(item), address)
#     print(slave.get('b' + str(item)))
print(master.info())
print(master.info("replication"))
print(master.info("sentinel"))