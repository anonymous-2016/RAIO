# HTML5







# Browsersync

https://www.browsersync.io/
https://browsersync.io/docs/command-line
https://browsersync.io/docs/command-line#start

```sh

$ npm install -g browser-sync

$ browser-sync start --server --files "css/*.css"

$ browser-sync start --proxy "myproject.dev" --files "css/*.css"

```

http://browserify.org/
https://scotch.io/tutorials/getting-started-with-browserify

https://ci.testling.com/


# cwd in linux

> current working directory

https://linux.die.net/man/3/cwd

https://unix.stackexchange.com/questions/188182/how-can-i-get-the-current-working-directory

http://users.cs.cf.ac.uk/Dave.Marshall/Internet/node122.html








http://www.imooc.com/course/list?c=javascript&page=4

http://www.imooc.com/learn/820

http://www.imooc.com/learn/21

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_Operator#document-main
https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Using_data_attributes




https://caniuse.com/#search=draganddrop

https://html.spec.whatwg.org/multipage/dnd.html#dnd

https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations

https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer#document-main
https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API

https://www.sitepoint.com/html5-native-drag-and-drop-api/

https://www.w3schools.com/html/html5_draganddrop.asp

https://www.w3.org/TR/html5/dom.html#dom-dataset


https://www.npmjs.com/package/ng2-drag-drop
https://www.npmjs.com/package/drag-drop-polyfill

https://yq.aliyun.com/articles/31547

https://yq.aliyun.com/articles/55930
https://yq.aliyun.com/articles/49932
https://yq.aliyun.com/articles/50531

http://www.cnblogs.com/fsjohnhuang/p/3961066.html?#t3
http://www.cnblogs.com/fsjohnhuang/p/3961066.html#t12

https://github.com/fsjohnhuang/DnD-polyfill/blob/master/sample/sample3/

http://www.ietester.cn/



http://www.w3school.com.cn/html5/html_5_draganddrop.asp
http://www.cnblogs.com/wpfpizicai/archive/2012/04/07/2436454.html
http://www.kankanews.com/ICkengine/archives/82862.shtml
http://jingyan.baidu.com/article/6dad5075cf6e62a123e36e11.html
http://www.zhangxinxu.com/wordpress/2011/02/html5-drag-drop-%E6%8B%96%E6%8B%BD%E4%B8%8E%E6%8B%96%E6%94%BE%E7%AE%80%E4%BB%8B/
http://my.oschina.net/caixw/blog/102845
http://www.cnblogs.com/birdshome/archive/2006/07/22/Drag_Drop.html
《HTML5实战》第11章、HTML5中元素的拖放
《HTML5用户指南》第8章、拖放
http://msdn.microsoft.com/en-us/library/ff974353(v=vs.85).aspx
《HTML5与CSS3权威指南》4.5.拖放
《论道HTML5》3.3.Drag & Drop API


http://www.zhangxinxu.com/wordpress/2011/02/html5-drag-drop-%E6%8B%96%E6%8B%BD%E4%B8%8E%E6%8B%96%E6%94%BE%E7%AE%80%E4%BB%8B/

http://www.zhangxinxu.com/wordpress/2016/11/html5-drag-drop-module-insert-sort-delete-demo/

https://pagead2.googlesyndication.com/pagead/show_ads.js




https://www.sitepoint.com/html5-native-drag-and-drop-api/




https://www.ng-book.com/
https://www.ng-book.com/2/



相关重点
DataTransfer 对象：退拽对象用来传递的媒介，使用一般为Event.dataTransfer。
draggable 属性：就是标签元素要设置draggable=true，否则不会有效果，例如：
`<div title="拖拽我" draggable="true">列表1</div>`

ondragstart 事件：当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上

ondragover 事件：拖拽元素在被拖曳元素/目标元素上移动的时候触发的事件，此事件作用在被拖曳元素/目标元素上

dragleave 事件：当拖拽元素被拖拽 leave 的时候触发的事件，此事件作用在被拖曳元素上

ondragend 事件：当拖拽完成后触发的事件，此事件作用在被拖曳元素上



ondragenter 事件：当拖曳元素进入目标元素的时候触发的事件，此事件作用在目标元素上

ondragover 事件：拖拽元素在被拖曳元素/目标元素上移动的时候触发的事件，此事件作用在被拖曳元素/目标元素上

ondrop 事件：被拖拽的元素在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上


ondragexit & ondrag

ondragexit 事件：

The dragexit event is fired when an element is no longer the drag operation's immediate selection target.
Fired when an element is no longer the drag operation's immediate selection target.

ondrag 事件：

Fired when an element or text selection is being dragged.
The drag event is fired when an element or text selection is being dragged (every few hundred milliseconds).



Event.preventDefault() 方法：阻止默认的些事件方法等执行。
在ondragover中一定要执行preventDefault()，否则ondrop事件不会被触发。
另外，如果是从其他应用软件或是文件中拖东西进来，尤其是图片的时候，默认的动作是显示这个图片或是相关信息，并不是真的执行drop。
此时需要用用document的ondragover事件把它直接干掉。

Event.effectAllowed 属性：就是拖拽的效果。


https://bestvpn.org/whats-my-ip/litmus#html5-web-applications

http://www.zhangxinxu.com/wordpress/2011/02/html5-drag-drop-拖拽与拖放简介/


dragleave 

view-source:http://www.zhangxinxu.com/study/201102/html5-drag-and-drop.html


```html

<svg version="1.1" viewBox="0 0 16 16" aria-hidden="true" class="octicon octicon-alert" height="16" width="16">
    <path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path>
</svg>


<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" aria-hidden="true" class="octicon octicon-alert" height="16"  width="16" fill="#f00">
    <path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path>
</svg>

```

You can't perform that action at this time.

https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/opacity


https://developer.mozilla.org/en-US/docs/Web/CSS/flex




ondragexit & ondrag

https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragexit
https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondrag



https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API#Drag_Events

https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer#document-main



https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer#Properties

