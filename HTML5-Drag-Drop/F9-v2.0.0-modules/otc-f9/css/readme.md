# CSS


## 半角字符 与 全角字符

https://www.zhihu.com/question/19605819a
https://zh.wikipedia.org/zh-cn/%E5%85%A8%E5%BD%A2


## CSS Variables

https://drafts.csswg.org/css-variables/

https://developer.mozilla.org/en-US/docs/Web/CSS/--*


```html

<p id="firstParagraph">This paragraph should have a blue background and yellow text.</p>
<p id="secondParagraph">This paragraph should have a yellow background and blue text.</p>
<div id="container">
    <p id="thirdParagraph">This paragraph should have a green background and yellow text.</p>
</div>

```


```css
/* global variable */
:root {
    --first-color: #488cff;
    --second-color: #ffff8c;
}

#firstParagraph {
    background-color: var(--first-color);
    color: var(--second-color);
}

#secondParagraph {
    background-color: var(--second-color);
    color: var(--first-color);
}
/* local variable & overwrite*/
#container {
    --first-color: #48ff32;
}

#thirdParagraph {
    background-color: var(--first-color);
    color: var(--second-color);
}

```



## em & rem & px

https://kyleschaeffer.com/development/css-font-size-em-vs-px-vs-pt-vs/

http://pxtoem.com/


## font-family & @font-face

https://developer.mozilla.org/en-US/docs/Web/CSS/font
https://developer.mozilla.org/en-US/docs/Web/CSS/font-size

### `1em = 12pt = 16px = 100%`

> One point is equal to 1/72 of an inch.


> `100% ??? 100% : 1em;`


```css

/* 1em === 16px */
/* 0.75em === 12px */
/* 12pt === 100% */

:root {
    font-size: 1em;
    /* font-size: 0.75em; */
    /* font-size: 12px; */
}

section{
    font-size: 1rem;
}

```

https://developer.mozilla.org/en-US/docs/Web/CSS/font-family



```css

/* A font family name and a generic family name */
font-family: Gill Sans Extrabold, sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* A generic family name only */
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui;

/* Global values */
font-family: inherit;
font-family: initial;
font-family: unset;

```


https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-family
https://drafts.csswg.org/css-fonts-3/#font-family-desc

```css

@font-face {
    font-family: examplefont;
    src: url('examplefont.ttf');
}

```



http://www.kendraschaefer.com/2012/06/chinese-standard-web-fonts-the-ultimate-guide-to-css-font-family-declarations-for-web-design-in-simplified-chinese/


```css

:root {
    font-size: 1em;
    /* font-size: 0.75em; */
    /* font-size: 12px; */
    --font-size: 12px;
    background: #fff;
    color: #000;
    font-family: "SimSun", serif, sans-serif;
    /* font-family: SimSun, serif, sans-serif; */
    /* simsun - bold */
    font-family: "Open Sans", sans-serif, Arial, Helvetica;
}
*{
    font-family: Tahoma, Helvetica, Arial, "Microsoft Yahei","微软雅黑", STXihei, "华文细黑", sans-serif;
}
div{
    font-family: Georgia, "Times New Roman", "Microsoft YaHei", "微软雅黑", STXihei, "华文细黑", serif;
    font-family: Georgia, "Times New Roman", "Microsoft YaHei", 微软雅黑, STXihei, 华文细黑, serif;
    font-family: Arial, Helvetica, tahoma, verdana, 宋体, SimSun, 华文细黑, STXihei, sans-serif;
    font-family: Tahoma, Arial, Helvetica, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, STXihei, "华文细黑", sans-serif;
    font-family: Georgia, "Times New Roman", "FangSong", "仿宋", STFangSong, "华文仿宋", serif;
}

```






