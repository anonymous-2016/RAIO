file:///C:/Users/xiagq/Downloads/html5-fundamentals/index.html


file:///C:/Users/xiagq/Downloads/html5-fundamentals/dd-basics.html


https://app.pluralsight.com/library/courses/html5-fundamentals/exercise-files

https://app.pluralsight.com/player?course=html5-fundamentals&author=craig-shoemaker&name=25581aad-ae19-4afe-bd0a-6ca893bf54e4&clip=0&mode=live



http server & logs

cmd-shell & .bat/.cmd


//# sourceMappingURL=jquery.min.map


http://codedhomes.com/


@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");


https://clipboardjs.com/


```js

var types = e.dataTransfer.types;

console.log(`types = `, types);
console.log(`types = ${JSON.stringify(types, null, 4)};`);

types =  [
    "text/plain",
    "text/uri-list",
    "text/html"
];

types =  {
    "0": "Text",
    "1": "Url",
    "2": "Files"
}

types =  [object DOMStringList]
   "types = "
   {
      [functions]: ,
      0: "Text",
      1: "Url",
      2: "Files",
      __proto__: { },
      constructor: { },
      length: 3
   }

types =  [object DOMStringList]
   "types = "
   {
      [functions]: ,
      0: "Text",
      1: "Url",
      2: "Files",
      __proto__: {
         [functions]: ,
         __proto__: { },
         constructor: { },
         length: <没有权限>
      },
      constructor: {
         [functions]: ,
         __proto__: { },
         prototype: {
            [functions]: ,
            __proto__: { },
            constructor: { },
            length: <没有权限>
         }
      },
      length: 3
   }


https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer#types.28.29

Text , IE

> Data transfer types are not recognized in IE 10 & below


```

`element.insertAdjacentHTML(position, text);`

https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

https://w3c.github.io/DOM-Parsing/#widl-Element-insertAdjacentHTML-void-DOMString-position-DOMString-text

https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/


https://caniuse.com/#search=insertAdjacentHTML

https://johnresig.com/blog/dom-insertadjacenthtml/

> Posted: November 24th, 2008

> Internet Explorer 4.0 +



Element.insertAdjacentHTML()
Element.insertAdjacentElement()
Element.insertAdjacentText()

https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

`targetElement.insertAdjacentElement(position, element);`

> Internet Explorer 8 Basic support



https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText

`element.insertAdjacentText(position, element);`

>  text node




`const elementClasses = elementNodeReference.classList;`

https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

> Internet Explorer 10 Basic support

? jquery 









获取 拖动元素 位于 目标元素上的 x, y 坐标,

判断 是否位于 y 上半部/下半部
判断 是否位于 x 左半部/右半部

???


检测 drop 容器的高度 x,y

http://www.cnblogs.com/EasonJim/p/6229517.html
https://github.com/easonjim

http://www.cnblogs.com/zhwl/p/3858682.html

> `#div1.style.width` & `#div1.offsetWidth`

这中情况通过#div1.style.width拿不到宽度，而通过#div1.offsetWidth才可以获取到宽度。

https://yq.aliyun.com/ziliao/60299


runtimeStyle   运行时的样式！可覆盖style的属性！
currentStyle   指 style 和 runtimeStyle 的结合！

```js

//if IE
alert(document.getElementById('div').currentStyle.width); //return 20px
alert(document.getElementById('div').currentStyle.height); //return auto
//if Mozilla
alert(getComputedStyle(document.getElementById('div'), '').width); //return 20px
alert(getComputedStyle(document.getElementById('div'), '').height); //return 0px

```

http://www.liangshunet.com/ca/201702/197589637.htm


一、js用currentStyle获取div的自适应高度

> 高版本浏览器能准确获取到div的当前高度；低版本的浏览器（如 ie6）不能准确获取到div的当前高度

二、js用offsetHeight获取div的自适应高度

> 用它无论在高版本的还是低版本的ie中都准确获取到div的当前自适应高度
> 如果设计的网页要求能在ie6这样的古董级旧版本的浏览器正常浏览，就用这样的方法；


window.onresize=function(){} 事件,每改变窗口就重新获取一次。


stackoverflow getComputedStyle

https://stackoverflow.com/questions/19137507/jquery-equivalent-for-getcomputedstyle

https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively/21064102#21064102


https://stackoverflow.com/users

https://stackoverflow.com/questions/44342065/how-to-get-a-dom-elements-before-content-with-javscript#


https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

https://codepen.io/gildata/pen/bopoQZ


https://stackoverflow.com/questions/35085987/css-transition-doesnt-work-with-width/46312194#46312194

https://i.stack.imgur.com/j4Op4.png

`getComputedStyle(document.querySelector(".javascript"), ":before").getPropertyValue("background-image")`

```js

// https://rollbar.com/docs/

const links = document.querySelectorAll(`ul.image-list a`);

links[0];
// <a href="/docs/notifier/rollbar-gem/" class="ruby">::before Ruby</a>

links[0];
//

links[0].textContent;
//"Ruby"

links[0].innerText;
// "Ruby"

links[0].innerHTML;
// "Ruby"

// ??? links[0]::before;

p::before,
p::after {
  content: ' Test ';
}

console.log(getComputedStyle(document.querySelector('p'), '::before').getPropertyValue('content'));


getComputedStyle(document.querySelector('span.search-box'), '::after').getPropertyValue('content');

```

