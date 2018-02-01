# webkit scrollbar


## `::-webkit-scrollbar:horizontal` & `::-webkit-scrollbar-thumb:vertical`




:horizontal     horizontal  伪类，主要应用于选择水平方向滚动条。
:vertical    vertical伪类主要是应用于选择竖直方向滚动条
:decrement    decrement伪类应用于按钮和内层轨道(track piece)。它用来指示按钮或者内层轨道是否会减小视窗的位置(比如，垂直滚动条的上面，水平滚动条的左边。)
:increment     increment伪类与和decrement类似，用来指示按钮或内层轨道是否会增大视窗的位置(比如，垂直滚动条的下面和水平滚动条的右边。)
:start    start伪类也应用于按钮和滑块。它用来定义对象是否放到滑块的前面。
:end     类似于start伪类，标识对象是否放到滑块的后面。
:double-button    该伪类可以用于按钮和内层轨道。用于判断一个按钮是不是放在滚动条同一端的一对按钮中的一个。对于内层轨道来说，它表示内层轨道是否紧靠一对按钮。
:single-button    类似于double-button伪类。对按钮来说，它用于判断一个按钮是否自己独立的在滚动条的一段。对内层轨道来说，它表示内层轨道是否紧靠一个single-button。
:no-button    用于内层轨道，表示内层轨道是否要滚动到滚动条的终端，比如，滚动条两端没有按钮的时候。
:corner-present    用于所有滚动条轨道，指示滚动条圆角是否显示。
:window-inactive    用于所有的滚动条轨道，指示应用滚动条的某个页面容器(元素)是否当前被激活。(在webkit最近的版本中，该伪类也可以用于::selection伪元素。webkit团队有计划扩展它并推动成为一个标准的伪类)
另外，:enabled、:disabled、:hover、和:active等伪类同样在滚动条中适用。


https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/overflow-scrollbar-combinations.html




https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources




https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/corner-inactive.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/corner.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-button-active.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-button-background-active.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-button-background-hover.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-button-background-inactive.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-button-background.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-button-hover.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-button-inactive.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-button.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-decrement-arrow.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-increment-arrow.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-thumb-active.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-thumb-hover.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-thumb-inactive.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-thumb.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-track-active.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-track-disabled.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-track-hover.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/horizontal-track.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/resizer-inactive.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/resizer.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-button-active.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-button-background-active.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-button-background-hover.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-button-background-inactive.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-button-background.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-button-hover.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-button-inactive.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-button.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-decrement-arrow.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-increment-arrow.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-thumb-active.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-thumb-hover.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-thumb-inactive.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-thumb.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-track-active.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-track-disabled.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-track-hover.png
https://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/resources/vertical-track.png



#4a4a4a button

#5c5c5c button hover

#2c3237 bg






