# OK

1. using `let`, instead of `const`
2. outer `promise` & `return` value


![image](https://user-images.githubusercontent.com/18028768/32893133-6484bc1a-cb13-11e7-9dc6-4606850d104c.png)


```js
FetchNewsSummary = (url = `http://10.1.5.202/queryservice/news/content/564082789530`, debug = true) => {
    if (debug) {
        console.log(`News Summary url = \n`, url);
    }
    let datas = {};
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            if (debug) {
                console.log(`News Summary json = \n`, JSON.stringify(json, null, 4));
                datas = Object.assign(datas, json);
                console.log(`News Summary datas = \n`, JSON.stringify(datas, null, 4));
                // return datas;
            }
        }
    )
    .catch(err => console.log(`News Summary Error Infos: \n`, err));
    return datas;
};

let x = FetchNewsSummary();
x;
// OK


```

3.  re-assign value  (Options)
> `datas = Object.assign(datas, json);`

```js

FetchNewsSummary = (url = `http://10.1.5.202/queryservice/news/content/564082789530`, debug = true) => {
    if (debug) {
        console.log(`News Summary url = \n`, url);
    }
    let datas = {};
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            if (debug) {
                console.log(`News Summary json = \n`, JSON.stringify(json, null, 4));
                Object.assign(datas, json);
                //  still OK!
                console.log(`News Summary datas = \n`, JSON.stringify(datas, null, 4));
                // return datas;
            }
        }
    )
    .catch(err => console.log(`News Summary Error Infos: \n`, err));
    return datas;
};

```

