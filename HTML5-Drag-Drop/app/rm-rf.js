#! /usr/bin/env node

/**
 * [rmrf : node cli tools]
 * @author: xgqfrms
 * @date: 2017-01-01
 */

const path = require('path');
const rimraf = require('rimraf');

console.log(`hello world!`);
let folder_pathname = path.resolve(__dirname, "dist/js");

// https://github.com/isaacs/rimraf#api
// rimraf(f, [opts], callback);
rimraf.sync(folder_pathname, {}, function(){
    // callback
    console.log("this is a rmrf callback!");
});

// rimraf.sync(__dirname + '/target');

// fs.readFileSync(__dirname + '/src/template.ejs', 'utf-8')

// path: path.resolve(__dirname, "build/public/"),//主目录

// rimraf dist



/*

## npm i & npm link

```sh

# link `nct` to cli commands

$ npm i
$ npm link


```

## run

```sh
# parameters can be ignore

$ nct [user_name, [repo_name]]
$ nct user_name repo_name

```

*/

