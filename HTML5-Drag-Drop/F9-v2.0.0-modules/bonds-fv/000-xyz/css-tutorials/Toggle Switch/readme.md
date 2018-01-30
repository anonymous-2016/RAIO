# css3 toggle switch

> no data

```js

let uid = `[data-none-uid="otc-city-investment-debt-aaa-profitability"]`;

const none_div = document.querySelector(`[data-none-uid="otc-city-investment-debt-aaa-profitability"]`);
// data-none="no-data-div-visible"
none_div.dataset.none = "no-data-div-visible";
// show
none_div.dataset.none = "no-data-div-hidden";
// hide

none_div.setAttribute(`data-none`, `no-data-div-visible`);
none_div.setAttribute(`data-none`, `no-data-div-hidden`);



// must be class ??? classList
none_div.classList.toggle(`.no-data-div-visible`);
none_div.classList.toggle(`.no-data-div-hidden`);

```

> switch button

https://www.w3schools.com/howto/howto_css_switch.asp
https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Add-on_SDK/Low-Level_APIs/ui_button_toggle

https://css-tricks.com/snippets/javascript/showhide-element/
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList


```js

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block'){
        e.style.display = 'none';
    }else{
        e.style.display = 'block';
    }
}

```

```html

<a href="#" onclick="toggle_visibility('foo');">Click here to toggle visibility of element #foo</a>
<div id="foo">This is foo</div>

```


https://developer.mozilla.org/en-US/docs/Web/CSS/:checked

```css
/* 

// Matches any checked/selected radio, checkbox, or option

*/ 

:checked {
    margin-left: 25px;
    border: 1px solid blue;
}

```

https://developer.mozilla.org/en-US/docs/Web/CSS/:fullscreen

https://mdn.mozillademos.org/en-US/docs/Web/CSS/:fullscreen$samples/Example?revision=1342881



```css

/*

// Selects any <div> that is being displayed in fullscreen mode
// Implemented in Firefox, WebKit/Chrome, and Edge/IE using prefixes; 
// Edge also supports the non-prefixed version

*/

div:-moz-full-screen {
    background-color: pink;
}

div:-webkit-full-screen {
    background-color: pink;
}

div:fullscreen {
    background-color: pink;
}

```

