# HTML5


http://2ality.com/2016/02/exponentiation-operator.html

https://babeljs.io/repl/




## npm i & npm link

```sh

# link `nct` to cli commands

$ npm i
$ npm link


```

## run

```sh
# parameters can be ignore

$ nct [user_name, [repo_name]]
$ nct user_name repo_name

```







# Browsersync

https://www.browsersync.io/
https://browsersync.io/docs/command-line
https://browsersync.io/docs/command-line#start

```sh

$ npm install -g browser-sync

$ browser-sync start --server --files "css/*.css"

$ browser-sync start --proxy "myproject.dev" --files "css/*.css"


$ browser-sync start --server --files "HTM5_DnD_Module/*.*"

# http://localhost:3000/index.html
# http://localhost:3000/layout.html

$ browser-sync start --server --files "./*.*"

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





# effectAllowed

https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer#effectAllowed.28.29

https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed

https://html.spec.whatwg.org/multipage/dnd.html#dom-datatransfer-effectallowed

https://www.w3.org/TR/html5/dom.html#dom-dataset


```js
    e.dataTransfer.effectAllowed = 'move';
    // default
    // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer#effectAllowed.28.29
    // copy, move ,link ,copyLink, copyMove, linkMove, all, none, or uninitialized.

```


https://app.pluralsight.com/library/courses/html5-fundamentals/table-of-contents

https://app.pluralsight.com/library/courses/practical-html5/table-of-contents


http://fontawesome.io/icons/

https://github.com/css-modules/css-modules/blob/master/docs/get-started.md#webpack


# Modular JavaScript

> `import & export`

https://youtu.be/HkFlM73G-hk?list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f

https://addyosmani.com/writing-modular-js/

http://www.jianshu.com/p/e422c28e2471
http://www.imooc.com/article/6911
https://es6.ruanyifeng.com/#docs/module

# CSS 模块化

> `@import`

http://www.jianshu.com/p/d46bc8cf3afa
https://segmentfault.com/a/1190000008064468

```sh

$ npm install -g css-combo

# csscombo app.css app.bundled.css

```


https://github.com/JedWatson/classnames

<深入React技术栈>

http://www.ruanyifeng.com/blog/2016/06/css_modules.html

https://segmentfault.com/a/1190000006921812



https://www.zhihu.com/question/20790576

https://www.browserstack.com/test-on-microsoft-edge-browser



⚠️⚠️⚠️

https://www.npmjs.com/package/react-css-modules

https://segmentfault.com/q/1010000009264609/revision
http://mashable.com/2010/03/16/ie9-preview/

http://www.jianshu.com/u/8fda73aa8a1f
http://www.jianshu.com/users/a72dfefe1e42/timeline

https://xgqfrms.xyz/web-development-all-in-one.html


axios

babel-polyfill

```html

    <div class="popover-modal" style="left: 913px;">
        <div class="meta">
            <i class="iconfont ic-navigation-night"></i>
            <span>夜间模式</span>
        </div>
        <div class="switch day-night-group">
            <a class="switch-btn active">开</a>
            <a class="switch-btn">关</a>
        </div>
        <hr>
        <div class="switch font-family-group">
            <a class="switch-btn font-song active">宋体</a>
            <a class="switch-btn font-hei">黑体</a></div>
        <div class="switch">
            <a class="switch-btn active">简</a>
            <a class="switch-btn">繁</a>
        </div>
    </div>

        <li class="search">
        <form target="_blank" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
            <input type="text" name="q" id="q" value="" autocomplete="off" placeholder="搜索" class="search-input" data-mounted="1">
            <a class="search-btn" href="javascript:void(null)"><i class="iconfont ic-search"></i></a>
            <div id="navbar-search-tips" style="">
                <div class="search-trending">
                    <div class="search-trending-header clearfix"><span>热门搜索</span> <a><i class="iconfont ic-search-change" style="transform: rotate(1440deg);"></i> 换一批</a></div>
                    <ul class="search-trending-tag-wrap">
                        <li><a href="/search?q=%E8%82%B2%E5%84%BF&amp;utm_source=desktop&amp;utm_medium=search-trending" target="_blank">育儿</a></li>
                        <li><a href="/search?q=%E7%AE%80%E4%B9%A6%E4%BA%A4%E5%8F%8B&amp;utm_source=desktop&amp;utm_medium=search-trending" target="_blank">简书交友</a></li>
                        <li><a href="/search?q=%E7%94%9F%E6%B4%BB&amp;utm_source=desktop&amp;utm_medium=search-trending" target="_blank">生活</a></li>
                        <li><a href="/search?q=%E6%B8%B8%E6%88%8F&amp;utm_source=desktop&amp;utm_medium=search-trending" target="_blank">游戏</a></li>
                        <li><a href="/search?q=markdown&amp;utm_source=desktop&amp;utm_medium=search-trending" target="_blank">markdown</a></li>
                        <li><a href="/search?q=%E8%93%9D%E9%A2%9C&amp;utm_source=desktop&amp;utm_medium=search-trending" target="_blank">蓝颜</a></li>
                        <li><a href="/search?q=%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1%E5%BA%94%E7%94%A8&amp;utm_source=desktop&amp;utm_medium=search-trending" target="_blank">电子商务应用</a></li>
                        <li><a href="/search?q=%E9%9D%A2%E8%AF%95&amp;utm_source=desktop&amp;utm_medium=search-trending" target="_blank">面试</a></li>
                        <li><a href="/search?q=%E6%80%BB%E8%A3%81%E8%A6%81%E7%94%9F%E5%A8%83&amp;utm_source=desktop&amp;utm_medium=search-trending" target="_blank">总裁要生娃</a></li>
                        <li><a href="/search?q=%E6%88%91%E7%9A%84%E8%80%81%E5%A9%86%E6%98%AF%E5%86%B0%E5%B1%B1%E6%80%BB%E8%A3%81&amp;utm_source=desktop&amp;utm_medium=search-trending" target="_blank">我的老婆是冰山总裁</a></li>
                    </ul>
                </div>
                <div class="search-recent">
                    <!---->
                    <ul class="search-recent-item-wrap">
                        <li><a href="/search?q=xgqfrms&amp;utm_source=desktop&amp;utm_medium=search-recent" target="_blank"><i class="iconfont ic-search-history"></i> <span>xgqfrms</span> <i class="iconfont ic-unfollow"></i></a></li>
                    </ul>
                </div>
            </div>
        </form>
    </li>