user8202629

https://rollbar.com/docs/

https://developer.mozilla.org/en-US/docs/Web/CSS/user-select

> This doesn't have any effect on content loaded as chrome, except in textboxes.


//# sourceMappingURL=jquery.min.map



https://www.w3schools.com/tags/default.asp

`<xyz class="class_list_arrow">yyy</xyz>`

customize element ???



# jQueryUI

> sortable ?


https://stackoverflow.com/questions/8741327/jquery-ui-sortable-tablerows-refresh-number-position-inside

https://jqueryui.com/sortable/

https://jsbin.com/owuxek/9/edit?html,js,output

<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>

https://stackoverflow.com/questions/34586231/how-can-i-find-element-which-is-below-to-the-another-element

```html
    <ul id="classes">
        <li class="class_2" date-created="Sat Jan 04 2014 20:46:55 GMT-0500 (EST)">Calc 152
            <di class="class_list_arrow">xxx</di>
        </li>
        <li class="class_3" date-created="Mon Jan 06 2014 21:26:59 GMT-0500 (EST)">Phys 133
            <di class="class_list_arrow">yyy</di>
            <xyz class="class_list_arrow">yyy</xyz>
        </li>
    </ul>
```

https://cdn.xgqfrms.xyz/jquery/jquery-3.2.1.slim.min.js

https://cdn.xgqfrms.xyz/jquery/jquery-2.2.4.min.js

https://cdn.xgqfrms.xyz/jquery/jquery-1.12.4.min.js




模拟 click 事件???

http://www.daimajiayuan.com/sitejs-17118-1.html

http://www.cnblogs.com/ethan-qi/archive/2012/11/01/2749505.html


```js

clearButton.click();
$("#a").click();

```

# :empty 

https://developer.mozilla.org/zh-CN/docs/Web/CSS/:empty 

> :empty CSS 伪类 代表没有子元素的元素。

子元素只可以是元素节点或文本（包括空格），无论一个元素是否为 (empty 或 not), 注释或处理指令都不会产生影响。



```css


/* customize placeholder */

/* :empty , https://developer.mozilla.org/zh-CN/docs/Web/CSS/:empty*/
/* :empty CSS 伪类 代表没有子元素的元素。子元素只可以是元素节点或文本（包括空格），无论一个元素是否为 (empty 或 not), 注释或处理指令都不会产生影响。 */

.module-placeholder:empty::before {
    position: absolute;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #aaa;
    content: '从左侧拖模块放这里';
    font-size: 20px;
}

```



E:\github\projects\D2Designs\首页及整体框架\公告研报



# demos

http://www.jq22.com/jquery-info364

http://www.jq22.com/yanshi364
http://open.wise.wicrenet.com/index

http://wise.wicrenet.com/admin/sign

shit@wise

等待管理人员审核，您将有30天试用期

http://wise.wicrenet.com/mall_v2/index.html?t=20170928


http://www.jq22.com/textDifference

http://www.jq22.com/jquery/jquery.html

http://www.jq22.com/chm/jquery1.8.3.html


http://chat16.live800.com/live800/chatClient/chatbox.jsp?companyID=782236&configID=149651&jid=3656374798

http://www.live800.com/

https://ef.js.org/
https://ef.js.org/#!guides/quick-start
https://jsfiddle.net/ClassicOldSong/oa3096s3/
https://ef.js.org/#!examples

https://codepen.io/xgqfrms-gildata/pen/KXBwxL



https://unpkg.com/ef.js@0.4.1-beta.2/dist/ef.min.js
https://codepen.io/xgqfrms-gildata/pen/KXBwxL

https://code.jquery.com/jquery-3.2.1.slim.min.js
https://cdn.xgqfrms.xyz/jquery/jquery-3.2.1.slim.min.js


# utils libs

> click & copy
https://clipboardjs.com/ 

> codes editor & codes highlight
https://codemirror.net/

> The jQuery replacement for select boxes
https://select2.github.io/
https://select2.org/

> Respond to your user’s browser features.
https://modernizr.com/
https://modernizr.com/docs/#what-is-modernizr
https://modernizr.com/docs/#using-modernizr-with-javascript
https://modernizr.com/docs/#using-modernizr-with-css

Modernizr is a small piece of JavaScript code that automatically detects the availability of next-generation web technologies in your user's browsers.

`npm install -g modernizr`


JavaScript框架
Modernizr
jQuery
Web框架
Twitter Bootstrap




http://www.jq22.com/js/jquery.qrcode.min.js

http://www.jq22.com/demo/jQueryTest201709282204/

http://www.jq22.com/demo/jQueryTest201709282204/js/test.js
http://www.jq22.com/daima



http://www.jq22.com/yanshi15518


http://www.jq22.com/yanshi16236

https://trackingjs.com/docs.html
https://github.com/eduardolundgren/tracking.js/tree/master/examples





