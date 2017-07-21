# ESlint

http://eslint.org/docs/developer-guide/working-with-custom-formatters#the-message-object


```js


[
    {
        "filePath": "path/to/file.js",
        "messages": [
            {
                "ruleId": "curly",
                "severity": 2,
                "message": "Expected { after 'if' condition.",
                "line": 2,
                "column": 1,
                "nodeType": "IfStatement",
                "source": "if (err) console.log('failed tests: ' + err);"
            },
            {
                "ruleId": "no-process-exit",
                "severity": 2,
                "message": "Don't use process.exit(); throw an error instead.",
                "line": 3,
                "column": 1,
                "nodeType": "CallExpression",
                "source": "process.exit(1);"
            }
        ],
        "errorCount": 2,
        "warningCount": 0,
        "source": "var err = doStuff();\nif (err) console.log('failed tests: ' + err);\nprocess.exit(1);\n"
    },
    {
        "filePath": "Gruntfile.js",
        "messages": [],
        "errorCount": 0,
        "warningCount": 0
    }
]



```





```js

{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react"
    ],
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "rules": {
        "comma-dangle": 0
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "15.4.2"
        }
    }
}

```