```

http://www.jianshu.com/p/d46bc8cf3afa

```css

@media (min-width: 768px) {
    .navbar-nav {
        float:left;
        margin: 0
    }

    .navbar-nav>li {
        float: left
    }
}

@media (min-width: 320px) and (max-width:767px) {
    nav .menu-icon {
        display:none
    }

    nav .navbar-collapse {
        width: 100vw;
        border: none
    }

    nav form .search-input,nav form .search-input:focus {
        width: 100%
    }

    nav ul.nav.navbar-nav {
        background: #fff
    }

    nav .navbar-nav {
        margin: 0 -15px
    }

    nav .navbar-nav li {
        border-bottom: 1px solid #f0f0f0
    }

    nav .navbar-nav li a {
        text-align: center
    }

    nav .notification .dropdown-menu {
        display: none
    }
}

@media (min-width: 768px) and (max-width:1080px) {
    nav .menu-text {
        display:none
    }

    nav .navbar-nav li {
        margin-right: 5px
    }

    nav form .search-input,nav form .search-input:focus {
        width: 150px
    }
}

@media (min-width: 1081px) and (max-width:1439px) {
    nav .menu-icon {
        display:none
    }
}

@media (min-width: 1439px) {
    nav .menu-icon {
        margin-right:5px
    }

    nav form .search-input {
        width: 240px
    }

    nav form .search-input:focus {
        width: 320px
    }
}

```

https://regexper.com/#%2F(%5Bhtps%5D%3A%5C%2F%5C%2F%5Ba-zA-Z0-9%5C_%5C.%5D%2B%5C.xgqfrms%5C.xyz)%2Fig

https://regexper.com/#%2F(%5Bhtps%5D%3A%5C%2F%5C%2F%5B%5Cw%5C.%5D%2B%5C.xgqfrms%5C.xyz)%2Fig

```js

/([htps]:\/\/[a-zA-Z0-9\_\.]+\.xgqfrms\.xyz)/ig;

const reg = /([htps]:\/\/[\w\.]+\.xgqfrms\.xyz)/ig;

reg.test(`https://track.xgqfrms.xyz/xyz`);
// true
reg.test(`http://track.xgqfrms.xyz/abc`);
// false



