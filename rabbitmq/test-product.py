import pika
from json import loads


class Q:
    USERNAME = 'root'
    PASSWORD = '123123'
    VIRTUAL_HOST = '/'
    HOST = '192.168.0.103'
    PORT = 5672


class QUEUE:
    """队列名称"""
    queue0 = '队列0'
    queue1 = '队列1'
    queue2 = '队列2'


class Mq(QUEUE):
    def __init__(self, q=Q):
        credentials = pika.PlainCredentials(q.USERNAME, q.PASSWORD)
        parameters = pika.ConnectionParameters(q.HOST, q.PORT, q.VIRTUAL_HOST, credentials, heartbeat=0)
        self.connection = pika.BlockingConnection(parameters)
        self.channel = self.connection.channel()

    def basic_consume(self, queue, func=lambda a, b, c, d: print(loads(d))):
        """消费数据（默认不消费）"""
        self.channel.basic_consume(queue, func)
        self.channel.start_consuming()

    def consume(self, queue, func=print):
        """消费数据（默认不报错则消费）"""
        def _func(ch, method, properties, body):
            func(loads(body))
            ch.basic_ack(delivery_tag=method.delivery_tag)  # 不报错则消费
        self.basic_consume(queue, _func)

    def queue_declare(self, queue):
        """声明队列"""
        self.channel.queue_declare(queue)
        print('declare queue:', queue)

    def queue_delete(self, queue):
        """删除队列"""
        self.channel.queue_delete(queue)
        print('delete queue:', queue)

    def basic_publish(self, queue, body):
        """生产数据"""
        self.channel.basic_publish(exchange='', routing_key=queue, body=body)


if __name__ == '__main__':
    Mq().basic_consume(QUEUE.queue0, func=lambda a, b, c, d: print(d))
