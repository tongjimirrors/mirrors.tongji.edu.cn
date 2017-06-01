---
layout: help
type: help
sidebar_name: CentOS
title: CentOS 镜像使用帮助
---
## 收录版本
 * 3
 * 4
 * 5
 * 6
 * 7
 
## 使用说明
备份CentOS-Base.repo
```
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```

下载对应版本的CentOS-Base.repo, 放入/etc/yum.repos.d/, 以CentOS 5为例
```
# CentOS-Base.repo
#
# The mirror system uses the connecting IP address of the client and the
# update status of each mirror to pick mirrors that are updated to and
# geographically close to the client.  You should use this for CentOS updates
# unless you are manually picking other mirrors.
#
# If the mirrorlist= does not work for you, as a fall back you can try the 
# remarked out baseurl= line instead.
#
#
 
[base]
name=CentOS-$releasever - Base - mirrors.tongji.edu.cn
baseurl=http://mirrors.tongji.edu.cn/centos/$releasever/os/$basearch/
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os
gpgcheck=1
gpgkey=http://mirrors.tongji.edu.cn/centos/RPM-GPG-KEY-CentOS-5
 
#released updates 
[updates]
name=CentOS-$releasever - Updates - mirrors.tongji.edu.cn
baseurl=http://mirrors.tongji.edu.cn/centos/$releasever/updates/$basearch/
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates
gpgcheck=1
gpgkey=http://mirrors.tongji.edu.cn/centos/RPM-GPG-KEY-CentOS-5
 
#additional packages that may be useful
[extras]
name=CentOS-$releasever - Extras - mirrors.tongji.edu.cn
baseurl=http://mirrors.tongji.edu.cn/centos/$releasever/extras/$basearch/
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras
gpgcheck=1
gpgkey=http://mirrors.tongji.edu.cn/centos/RPM-GPG-KEY-CentOS-5
 
#packages used/produced in the build but not released
[addons]
name=CentOS-$releasever - Addons - mirrors.tongji.edu.cn
baseurl=http://mirrors.tongji.edu.cn/centos/$releasever/addons/$basearch/
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=addons
gpgcheck=1
gpgkey=http://mirror.centos.org/centos/RPM-GPG-KEY-CentOS-5
 
#additional packages that extend functionality of existing packages
[centosplus]
name=CentOS-$releasever - Plus - mirrors.tongji.edu.cn
baseurl=http://mirrors.tongji.edu.cn/centos/$releasever/centosplus/$basearch/
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus
gpgcheck=1
enabled=0
gpgkey=http://mirrors.tongji.edu.cn/centos/RPM-GPG-KEY-CentOS-5
 
#contrib - packages by Centos Users
[contrib]
name=CentOS-$releasever - Contrib - mirrors.tongji.edu.cn
baseurl=http://mirrors.tongji.edu.cn/centos/$releasever/contrib/$basearch/
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=contrib
gpgcheck=1
enabled=0
gpgkey=http://mirrors.tongji.edu.cn/centos/RPM-GPG-KEY-CentOS-5
```