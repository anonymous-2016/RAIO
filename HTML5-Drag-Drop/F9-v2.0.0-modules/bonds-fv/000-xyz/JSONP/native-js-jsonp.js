"use strict";


/*
    # native js & jsonp

    1. server enabled JSONP

    2. callback function

    3. insert script in DOM

*/
//this function is the callback, it needs to be a global variable
const fetchJSONP = (json = {}) => {
    // document.querySelector(`[data-scripts="jsonp"]`).innerHTML = `${JSON.stringify(json, null, 4)}`;
    let links = [],
        images = [];
    let html = ``;
    json.items.map(
        (item, i) => {
            links.push(item.link);
            images.push(item.media.m);
            html += `
                <img src="${item.link}" alt="${item.title}">
                <a href="${item.media.m}" title="${item.title}"></a>
                <div>
                    ${item.description}
                </div>
            `;
        }
    );
    document.querySelector(`[data-scripts="jsonp"]`).innerHTML = `${html}`;
    // document.querySelector(`[data-scripts="jsonp"]`).innerHTML = `${JSON.stringify(json, null, 4)}`;
    console.log(`jsonp data = `, JSON.stringify(json, null, 4), Object.keys(json).length);
    console.log(`\njsonp links= `, JSON.stringify(links, null, 4), Object.keys(links).length);
    console.log(`\njsonp images = `, JSON.stringify(images, null, 4), Object.keys(images).length);
};

((debug = false) => {
    // fetch JSONP
    let src = `http://api.flickr.com/services/feeds/photos_public.gne?tags=mount+rainier&tagmode=any&format=json&jsoncallback=fetchJSONP`,
        // {tags: "mount rainier", tagmode: "any", format: "json"}
        script = document.createElement('script');
    script.src = src;
    document.querySelector(`[data-scripts="jsonp"]`).insertAdjacentElement(`beforeend`, script);
    // document.querySelector(`[data-scripts="jsonp"]`).appendChild(script);
})();

// http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=jQuery1708548772439896122_1519446422950&tags=mount+rainier&tagmode=any&format=json&_=1519452445963


/*
    // IIFE
    (function() {
        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        // jquery-1.7.min.js && $.getJSON()
        $.getJSON(flickerAPI, {
            tags: "mount rainier",
            tagmode: "any",
            format: "json"
        })
        .done(function(data) {
            console.log(`jsonp data length=\n`, Object.keys(data).length);
            // 6
            console.log(`jsonp data items length=\n`, Object.keys(data.items).length);
            // 20
            console.log(`jsonp data =\n`, JSON.stringify(data));
            // jsonp data = {***}
            // data.items
            $.each(data.items, function(i, item) {
                // item.media
                $("<img>").attr("src", item.media.m).appendTo("#images");
                if (i === 3) {
                    // return false;
                }else{
                    //
                }
            });
        });
    })();
*/