// ??? bug ???
// 交替 true/false

/([htps]*:\/\/[\w\.]+\.xgqfrms\.xyz)/ig

// http://blog.csdn.net/changhuzhao/article/details/64922582
// https://vilic.info/archives/531
// <img draggable="false" class="emoji" alt="😉" src="https://s.w.org/images/core/emoji/2.3/svg/1f609.svg">
// https://twitter.github.io/twemoji/
// https://vane.life/
// https://emi.life/
// https://www.packtpub.com/application-development/typescript-design-patterns


/*
     原因在于正则表达式中的 g, 使得搜索过程后, 如果匹配成功, 则记录上一次的位置, 如果匹配不成功, 则会归零.
*/
reg.lastIndex = 0; //归零搜索的位置

// 可以更简单地直接将 g 去掉

```


http://lib.csdn.net/article/react/17863

https://react-dnd.github.io/react-dnd/docs-tutorial.html

https://www.npmjs.com/package/react-dnd

https://react-dnd.github.io/react-dnd/examples-chessboard-tutorial-app.html

https://react-dnd.github.io/react-dnd/docs-tutorial.html

Drag and Drop 排序

http://extjs.org.cn/index.php?q=node/153

http://download.csdn.net/download/harry76/5544369

http://www.zhangxinxu.com/wordpress/2016/11/html5-drag-drop-module-insert-sort-delete-demo/


http://10.1.64.125/stock/f9/sulan/sulan.html



projects/D2Designs/股票/F9/原型演示文件/F9%202.0(完整版)/resources/chrome/chrome.html



https://app.pluralsight.com/library/courses/html5-fundamentals/table-of-contents

https://app.pluralsight.com/player?course=html5-fundamentals&author=craig-shoemaker&name=25581aad-ae19-4afe-bd0a-6ca893bf54e4&clip=0&mode=live

https://app.pluralsight.com/player?course=practical-html5&author=gill-cleeren&name=practical-html5-m1-skeleton&clip=3&mode=live


https://code.jquery.com/jquery-3.2.1.slim.min.js

```css

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

# PY

> "sjgn" ==== 涉及概念

```json

涉及概念 证金持股,互联网金融概念,参股金融,职业教育, 在线教育,沪港通概念, 融资融券 主营业务 有色金属大宗贸易,电子枪彩件,黑白件的生产,销售,模具,导光板的生产,销售 52周波动率 日均成交量(3个月) 总市值 净资产 总股本 流通股本 股息率 机构家数 前十大机构持有 分析师关注度 目标价格 综合评级

{
    "sjgn": "互联网金融:蚂蚁金服概念:阿里概念:转融券标的:证金持股:区块链:电商概念:MSCI概念:互联网+:电子信息:融资融券:人工智能:沪港通",
    "zyyw": "计算机软件的技术开发、咨询、服务、成果转让；计算机系统集成；自动化控制工程设计、承包、安装；计算机及配件的销售；电子设备、通讯设备、计算机硬件及外部设备的生产、销售；自有房屋的租赁；本企业自产产品及技术的出口业务：经营本企业生产、科研所需的原辅材料、机械设备、仪器仪表、零配件及技术的进口业务（国家限定公司经营和国家禁止进出口的商品及技术除外）；经营进料加工和“三来一补”业务。经政府有关部门批准并办理工商登记手续，公司可另开设业务发展所需的投资与经营项目，扩大经营范围。",
    "bdl": "47.80",
    "cjl": "2091.80",
    "jzc": "444031.89",
    "zgb": "61780.52",
    "ltgb": "61780.52",
    "gxl": "0.00",
    "cgzb": "25.90",
    "mbjg": "63.19",
    "zhpj": "维持"
}

```


https://jquery.com/upgrade-guide/
https://jquery.com/upgrade-guide/1.9/
https://jquery.com/upgrade-guide/3.0/
https://jquery.com/upgrade-guide/3.0/#browser-support

https://github.com/jquery/jquery-migrate/#README
https://github.com/jquery/jquery-migrate/tree/1.x-stable/#README


https://developer.microsoft.com/en-us/microsoft-edge/
https://developer.microsoft.com/en-us/microsoft-edge/tools/staticscan/

https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/
https://az792536.vo.msecnd.net/vms/release_notes_license_terms_8_1_15.pdf

> These virtual machines expire after 90 days.

