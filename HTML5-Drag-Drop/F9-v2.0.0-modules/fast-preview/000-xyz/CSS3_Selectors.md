# CSS3 Selectors


https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors


https://developer.mozilla.org/zh-CN/docs/Learn/CSS
https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS
https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors


https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout


## CSS Selectors

https://www.w3.org/TR/selectors/


Selectors Level 3
W3C Recommendation 29 September 2011

https://www.w3.org/TR/css3-selectors/


Selectors Level 4
W3C Working Draft 2 May 2013

https://www.w3.org/TR/selectors4/


https://www.w3.org/TR/2009/PR-css3-selectors-20091215/
https://www.w3.org/TR/2011/WD-selectors4-20110929/

http://www.w3.org/TR/CSS2/selector.html
http://www.w3.org/TR/CSS1/


https://www.w3schools.com/cssref/css_selectors.asp


```md

Basic Selectors
    Type selectors
    Class selectors
    ID selectors
    Universal selectors
    Attribute selectors

Combinators
    Adjacent sibling combinator
    General sibling combinator
    Child combinator
    Descendant combinator

> 🐛 This is an experimental API that should not be used in production code.

Pseudo-classes
    :active
🐛   :any
🐛    :any-link
    :checked
    :default
🐛    :dir()
    :disabled
    :empty
    :enabled
    :first
    :first-child
    :first-of-type
🐛    :fullscreen
    :focus
    :focus-within
    :hover
    :indeterminate
    :in-range
    :invalid
    :lang()
    :last-child
    :last-of-type
    :left
    :link
    :not()
    :nth-child()
    :nth-last-child()
    :nth-last-of-type()
    :nth-of-type()
    :only-child
    :only-of-type
    :optional
    :out-of-range
🐛    :placeholder-shown
    :read-only
    :read-write
    :required
    :right
    :root
    :scope
    :target
    :valid
    :visited

> This API has not been standardized.

Pseudo-elements
😩    ::-moz-progress-bar
😩    ::-moz-range-progress
😩    ::-moz-range-thumb
😩    ::-moz-range-track
😩    ::-ms-fill
😩    ::-ms-fill-lower
😩    ::-ms-fill-upper
😩    ::-ms-thumb
😩    ::-ms-track
😩    ::-webkit-progress-bar
😩    ::-webkit-progress-value
😩    ::-webkit-slider-runnable-track
😩    ::-webkit-slider-thumb
    ::after (:after)
    ::backdrop
    ::before (:before)
    ::first-letter (:first-letter)
    ::first-line (:first-line)
🐛    ::placeholder
    ::selection
    ::cue (:cue)





😋 Get Emoji — List of all Emojis to ✂️ Copy and 📋 Paste 👌
📙 Emojipedia — 😃 Home of Emoji Meanings 💁👌🎍😍
😋 Get Emoji — List of all Emojis to ✂️ Copy and ...
Copy and Paste Emoji 👍 No apps required. 😄😊😉😍😘😚😜😝😳😁😣😢😂😭😪😥😰😩

getemoji.com

emojipedia.org


```





https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList
https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer#effectAllowed.28.29
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API#Drag_Events




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

> CSS Attributes ???


https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes


https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*


## data-*

> HTML5 这类的属性，被称为自定义属性，允许HTML与和它对应DOM表现形式之间的专有信息交换，这或许对script来说有用。




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





https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript





> 这种方式通过访问一个元素的 dataset 属性来存取 data-* 自定义属性的值。
这个 dataset 属性是HTML5 JavaScript API的一部分，用来返回一个所有选择元素 data- 属性的DOMStringMap对象。

1. Element.getAttribute() & Element.setAttribute()
2. dataset: 使用这种方法时，不是使用完整的属性名，如 data-uid 来存取数据，应该去掉data- 前缀;  data- 属性名如果包含了连字符，例如：data-date-of-birth, 连字符将被去掉，并转换为驼峰式的命名, dateOfBirth 。
3. CSS3 Attribute Selectors: [data-test*="test"]



```js

<div id = "user" data-uid = "12345" data-uname = "脚本之家"></div> 

// 使用getAttribute获取 data- 属性
var user = document.getElementById('user');
var userName = plant.getAttribute('data-uname'); // userName = 'xgqfrms'
var userId = plant.getAttribute('data-uid'); // userId = '007'

// 使用setAttribute设置 data- 属性
user.setAttribute('data-site','https://www.xgqfrms.xyz') ;




```

## using `data-*` store Object!

```js

<div id="awesome-json" data-awesome='{"game":"on"}'></div> 


var gameStatus= jQuery("#awesome-json").data('awesome').game; console.log(gameStatus); 



```





















