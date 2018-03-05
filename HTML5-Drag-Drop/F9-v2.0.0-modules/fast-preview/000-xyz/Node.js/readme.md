# change css skin by params


express static web server, midleware , proxy


black skin & send `index.html` with `black css`;

white skin & send `index.html` with `white css`;


http://10.1.5.202:3000/index.html?skin=black


http://10.1.5.202:3000?skin=black


## route

```js

app.use(express.static('public'));

// Now, you can load the files that are in the public directory:

// http://localhost:3000/images/kitten.jpg
// http://localhost:3000/css/style.css
// http://localhost:3000/js/app.js
// http://localhost:3000/images/bg.png
// http://localhost:3000/hello.html

let cache = [];
cache[0] = fs.readFileSync( __dirname + '/index.html');

cache[1] = fs.readFileSync( __dirname + '/white-index.html');
cache[1] = fs.readFileSync( __dirname + '/black-index.html');

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(cache[0]);
});

app.get('/index.html', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    // node url & express url
    // req.params.name ???
    if(res.url.query){
        res.send(cache[1]);
    }else{
        res.send(cache[2]);
    }
});

https://expressjs.com/zh-cn/api.html#req

https://nodejs.org/api/http.html#http_message_url

```

## Express Route

res.json() === JSON
res.send() === String
res.render() === HTML

## reverse-proxy

http://expressjs.com/en/starter/static-files.html

http://expressjs.com/en/4x/api.html#express.static

http://expressjs.com/en/advanced/best-practice-performance.html#use-a-reverse-proxy


## virtual path & absolute path

http://expressjs.com/en/resources/middleware/serve-static.html

```js

app.use('/static', express.static('public'));

// Now, you can load the files that are in the public directory from the /static path prefix.

// http://localhost:3000/static/images/kitten.jpg
// http://localhost:3000/static/css/style.css
// http://localhost:3000/static/js/app.js
// http://localhost:3000/static/images/bg.png
// http://localhost:3000/static/hello.html



app.use('/static', express.static(path.join(__dirname, 'public')));

```

## Response


http://expressjs.com/en/4x/api.html#res


https://nodejs.org/api/http.html#http_class_http_serverresponse

https://nodejs.org/api/http.html#http_message_url


### search & hash & query

```js


require('url').parse('https://nodejs.org/api/http.html?name=ryan&age=23');

// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'nodejs.org',
//     port: null,
//     hostname: 'nodejs.org',
//     hash: null,
//     search: '?name=ryan&age=23',
//     query: 'name=ryan&age=23',
//     pathname: '/api/http.html',
//     path: '/api/http.html?name=ryan&age=23',
//     href: 'https://nodejs.org/api/http.html?name=ryan&age=23'
// }


```

## urlQueryParse



```js



// urlQueryParser

/**
 * @author xgqfrms
 * @description URL Query Parser
 * @param {String} url
 * @param {Boolean} debug
 */
const urlQueryParser = (url = ``, debug = false) => {
    // const queryString = url.query;
    // const queryString = url;
    const result = {};
    const queryString = url.substr(url.indexOf(`?`) + 1);
    if (debug) {
        console.log(`url =`, url);
        console.log(`queryString =`, queryString);
    }
    let arr = queryString.split(`&`),
        keys = [],
        values = [];
    arr.map(
        (item, i) => {
            let temp_obj = {};
            let key_index = item.indexOf(`=`),
                // item_length = item.length,
                // value = item.substr(item_length - key_index),
                key = item.substr(0, key_index),
                value = item.substr(key_index + 1);
            keys.push(key);
            values.push(values);
            temp_obj[key] = value;
            Object.assign(result, temp_obj);
        }
    );
    if (debug) {
        console.log(`keys =`, keys);
        console.log(`values =`, values);
        console.log(`result =`, JSON.stringify(result, null, 4));
    }
    return result;
};

const url = `http://10.1.5.202:3000/index.html?skin=black&gilcode=600570&uid=666`;

// window.parent.location;

// window.parent.location.href;
// "http://10.1.5.202:3000/index.html?skin=black&gilcode=600570&uid=666"

// window.parent.location.search;
// "?skin=black&gilcode=600570&uid=666"

urlQueryParser(url);


// urlQueryParser(`http://10.1.5.202:3000/index.html?skin=black&gilcode=600570&uid=666`);







// node
require('url').parse('https://nodejs.org/api/http.html?name=ryan&age=23');

// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'nodejs.org',
//     port: null,
//     hostname: 'nodejs.org',
//     hash: null,
//     search: '?name=ryan&age=23',
//     query: 'name=ryan&age=23',
//     pathname: '/api/http.html',
//     path: '/api/http.html?name=ryan&age=23',
//     href: 'https://nodejs.org/api/http.html?name=ryan&age=23'
// }



```

