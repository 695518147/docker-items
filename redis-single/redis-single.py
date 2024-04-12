from redis import ConnectionPool, Redis
from faker import Faker

if __name__ == "__main__":
  pool = ConnectionPool(host='127.0.0.1', port=6279)
  red = Redis(connection_pool=pool)


  # 使用master进行写的操作，使用slave进行读的操作
  fake = Faker(locale='zh_CN')
  for item in range(100000):
      address = fake.address()
      red.set('b' + str(item), address)
      print(red.get('b' + str(item)))
  print(red.info())


