# browser-sync 


https://www.npmjs.com/package/browser-sync


https://www.browsersync.io/

```sh

$ npm i -g browser-sync


$ cd build & browser-sync start --server --files "index.html";



$ browser-sync start --server --files "./build/**/.html"



$ browser-sync start --server --files "css/*.css"

$ browser-sync start --proxy "myproject.dev" --files "css/*.css"
```


https://github.com/xgqfrms-GitHub/browser-sync



```sh

# step1
$ npm install -g browser-sync

# step2

$ cd build

# step3

$ browser-sync start --server --files "./*.html"

$ browser-sync start --server --files "./*.*"

$ browser-sync start --server --files "./*.js"

$ browser-sync start --server --files "./*.css"


```

https://gist.github.com/xgqfrms-GitHub/ddd33a01e69f89f6feacf88e6d24b9db

```sh

$ browser-sync start --server --files "public/*.*"

$ browser-sync start --server --files "./src/**/*.*"

$ browser-sync start --server --files "./public/**/*.*"

# http://localhost:3000/public/index.html

# 必须使用正确的路径
# 1. 在 project 根目录下，运行命令， 默认的 url 根路由，就是当前的路径
# browser-sync start --server --files "./dist/**/*.*" 
# 访问 http://localhost:3000/dist/index.html

# 2. 直接在 dist 目录下，运行命令， 默认的 url 根路由，就是当前的路径
# browser-sync start --server --files "./**/*.*" 
# 访问 http://localhost:3000/index.html


```




















https://browsersync.io/docs/gulp




# serve

https://www.npmjs.com/package/serve


The build folder is ready to be deployed.
You may serve it with a static server:

```sh

$ yarn global add serve

$ serve -s build


```


# json-server


https://github.com/typicode/json-server

























