# Fetch / XHR2 / XHR3 is better for now! ???

Fetch / XHR2


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




