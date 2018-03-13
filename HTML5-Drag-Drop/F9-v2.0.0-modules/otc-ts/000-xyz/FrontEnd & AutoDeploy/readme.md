# FrontEnd & AutoDeploy


前端自动化部署方案-实践（配合shell）





https://github.com/facebook/react/pull/10783

前端自动化发布部署

https://github.com/Bacra/node-d2server
http://www.cnblogs.com/AlexBlogs/p/7688252.html
https://github.com/zzetao/mandy



首先你得把部署机（可能是你本地机器）的ssh公钥（~/.ssh/id_rsa.pub）配置到对应服务器（~/.ssh/authorized_keys）


例1：发布到测试服 $1 $2

./deploy.sh build dev

例2：发布到正式服 $1 $2

./deploy.sh build prod

package.json配置

```json

"scripts": {
    "dev": "node build/dev-server.js development-server",
    "dev-prod": "node build/dev-server.js production-server",
    "build": "node build/build.js  development-server",
    "build-prod": "node build/build.js production-server"
},

```

