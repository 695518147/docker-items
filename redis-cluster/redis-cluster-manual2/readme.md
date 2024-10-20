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