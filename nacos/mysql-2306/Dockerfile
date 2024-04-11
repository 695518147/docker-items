FROM mysql:8.3
# 只有容器第一次启动才会执行
# COPY ./mysql-2306/init2.0.3/init_nacos2.0.3.sql /docker-entrypoint-initdb.d/nacos-mysql.sql
COPY ./mysql-2306/init2.3.1/init_nacos2.3.1.sql /docker-entrypoint-initdb.d/nacos-mysql.sql
RUN chown -R mysql:mysql /docker-entrypoint-initdb.d/nacos-mysql.sql
EXPOSE 3306
CMD ["mysqld", "--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci"]