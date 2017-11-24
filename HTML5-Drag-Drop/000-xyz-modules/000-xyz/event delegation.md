# event proxy


> 事件代理 (event proxy)


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler





https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/proxy



# event delegation

> 事件委托 (event delegation)


https://developer.mozilla.org/zh-CN/docs/Web/API/Event/Event

https://developer.mozilla.org/en-US/docs/Web/API/Event/target




https://developer.mozilla.org/zh-CN/docs/Server-sent_events/EventSource


> blogs

http://www.cnblogs.com/silence516/archive/2009/09/03/delegateevent.html

> JavaScript事件委托则是一种简单的技巧，通过它你可以把事件处理器添加到一个`父级元素`上，这样就避免了把事件处理器添加到`多个子级元素`上。

事件冒泡以及目标元素




```js

const target = document.querySelector(`[data-uid*="uid"]`);

const getEventTarget = (e) => {
    // let e = e || window.event;
    // Uncaught SyntaxError: Identifier 'e' has already been declared
    e = e || window.event;
    return e.target || e.srcElement;
};



const editCell = (e) => {
    let target = getEventTarget(e);
    // dataset.uid
    if(target.tagName.toLowerCase() =='td') {
        // DO SOMETHING WITH THE CELL
    }
    // return result;
}



```


1. 需要创建的以及驻留在内存中的事件处理器少了; 在DOM更新后无须重新绑定事件处理器了。


2. 不是所有的事件都能冒泡的。blur、focus、load和unload不能像其它事件一样冒泡。
事实上blur和focus可以用`事件捕获`而非`事件冒泡`的方法获得（在IE之外的其它浏览器中）。
如果你的代码处理mousemove事件的话你遇上性能瓶颈的风险可就大了，因为mousemove事件触发非常频繁。而mouseout则因为其怪异的表现而变得很难用事件代理来管理。 

Usable Type blog

jQuery 事件代理


http://blog.csdn.net/weinideai/archive/2009/01/19/3835839.aspx
http://www.cnblogs.com/silence516/archive/2009/09/03/delegateevent.html

http://www.cnblogs.com/zxktxj/archive/2012/02/26/2369176.html

http://www.cnblogs.com/zxktxj/archive/2012/02/26/2369155.html





