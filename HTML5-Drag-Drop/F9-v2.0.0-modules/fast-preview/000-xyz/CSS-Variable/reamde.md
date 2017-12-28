# CSS-Variable


```js


var elem       = document.getElementById("alert"),
    theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("--color").trim(),
    msgElt     = document.getElementById("computed_style");

msgElt.innerHTML = "The alert div's color is \"<span style='color:" + theCSSprop + "'>" + theCSSprop +'</span>".';

function changeDocColor() {
    elem.style.setProperty('--color', 'var(--new-color)');
}

```

