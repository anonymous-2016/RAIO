# open


https://developer.mozilla.org/en-US/docs/Web/API/Window

https://developer.mozilla.org/en-US/docs/Web/API/Window/open



```js

var window = window.open(url, windowName, [windowFeatures]);


```


http://www.gtalbot.org/FirefoxSection/Popup/PopupAndFirefox.html


http://www.infimum.dk/HTML/JSwindows.html

http://www.infimum.dk/HTML/JSwindows.html#ref_3_3


http://accessify.com/features/tutorials/the-perfect-popup/


https://stackoverflow.com/questions/12939928/make-a-link-open-a-new-window-not-tab


target="_new"

href="about:blank"

http://jsfiddle.net/tobek/GPg6t/1/


# window.onload & DOMContentLoaded


https://stackoverflow.com/questions/588040/window-onload-vs-document-onload

https://en.wikipedia.org/wiki/DOM_events

https://www.w3.org/TR/html5/syntax.html#the-end


https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onload
https://developer.mozilla.org/zh-CN/docs/Web/Events/DOMContentLoaded



1. The browser parses the HTML source and runs deferred scripts.

2. A DOMContentLoaded is dispatched at the document when all the HTML has been parsed and have run.
The event bubbles to the window.

3. The browser loads resources (like images) that delay the load event.

4. A load event is dispatched at the window.


> Therefore, the order of execution will be

1. DOMContentLoaded event listeners of window in the capture phase

2. DOMContentLoaded event listeners of document

3. DOMContentLoaded event listeners of window in the bubble phase

4. load event listeners (including onload event handler) of window




```js

window.addEventListener('DOMContentLoaded', function() {
    console.log('window - DOMContentLoaded - capture');
    // 1st
}, true);
document.addEventListener('DOMContentLoaded', function() {
    console.log('document - DOMContentLoaded - capture');
    // 2nd
}, true);
document.addEventListener('DOMContentLoaded', function() {
    console.log('document - DOMContentLoaded - bubble');
    // 2nd
});
window.addEventListener('DOMContentLoaded', function() {
    console.log('window - DOMContentLoaded - bubble');
    // 3rd
});

```




https://github.com/dperini/ContentLoaded/blob/master/src/contentloaded.js

http://javascript.nwbox.com/ContentLoaded/


https://github.com/swisnl/jQuery-contextMenu

https://swisnl.github.io/jQuery-contextMenu/demo.html



# unload

https://developer.mozilla.org/en-US/docs/Web/Events/unload

https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload

https://developer.mozilla.org/en-US/docs/Web/Events/pagehide



```js

window.addEventListener("beforeunload", function (event) {
    event.returnValue = "\o/";
    // Chrome
});

// is equivalent to
window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
});


window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "\o/";
    e.returnValue = confirmationMessage;
    // Gecko, Trident, Chrome 34+
    return confirmationMessage;
    // Gecko, WebKit, Chrome <34
});
```





## session & uid

> sessionStorage

> localStorage


sessionStorage & exchange data


shared data



https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Position_and_size_features

https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features



## Popup === title


```html


<a
    href="./new-window.html"
    name="windowName"
    onclick="window.open(this.href, 'Popup', 'location,status,scrollbars,resizable,width=800, height=800');return false;">
    Popup
</a>


```


https://stackoverflow.com/questions/1834559/target-blank-to-show-in-new-window-not-new-tab-possible




# `window.open("")`  && `document.write()`

1.  must be `""` for open href url!

<del>2.  must be `write` for html content!</del>

https://www.w3schools.com/jsref/met_win_open.asp

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open3

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_close


```js

function myFunction() {
    var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
}


var myWindow;

function openWin() {
    myWindow = window.open("", "myWindow", "width=200,height=100");
    myWindow.document.write("<p>This is 'myWindow'</p>");
}

function closeWin() {
    myWindow.close();
}

```




https://developer.mozilla.org/en-US/docs/Web/API/Window/open
https://bugzilla.mozilla.org/show_bug.cgi?id=176320

## window.open("")

```js

    // window.open(e.target.href, e.target.name,'width=800,height=600');
    new_window = window.open("", e.target.name,'width=800,height=600');
    // new_window = window.open(e.target.href, e.target.name,'width=800,height=600');
```


## data-* & sessionStorage


https://developer.mozilla.org/en-US/docs/Web/API/Window/opener



```js

const closeWindow = () => {
    // onclose
    new_window.close();
    // clear session uid
    sessionStorage.removeItem('key');
    // sessionStorage.clear();

};

```

https://developer.mozilla.org/en-US/docs/Web/API/Window/open

var window = window.open(url, windowName, [windowFeatures]);


https://developer.mozilla.org/en-US/docs/Web/API/Document/write

document.write(markup);

```js
    function newContent() {
        // alert("load new content");
        document.open();
        document.write("<h1>Out with the old - in with the new!</h1>");
        document.close();
    }
```



https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe




https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose


window.onclose = funcRef;

https://developer.mozilla.org/en-US/docs/Web/API/Document/open

document.open();




https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/downloads/open

var opening = browser.downloads.open(
    downloadId// integer
)



new_window.document.body.innerText = `<h1>${uid_key}</h1>`;


https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus

https://developer.mozilla.org/en-US/docs/Web/Events/close




https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval




https://developer.mozilla.org/en-US/docs/Web/API/Window
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
https://developer.mozilla.org/en-US/docs/Web/API/Window/setCursor

https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout




https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval


```js

var intervalID = scope.setInterval(func, delay[, param1, param2, ...]);
var intervalID = scope.setInterval(code, delay);

```



https://developer.chrome.com/extensions/webNavigation

https://bugs.chromium.org/p/chromium/issues/detail?id=754976

https://developer.chrome.com/extensions/tabs


```js

window.document.head.children[3].innerHTML = `xxxx`;

```



# modal & no mask

> ??? only in the window , can't move out the window ???




