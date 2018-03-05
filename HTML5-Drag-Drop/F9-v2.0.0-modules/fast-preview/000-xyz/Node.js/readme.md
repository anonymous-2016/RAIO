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
    if(res.url){
        res.send(cache[1]);
    }else{
        res.send(cache[2]);
    }
});

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

const urlQueryParse = (url = ``, debug = false) => {
    // const queryString = url.query;
    const queryString = url;
    let result = {};
    let arr = 'name=ryan&age=23'.split(`&`);
    // ["name=ryan", "age=23"]
    let keys = arr.map()
};


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







