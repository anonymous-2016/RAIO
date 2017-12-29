# CSS-Variable


```js


let elem = document.getElementById("alert"),
    theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("--color").trim(),
    msgElt = document.getElementById("computed_style");

msgElt.innerHTML = "The alert div's color is \"<span style='color:" + theCSSprop + "'>" + theCSSprop +'</span>".';

function changeDocColor() {
    elem.style.setProperty('--color', 'var(--new-color)');
}

```


切换的时候，你要给我传递两个参数 gilcode 和 skin.


http://10.1.5.202/stock/f9/fastview/sidebar.html?gilcode=600570.SH&skin=black



# ctrl + alt + p



222.73.146.143/fund/factsheet/sulan.html?gilcode=000011.OF&skin=black

222.73.146.143/fund/factsheet/sulan.html?gilcode=000011.OF&skin=white



STOCK_SKIN




