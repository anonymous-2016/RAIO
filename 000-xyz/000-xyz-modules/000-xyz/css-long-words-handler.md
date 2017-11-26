#  word-break & overflow-wrap & white-space &  text-overflow

https://developer.mozilla.org/en-US/docs/Web/CSS/word-break

https://css-tricks.com/almanac/properties/w/word-break/

https://css-tricks.com/almanac/properties/o/overflow-wrap/

```css

.example {
    overflow-wrap: break-word;
}

```

https://css-tricks.com/almanac/properties/h/hyphenate/

```css

p {
    hyphens: none | manual | auto
}

```

https://css-tricks.com/almanac/properties/w/whitespace/

```css

div {
  /* This is the default, you don't need to
     explicitly declare it unless overriding
     another declaration */
     white-space: normal; 
}

```
https://developer.mozilla.org/en-US/docs/Web/CSS/white-space

```css

/* Keyword values */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;

/* Global values */
white-space: inherit;
white-space: initial;
white-space: unset;

```

# Handling Long Words and URLs (Forcing Breaks, Hyphenation, Ellipsis, etc)


https://css-tricks.com/snippets/css/prevent-long-urls-from-breaking-out-of-container/

```css

.dont-break-out {

  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;

}

```

```css

.ellipses {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

```




# `nth-of-type(0)` ???

> `nth-of-type(1)`


https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type


```css

/* no :nth-of-type(0) ??? */

div.h5-dnd-icon-box:nth-of-type(1),
div.h5-dnd-icon-box:nth-of-type(2) {
    margin-top: 12px;
    background: #0ff;
}

div.h5-dnd-icon-box:nth-of-type(0) {
    background: #f0f;
}

```

![image](https://user-images.githubusercontent.com/18028768/31808818-648a4850-b5a7-11e7-9ba1-421cd3540c7e.png)


https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-of-type
https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type