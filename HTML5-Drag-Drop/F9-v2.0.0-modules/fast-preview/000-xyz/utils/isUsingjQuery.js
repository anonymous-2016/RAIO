
const isUsingjQuery = () => {
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
    }else{
        // false
        console.log(`Hooray, your website are not using %c jQuery!`, console_css.ok);
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
