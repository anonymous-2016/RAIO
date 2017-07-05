import 'whatwg-fetch';

// https://github.com/github/fetch


//fetch


// npm i -S whatwg-fetch

let users = "datas";

const url = `https://cdn.xgqfrms.xyz/json/${users="users"}.json`;





fetch('https://cdn.xgqfrms.xyz/json/users.json')
.then(function (response) {
    return response.json();
})
.then(function (json) {
    console.log('parsed json', json);
})
.catch(function (error) {
    console.log('parsing failed', error);
});


/*




let users = "datas",
    url = `https://cdn.xgqfrms.xyz/json/${users="users"}.json`;

fetch(url)
.then(function (response) {
    return response.json();
})
.then(function (json) {
    console.log('parsed json', json);
})
.catch(function (error) {
    console.log('parsing failed', error);
});




*/