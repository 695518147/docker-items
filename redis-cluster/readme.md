1. 自建bridge网络，手动分配IP安装
```
redis-cluster-manual
```

2. HOST模式，单独IP，不同端口安装
```
redis-cluster-host
```

3. redis 集群配置 关键配置项
```
cluster-enabled：是否开启集群模式，默认 no；
cluster-config-file：集群节点信息文件；
cluster-node-timeout：集群节点连接超时时间；
cluster-announce-ip：集群节点 IP，可填写宿主机的 IP；
cluster-announce-port：集群节点映射端口；
cluster-announce-bus-port：集群节点总线端口。
```

4. 创建集群必须用cluster-announce-ip定义的 ip
```
cluster-announce-port：集群节点映射端口；
cluster-announce-bus-port：集群节点总线端口。
集群节点总线端口必须比集群节点映射端口大 10000
```

5. 常用命令
```
redis-cli -h redis-5379 -c 集群方式进入 redis

cluster info 查看集群信
cluster nodes 查看集群节点信息

```

6.