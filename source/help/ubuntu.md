---
layout: help
type: help
sidebar_name: Ubuntu
title: Ubuntu 镜像使用帮助
---

## 收录版本
* precise
* trusty
* vivid
* wily
* xenial
* yakkety
* zesty

## 使用方法

修改配置文件`/etc/apt/sources.list`,将系统自带的该文件做个备份，将该文件替换为下面内容

示例：

### precise:
```
deb https://mirrors.tongji.edu.cn/ubuntu/ precise main restricted universe multiverse
deb-src https://mirrors.tongji.edu.cn/ubuntu/ precise main restricted universe multiverse

deb https://mirrors.tongji.edu.cn/ubuntu/ precise-security main restricted universe multiverse
deb-src https://mirrors.tongji.edu.cn/ubuntu/ precise-security main restricted universe multiverse

deb https://mirrors.tongji.edu.cn/ubuntu/ precise-updates main restricted universe multiverse
deb-src https://mirrors.tongji.edu.cn/ubuntu/ precise-updates main restricted universe multiverse

deb https://mirrors.tongji.edu.cn/ubuntu/ precise-backports main restricted universe multiverse
deb-src https://mirrors.tongji.edu.cn/ubuntu/ precise-backports main restricted universe multiverse

## Not recommended
# deb https://mirrors.tongji.edu.cn/ubuntu/ precise-proposed main restricted universe multiverse
# deb-src https://mirrors.tongji.edu.cn/ubuntu/ precise-proposed main restricted universe multiverse
```

### trusty:
```
deb https://mirrors.tongji.edu.cn/ubuntu/ trusty main restricted universe multiverse
deb-src https://mirrors.tongji.edu.cn/ubuntu/ trusty main restricted universe multiverse

deb https://mirrors.tongji.edu.cn/ubuntu/ trusty-security main restricted universe multiverse
deb-src https://mirrors.tongji.edu.cn/ubuntu/ trusty-security main restricted universe multiverse

deb https://mirrors.tongji.edu.cn/ubuntu/ trusty-updates main restricted universe multiverse
deb-src https://mirrors.tongji.edu.cn/ubuntu/ trusty-updates main restricted universe multiverse

deb https://mirrors.tongji.edu.cn/ubuntu/ trusty-backports main restricted universe multiverse
deb-src https://mirrors.tongji.edu.cn/ubuntu/ trusty-backports main restricted universe multiverse

## Not recommended
# deb https://mirrors.tongji.edu.cn/ubuntu/ trusty-proposed main restricted universe multiverse
# deb-src https://mirrors.tongji.edu.cn/ubuntu/ trusty-proposed main restricted universe multiverse
```


