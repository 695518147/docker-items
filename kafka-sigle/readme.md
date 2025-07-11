    # 广播主机名称，一般用IP指定
    KAFKA_ADVERTISED_HOST_NAME：
    # Zookeeper连接地址，格式：zoo1：port1,zoo2:port2:/path
    KAFKA_ZOOKEEPER_CONNECT：
    # Kafka启动所使用的的协议及端口
    KAFKA_LISTENERS：
    # Kafka广播地址及端口，告诉客户端，使用什么地址和端口能连接到Kafka，不指定，宿主机以外的客户端将无法连接到Kafka
    KAFKA_ADVERTISED_LISTENERS：
    # 指定BrokerId，如果不指定，将会自己生成
    KAFKA_BROKER_ID：
    # topic的分区数
    KAFKA_NUM_PARTITIONS: 3
    # broker端的leader分区在想其他follower分区复制消息时候 ，允许的单条消息的最大值
    KAFKA_REPLICA_FETCH_MAX_BYTES: 10000000
    # broker的topic分区leader接受数据的时候，允许的单条消息的最大值，默认为1M
    KAFKA_MESSAGE_MAX_BYTES: 10000000
    # 日志文件保存120个小时
    KAFKA_LOG_RETENTION_HOURS: 120
