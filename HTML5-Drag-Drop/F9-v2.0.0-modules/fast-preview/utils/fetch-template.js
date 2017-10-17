const url = `https://cdn.xgqfrms.xyz/json/hightstock/aapl.json`;
// const url = `./aapl.json`;

fetch(url)
.then(res => res.json())
.then(
    (json) => {
        const debug = false;
        // fetch(url, debug = false)
        // TypeError: Failed to execute 'fetch' on 'Window': parameter 2 ('init') is not an object.
        if (debug) {
            console.log(`json = \n `, JSON.stringify(json, null, 4));
        }
        // do somthing
    }
)
.catch(err => console.log(`fetch error = \n`, err));
