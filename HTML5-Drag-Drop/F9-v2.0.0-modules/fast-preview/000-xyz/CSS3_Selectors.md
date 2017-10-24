# CSS3 Selectors


https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors



## attribute selector

https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors

> attribute name must be full name, only attribute's values will match this Regex(|,^,$, ~)!


```css

/* <a> elements with a title attribute */
a[title] {
    color: purple;
}

/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"] {
    color: green;
}

/* <a> elements with an href containing "example" */
a[href*="example"] {
    font-size: 2em;
}

/* <a> elements with an href ending ".org" */
a[href$=".org"] {
    font-style: italic;
}




a {
    color: blue;
}

/* Internal links, beginning with "#" */
a[href^="#"] {
    background-color: gold;
}

/* Links with "example" anywhere in the URL */
a[href*="example"] {
    background-color: silver;
}

/* Links with "insensitive" anywhere in the URL, regardless of capitalization */
a[href*="insensitive" i] {
    color: cyan;
}

/* Links that end in ".org" */
a[href$=".org"] {
    color: red;
}






/* All divs with a `lang` attribute are bold. */
div[lang] {
  font-weight: bold;
}

/* All divs in US English are blue. */
div[lang~="en-us"] {
    color: blue;
}

/* All divs in Portuguese are green. */
div[lang="pt"] {
    color: green;
}

/* All divs in Chinese are red, whether simplified (zh-CN) or traditional (zh-TW). */
div[lang|="zh"] {
    color: red;
}

/* All divs with a Traditional Chinese `data-lang` are purple. */
/* Note: You could also use hyphenated (连字符) attributes without double quotes */ 
div[data-lang="zh-TW"] {
    color: purple;
}

/* 
    // OK 双引号
    div[data-lang="zh-TW"] {
        color: purple;
    }
    // OK 连字符
    div[data-lang=zh-TW] {
        color: purple;
    }
    // Bad 下划线
    div[data-lang=zh_TW] {
        color: purple;
    }
*/


```


```html

<div lang="en-us en-gb en-au en-nz">Hello World!</div>
<div lang="pt">Olá Mundo!</div>
<div lang="zh-CN">世界您好！</div>
<div lang="zh-TW">世界您好！</div>
<div data-lang="zh-TW">世界您好！</div>


```



## HTML5 Atrribute ???

> CSS attribute


```js

css3 = document.querySelectorAll(`p`);

// h5-dnd-template-p
// h5-dnd-module-p
// h5-dnd-icon-p
// css3-attr-selector-test

h5 = document.querySelectorAll(`p[class*="h5"]`);

h5 = document.querySelectorAll(`p[class*="h5-dnd"]`);

h5 = document.querySelectorAll(`p[class*="h5-dnd-icon-p"]`);

h5 = document.querySelectorAll(`p[class*="icon"]`);


```
































