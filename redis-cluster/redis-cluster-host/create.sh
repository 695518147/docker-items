if [ ! -d "$(dirname $0)./container" ];then
  sh $(dirname $0)/generate.sh \
  && docker-compose -f docker-compose.yml up --force-recreate -d \
  && sleep 2 \
  && sh $(dirname $0)/redis-cluster-init.sh
  else
  echo "container文件夹已经存在" \
  && docker-compose -f docker-compose.yml up --force-recreate -d
fi \
&& docker-compose -f docker-compose.yml ps