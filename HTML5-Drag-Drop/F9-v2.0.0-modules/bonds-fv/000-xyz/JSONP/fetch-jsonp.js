
// fetch & JSONP
const fetchImages = (debug = false) => {
    const url = `http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?`;
    fetch(url, {
        // method: 'GET',/ no body!
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tags: "mount rainier",
            tagmode: "any",
            format: "json"
        }),
        // body: {
        //     tags: "mount rainier",
        //     tagmode: "any",
        //     format: "json"
        // },
    })
    .then(res => res.json())
    .then(
        (json) => {
            console.log(`jsonp data =\n`, JSON.stringify(json));
        }
    )
    .catch(err => {
        console.log(`fetch error = \n`, err);
        // no data handler!
    });
};
