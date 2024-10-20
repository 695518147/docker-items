0. 切换路径到 redis-single

cd ...

1. 构建镜像  -t (--tag )

docker build -t redis-single-7379 .

2. 构建容器

docker run -it --name redis-7379 -p 7379:7379 -d redis-single-7379

3. 验证

docker exec -it myredis /bin/bash

4. 进入 redis

redis-cli