# HTML5 `<template>`

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template

> HTML `<template>`元素 是一种用于保存客户端内容的机制，
该内容在页面加载时不被渲染，但可以在运行时使用JavaScript进行实例化。

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes

https://www.w3.org/TR/html5/scripting-1.html#the-template-element
https://html.spec.whatwg.org/multipage/scripting.html#the-template-element

https://caniuse.com/#feat=template


https://caniuse.com/#search=templates

https://caniuse.com/#search=Template

https://www.sitepoint.com/html5-template-tag/

https://www.html5rocks.com/tutorials/webcomponents/template/


https://developers.google.com/web/tools/chrome-devtools/network-performance/reference#timing-explanation


```html

<table id="producttable">
    <thead>
        <tr>
        <td>UPC_Code</td>
        <td>Product_Name</td>
        </tr>
    </thead>
    <tbody>
        <!-- 现有数据可以可选地包括在这里 -->
    </tbody>
</table>

<template id="productrow">
    <tr>
        <td class="record"></td>
        <td></td>
    </tr>
</template>

```

```js

// 通过检查来测试浏览器是否支持HTML模板元素 
// 用于保存模板元素的内容属性。
if ('content' in document.createElement('template')) {
    // 使用现有的HTML tbody实例化表和该行与模板
    let t = document.querySelector('#productrow'),
    td = t.content.querySelectorAll("td");
    td[0].textContent = "1235646565";
    td[1].textContent = "Stuff";
    // 克隆新行并将其插入表中
    let tb = document.getElementsByTagName("tbody");
    let clone = document.importNode(t.content, true);
    tb[0].appendChild(clone);
    // 创建一个新行
    td[0].textContent = "0384928528";
    td[1].textContent = "Acme Kidney Beans";
    // 克隆新行并将其插入表中
    let clone2 = document.importNode(t.content, true);
    tb[0].appendChild(clone2);
} else {
    // 找到另一种方法来添加行到表，因为不支持HTML模板元素。
}

```

https://output.jsbin.com/qimaw/1/




https://ssl.gstatic.com/chrome/components/doodle-notifier-01.html




https://www.w3schools.com/xml/xsl_templates.asp

XSLT <xsl:template> Element


https://www.w3schools.com/xml/xsl_apply_templates.asp

XSLT <xsl:apply-templates> Element


