

http://10.1.5.202/bonds/index.html?skin=white#2018-01-25

write & read hash

listener hash ???

# hashchange


listener javascript hash change

https://stackoverflow.com/questions/680785/on-window-location-hash-change

https://html.spec.whatwg.org/multipage/history.html#history-traversal



> session history & hashchange event

https://html.spec.whatwg.org/multipage/indices.html#event-hashchange



https://stackoverflow.com/questions/6390341/how-to-detect-url-change-in-javascript

https://stackoverflow.com/questions/680785/on-window-location-hash-change

https://github.com/mtrpcic/pathjs

```js

// store url on load
var currentPage = window.location.href;

// listen for changes
setInterval(function()
{
    if (currentPage != window.location.href)
    {
        // page has changed, set new page as 'current'
        currentPage = window.location.href;

        // do your thing...
    }
}, 500);

```

https://stackoverflow.com/questions/34999976/detect-changes-on-the-url

https://www.w3schools.com/js/js_htmldom_eventlistener.asp

https://www.w3schools.com/jsref/event_onhashchange.asp

# History API 

https://stackoverflow.com/questions/3870057/how-can-i-update-window-location-hash-without-jumping-the-document

http://lea.verou.me/2011/05/change-url-hash-without-page-jump/

https://www.w3.org/TR/html5/browsers.html#session-history-and-navigation

https://html.spec.whatwg.org/multipage/history.html#the-history-interface:event-hashchange



```js

if(history.pushState) {
    history.pushState(null, null, '#myhash');
}
else {
    location.hash = '#myhash';
}

```

https://css-tricks.com/hash-tag-links-padding/
http://nicolasgallagher.com/jump-links-and-viewport-positioning/




write global hash







http://lea.verou.me/2011/05/change-url-hash-without-page-jump/

```js


history.pushState(null, null, '#myhash');



if(history.pushState) {
    history.pushState(null, null, '#myhash');
}
else {
    location.hash = '#myhash';
}

```




# HTML5 History API

https://developer.mozilla.org/en-US/docs/Web/API/History_API

https://developer.mozilla.org/en-US/docs/Web/API/History

https://developer.mozilla.org/en-US/docs/Web/API/Window/history




```js

window.history.back();

window.history.forward();

window.history.go(-1);

window.history.go(1);

var numberOfEntries = window.history.length;

var stateObj = { foo: "bar" };

history.pushState(stateObj, "page 2", "bar.html");


```


https://www.w3.org/TR/html5/browsers.html#the-history-interface
https://html.spec.whatwg.org/multipage/history.html#the-history-interface



https://www.w3schools.com/jsref/obj_history.asp


https://github.com/browserstate/history.js

http://diveintohtml5.info/history.html

http://diveintohtml5.info/examples/history/fer.html


http://diveintohtml5.info/examples/history/gallery.js





# history api demo

> no refresh & url path change

https://html5demos.com/history/

https://html5demos.com/history/#view-source





