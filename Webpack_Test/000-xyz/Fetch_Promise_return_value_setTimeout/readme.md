# Fetch / XHR2 / XHR3 is better for now! ???


```js

    fetch(open_link)
    .then(res => res.json())
    .then(
        (json) => {
            if (!debug) {
                console.log(`json = \n`, JSON.stringify(json, null, 4));
            }
            return json;
        }
    )
    .catch(err => console.log(`error infos = \n`, err));

```






> Fetch / XHR2


## Fetch

```js

fetch("http://jsperf.com").then(function(response) {
    alert(1);
});

```


https://jsperf.com/xhr-vs-jquery-ajax-vs-get-vs-fetch

https://xhr.spec.whatwg.org/#example-xhr


## XHR3


```js

var xhr = new XMLHttpRequest();
xhr.addEventListener( "loadend", function() {
    alert(1);
});
xhr.open("GET", "http://jsperf.com", true);
xhr.send();

```

## XHR2

```js

var xhr = new XMLHttpRequest();
xhr.onload = function() {
    alert(1);
};
xhr.open("get", "http://jsperf.com", true);
xhr.send();

```

## XHR1

```js

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        // "done"
        alert(1);
    }
}
xhr.open("GET", "http://jsperf.com", true);
xhr.send();

```

## jQuery ajax

```js

var request = $.ajax({
    type: 'GET',
    url: "http://jsperf.com",
    async: true,
    success: function() {
        alert(1);
    }
});

```

## jQuery get

```js

var request = $.get("http://jsperf.com").done(function() {
    alert(1);
});

```




# xhr response json

https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType

> markdown table

```md

# The values supported by `responseType` are the following:

Value   type

""  DOMString (this is the default value)
"arraybuffer"  ArrayBuffer
"document"    Document
"text"    DOMString
"blob"    Blob
"json"    JSON

```


https://stackoverflow.com/questions/1973140/parsing-json-from-xmlhttprequest-responsejson


```js

let json = JSON.parse(xhr.responseText);

```



https://stackoverflow.com/users/8629798/xgqfrms-gildata

https://stackoverflow.com/users/5934465/xgqfrms










