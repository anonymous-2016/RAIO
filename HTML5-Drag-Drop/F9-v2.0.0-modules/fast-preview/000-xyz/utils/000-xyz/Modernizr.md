
# Modernizr

https://modernizr.com/

https://modernizr.com/docs#modernizr-api



```js

    if (browser === "the-one-they-make-you-use-at-work") {
        getTheOldLameExperience();
    } else {
        showOffAwesomeNewFeature();
    }


    if (Modernizr.awesomeNewFeature) {
        showOffAwesomeNewFeature();
    } else {
        getTheOldLameExperience();
    }


var detects = {
    'hasjquery': 'jQuery' in window,
    'itstuesday': function() {
        var d = new Date();
        return d.getDay() === 2;
    }
};

Modernizr.addTest(detects);



// https://modernizr.com/docs#modernizr-_prefixes


Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];

// https://modernizr.com/docs#modernizr-prefixedcss









const isUsingjQuery = () => {
    if(('$' in window) || ('jQuery' in window)){
        //
    }else{
        //
    }
};

// IIFE
(() => {
    const console_css = {
        ok: `
            color: green;
            font-size: 23px;
        `,
        error: `
            color: red;
            font-size: 23px;
        `,
    };
    if(('$' in window) || ('jQuery' in window)){
        // true
        console.log(`Yeah, your pages are using %c jQuery!`, console_css.error);
        console.log(`window = `, window);
        console.log(`window.jQuery = `, window.jQuery);
        console.log(`window.$ `, window, window.$);
    }else{
        // false
        console.log(`Hooray, your website are not using %c jQuery!`, console_css.ok);
    }
})();





```


```css

.no-cssgradients .header {
    background: url("images/glossybutton.png");
}

.cssgradients .header {
    background-image: linear-gradient(cornflowerblue, rebeccapurple);
}

```
