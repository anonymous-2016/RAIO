# React & Markdown

https://yuque.com/yuque/developer/repo


## @media print



## npm & markdown

https://github.com/cwjohan/markdown-to-html


```sh

npm -g markdown-to-html

npm i -S markdown-to-html


```

markdown myfile.md [<options>]

markdownb myfile.md [<options>]

github-markdown myfile.md [<options>]

github-markdownb myfile.md [<options>]

### options

```md

--flavor / -f <type>

--highlight / -h

--stylesheet / -s <stylesheet>

--title / -t <title>

--context / -c <context>

--template <filename or path>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <!--You can set this template instead of --title and --stylesheet.-->
        <title>My own title</title>
        <link rel="stylesheet" href="./mycss.css">
    </head>
    <body>
        <h3>My own header</h3>
        <!--{markdown} to indicate where the markdown code will be placed-->
        {markdown}
        <h3>My own footer</h3>
    </body>
</html>


--verbose / -v

--debug / -d

--help


```


markdown readme.md -f markdown -h
markdown readme.md -f github-markdown -h


https://github.com/cwjohan/markdown-to-html/blob/master/package.json

```json

    "scripts": {
        "test": "bash script/test",
        "clean": "bash script/clean",
        "start": "bash script/web-demo"
    },

```

https://github.com/cwjohan/markdown-to-html/tree/master/web-demo

```json

    "scripts": {
        "start": "node web.js"
    },

```

https://github.com/cwjohan/markdown-to-html/blob/master/web-demo/web.js



## VS code & markdown

https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/html
