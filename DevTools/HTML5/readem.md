# html

html-webpack-plugin react


https://github.com/jantimon/html-webpack-plugin

```sh

$ npm install html-webpack-plugin --save-dev


```


# HTML Webpack Template


https://github.com/jaketrent/html-webpack-template

https://www.npmjs.com/package/html-webpack-template


https://www.codecademy.com/articles/react-setup-iv



## cutomlize

> \public\index.html


```js
{
    entry: 'index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'assets/admin.html'
        })
    ]
}



{
    entry : 'index.js',
    output : {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(), // Generates default index.html
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'test.html',
            template: 'src/assets/test.html'
        })
    ]
}




<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
        <title><%= htmlWebpackPlugin.options.title %></title>
    </head>
    <body>
        <section></section>
    </body>
</html>

plugins: [
    new HtmlWebpackPlugin({
        title: 'Custom template',
        template: 'my-index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    })
]


module: {
    loaders: [
        { test: /\.hbs$/, loader: "handlebars" }
    ]
},
plugins: [
    new HtmlWebpackPlugin({
        title: 'Custom template using Handlebars',
        template: 'my-index.hbs'
    })
]



"htmlWebpackPlugin": {
    "files": {
        "css": [ "main.css" ],
        "js": [ "assets/head_bundle.js", "assets/main_bundle.js"],
        "chunks": {
            "head": {
                "entry": "assets/head_bundle.js",
                "css": [ "main.css" ]
            },
            "main": {
                "entry": "assets/main_bundle.js",
                "css": []
            }
        }
    }
}



```



<!--

async & delay & lasy loading

lasy import

-->




















