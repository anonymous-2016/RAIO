<VirtualHost *:8080>
# 本地服务器内网地址 
ServerName 10.1.64.138
ProxyPass /web http://10.75.123.1:8080/web
ProxyPassReverse /web http://10.75.123.1:8080/web
ProxyPass /CRM http://10.75.123.2:8089/CRM
ProxyPassReverse /CRM http://10.75.123.2:8089/CRM

#下面这几段可以加也可不加，看需求
#  CacheRoot "d:/apache_cache/"
#  CacheEnable disk /images/
#  CacheDirLevels 2
#  CacheDirLength 1
</VirtualHost> 



<VirtualHost *:80>
ServerAdmin admin@example2.com
ServerName example2.com
DocumentRoot “D:/a/b/c”

<Directory “D:/www/test”>
Options FollowSymLinks
AllowOverride None
Order allow,deny
Allow from all
<Directory>

ErrorLog “logs/2-error.log”
CustomLog “logs/2-access.log” common
<VirtualHost>