> The password to your VM is "Passw0rd!"

https://theunarchiver.com/
http://www.oldversion.com/


https://www.syncfusion.com/resources/techportal/ebooks/jquery


https://stackoverflow.com/questions/10581506/how-to-run-linux-shell-script-on-windows-environment
http://www.colinux.org/

https://www.cygwin.com/setup-x86_64.exe


C:\Users\xiagq\Downloads\html5-fundamentals





基金 F9 速览模块化:

完成：
1. 组件模块化的设计
2. 近期重要事项-模块
3. 重要信息-模块
4. 前端实现导出 excel 表格
5. JSON 数据格式化处理 utils

部分完成：
1. HTML5 模块拖拽 & 模块排序
2. Grid  响应式模块布局
3. CSS 模块化 & 分离出公用样式

整体完成进度 30%


股票 F9

完成： 95%;

1. 模块的 自适居中布局
2. 实现重新设计的两栏模块UI效果
3. 研究报告/公司公告 等模块 添加下载打开pdf功能
4. 公司新闻-模块， 添加summary 和 modal
5. 通用模板-模块
6. 模块drop 区域提示信息
7. webpack 压缩打包 js

新三板专题速览

完成： 50%;

1. 三板公告
2. 三板新闻
3. 新增挂牌






# How to Install Bash on Windows 10



https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/

https://www.howtogeek.com/howto/41382/how-to-use-linux-commands-in-windows-with-cygwin/


https://www.sysgeek.cn/enable-bash-on-ubuntu-on-windows/

https://www.sysgeek.cn/tag/linux-shell/

https://msdn.microsoft.com/en-us/commandline/wsl/about


https://blogs.windows.com/buildingapps/2016/03/30/run-bash-on-ubuntu-on-windows/








https://addons.mozilla.org/en-US/firefox/addon/firebug/?src=ss

https://developer.mozilla.org/en-US/docs/Tools



https://developer.mozilla.org/en-US/docs/Tools/Debugger




## vscode settings

https://github.com/gildata/RAIO/issues/190

```js
{
    // When enabled, typing /** triggers documentation automatically.
    "docthis.automaticForBlockComments": true,
    // When enabled, type information is added to comment tags.
    "docthis.includeTypes": true,
    // When enabled, memberOf information is added to comment tags on class members.
    "docthis.includeMemberOfOnClassMembers": true,
    // When enabled, memberOf information is added to comment tags on interface members.
    "docthis.includeMemberOfOnInterfaceMembers": true,
    // When enabled, JSDoc comments for functions and methods will include @description.
    "docthis.includeDescriptionTag": true,
    // When enabled, hungarian notation will be used as a type hint.
    "docthis.enableHungarianNotationEvaluation": true,
    // When enabled, will use names of params & methods as type hints.
    "docthis.inferTypesFromNames": true,
    // When enabled, will add the @author tag.
    "docthis.includeAuthorTag": true,
    // When docthis.includeAuthorTag is enabled, will add @author tag with this value.
    "docthis.authorName": "xgqfrms"//,
}



```


# 如何处理拖拽后模块对齐的问题 ???

https://api.hcharts.cn/highcharts#xAxis.labels



```js

    xAxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        labels: {
            // autoRotation:'false',
            autoRotation: [0],
            step: 3,// dynamic step ??? width change listener ???
            // enabled: false,
            // format: String
            // formatter: () => `<a href="${categoryLinks[this.value]}">${this.value}</a>`;
            reserveSpace: false,  // 轴标签不占用空间
            // staggerLines: 2,
            // rotation: -90,
            // align: 'left',
            // y: -5,
            // style: {
            //     color: '#FFFFFF',
            //     fontSize: '12pt',
            //     fontWeight: 'bold',
            //     textOutline: '1px contrast'
            // }
        },
        // tickWidth: 0
    },


```



## F9 FS new version




```css

/* cursor: move */

.module-draggable{
    cursor: move;
}

/* 多行文本溢出显示省略号(…) text-overflow: ellipsis */
/* text-overflow: ellipsis; 不可独立使用必须结合overflow:hidden;  white-space:nowrap;才生效。 */
/* 然而white-space:nowrap; 是指不换行，就是说只能一行显示。 */

.long-text-ignore{
    text-wrap: all;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width:200px;
    height: 32px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 14;
}



```

delete-icon.png




