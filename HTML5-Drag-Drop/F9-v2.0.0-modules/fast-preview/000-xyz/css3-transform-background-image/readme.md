

# css3-transform-background-image

http://www.sitepoint.com/css3-transform-background-image/


https://codepen.io/SitePoint/pen/Ngpvwx



> rotate  background image ???

```css

#myelement {
    position: relative;
    overflow: hidden;
}

#myelement:before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    z-index: -1;
    background: url(background.png) 0 0 repeat;
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
}


/* test */

#myelement {
    position: relative;
    overflow: hidden;
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
}

#myelement:before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    z-index: -1;
    background: url(background.png) 0 0 repeat;
    -webkit-transform: rotate(-30deg);
    transform: rotate(-30deg);
}

```


https://stackoverflow.com/questions/5087420/how-to-rotate-the-background-image-in-the-container
https://www.sitepoint.com/css3-transform-background-image/







