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







# ESlint

> ESlint inline

```js

/* eslint-disable no-underscore-dangle */

console.log(`enable all`);

/* eslint-enable */


/* eslint-disable no-console */

console.log(`only enable no-console`);

/* eslint-enable no-console*/




/* eslint-disable no-console */
/* eslint-disable react/prop-types */


console.log(`enable all`);

/* eslint-enable */

```

# .eslintrc

```js

{
    "parser": "babel-eslint",
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
        "comma-dangle": 0,
        "react/jsx-uses-vars": 1,
        "react/display-name": 1,
        "react/prop-types": 1,
        "no-unused-vars": "warn",
        "no-console": 1,
        "no-unexpected-multiline": "warn"
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "15.6.1"
        }
    }
}

```


## Disabling Rules with Inline Comments

http://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments


```js

/* eslint-disable no-alert, no-console */



/* eslint-disable */

alert('foo');

/* eslint-enable */





/* eslint-disable no-alert, no-console */

alert('foo');
console.log('bar');

/* eslint-enable no-alert, no-console */




/* eslint-disable */

alert('foo');


/* eslint-disable no-alert */

alert('foo');




alert('foo'); // eslint-disable-line

// eslint-disable-next-line
alert('foo');




alert('foo'); // eslint-disable-line no-alert

// eslint-disable-next-line no-alert
alert('foo');




alert('foo'); // eslint-disable-line no-alert, quotes, semi

// eslint-disable-next-line no-alert, quotes, semi
alert('foo');





foo(); // eslint-disable-line example/rule-name




/* eslint-disable no-console */



/* eslint-enable no-console */


```










