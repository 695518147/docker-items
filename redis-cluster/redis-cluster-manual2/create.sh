if [ ! -d "./container" ];then
  sh ./generate.sh \
  && docker-compose -f docker-compose.yml up --force-recreate -d \
  && sleep 2 \
  && sh ./redis-cluster-init.sh
  else
  echo "container文件夹已经存在" \
  && docker-compose -f docker-compose.yml up --force-recreate -d
fi \
&& docker-compose -f docker-compose.yml ps