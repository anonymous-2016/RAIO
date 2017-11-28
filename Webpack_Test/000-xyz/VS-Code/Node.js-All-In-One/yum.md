
# yum

> YUM (Yellowdog Updater, Modified)

https://www.tecmint.com/20-linux-yum-yellowdog-updater-modified-commands-for-package-mangement/

https://en.wikipedia.org/wiki/Yellow_Dog_Updater,_Modified

> YUM (Yellowdog Updater Modified) is an open source command-line as well as graphical based package management tool for RPM (RedHat Package Manager) based Linux systems.


```sh

# yum -y install firefox

# yum remove firefox

# yum update mysql

# yum list openssh
$ yum list openssh-4.3p2

# yum search vsftpd

# yum info firefox

# yum list | less

# yum list installed | less

# yum provides /etc/httpd/conf/httpd.conf

# yum check-update

# yum update

# yum grouplist

# yum groupinstall 'MySQL Database'

# yum groupupdate 'DNS Name Server'

# yum groupremove 'DNS Name Server'

# yum repolist

# yum repolist all

# yum --enablerepo=epel install phpmyadmin

# yum shell

# yum clean all

# yum history


```


https://linux.die.net/man/8/yum

https://www.computerhope.com/unix/yum.htm

http://www.tutorialspoint.com/unix_commands/yum.htm



# Install Google Chrome on CentOS

https://www.if-not-true-then-false.com/2010/install-google-chrome-with-yum-on-fedora-red-hat-rhel/

https://groups.google.com/a/chromium.org/d/msg/chromium-dev/FoE6sL-p6oU/mVlwyh02AgAJ

https://sites.google.com/site/imemoryloss/redhat-as-es-centos/install-google-chrome-with-yum-on-fedora-15-14-centos-red-hat-rhel-6



```sh
# 1. Change to root user.

$ sudo -i
## OR ##
$ su -

# 2. Enable Google YUM repository

## Run following command (copy & paste all lines to console) to create /etc/yum.repos.d/google-chrome.repo file:
$ cat << EOF > /etc/yum.repos.d/google-chrome.repo
[google-chrome]
name=google-chrome - \$basearch
baseurl=http://dl.google.com/linux/chrome/rpm/stable/\$basearch
enabled=1
gpgcheck=1
gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub
EOF

# 3. Install Google Chrome with YUM

## Install Google Chrome Stable version

## CentOS/RHEL 7.4
$ yum install google-chrome-stable

## Install Google Chrome Beta version

## CentOS/RHEL 7.4 ##
$ yum install google-chrome-beta


## Install Google Chrome Unstable version

## CentOS/RHEL 7.4 ##
yum install google-chrome-unstable



```






















