### 1. gvenzl/oracle-free:latest
```
    SID:FREEPDB1
    username:SYSTEM
    password:mm006489

    CREATE USER epmis IDENTIFIED BY mm006489;
    GRANT CONNECT, RESOURCE TO epmis;
```
- 执行上面的sql语句后用户包括的权限:
  - CONNECT角色： –是授予最终用户的典型权利，最基本的
  ALTER SESSION –修改会话
  CREATE CLUSTER –建立聚簇
  CREATE DATABASE LINK –建立数据库链接
  CREATE SEQUENCE –建立序列
  CREATE SESSION –建立会话
  CREATE SYNONYM –建立同义词
  CREATE VIEW –建立视图
  - RESOURCE角色： –是授予开发人员的
  CREATE CLUSTER –建立聚簇
  CREATE PROCEDURE –建立过程
  CREATE SEQUENCE –建立序列
  CREATE TABLE –建表
  CREATE TRIGGER –建立触发器
  CREATE TYPE –建立类型


### 2. wnameless/oracle-xe-11g-r2
```
    hostname: localhost
    port: 49161
    sid: xe
    username: system
    password: oracle


    http://localhost:8080/apex/apex_admin :
    用户名（大写）: ADMIN
    密码（小写）: Mm518147$
```
