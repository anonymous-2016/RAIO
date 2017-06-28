const copyRightYear = () => {
    let copyYear = Symbol();
    copyYear = new Date().getFullYear();
    const spanYear = document.getElementById('spanYear');
    spanYear.style.background = "yellow";
    spanYear.style.color = "#000";
    spanYear.innerHTML = `Copyright&copy;${copyYear}- 2050 xgqfrms`;
    return spanYear;
}
window.onload = copyRightYear();

// virtual dom & DocumentFragment & insertAdjacentHTML

/*

https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment


DocumentFragment 接口表示表示一个没有父级文件的最小文档对象。

https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment

https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createDocumentFragment


let docFragment = document.createDocumentFragment();

// assuming it exists (ul element)

let ul = document.getElementsByTagName("ul")[0],
    docfrag = document.createDocumentFragment();

const browserList = [
    "Internet Explorer", 
    "Mozilla Firefox", 
    "Safari", 
    "Chrome", 
    "Opera"
];

browserList.forEach((e) => {
    let li = document.createElement("li");
    li.textContent = e;
    docfrag.appendChild(li);
});

ul.appendChild(docfrag);


https://stackoverflow.com/questions/16126960/what-is-the-difference-between-appendchild-insertadjacenthtml-and-innerhtml



https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

element.insertAdjacentHTML(position, text);


<!-- beforebegin -->
    <p>
        <!-- afterbegin -->
        foo
        <!-- beforeend -->
    </p>
<!-- afterend -->




https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText





*/

