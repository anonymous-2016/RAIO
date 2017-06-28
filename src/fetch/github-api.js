let username = `xgqfrms-GitHub`;
    repo = `Node-CLI-Tools/commits`;


const url = `https://api.github.com/repos/${username}/${repo}`;

// https://api.github.com/repos/xgqfrms-GitHub/Node-CLI-Tools/commits

// Error API: https://api.github.com/users/${username}/${repo}


fetch(`https://api.github.com/repos/${username}/${repo}`,{
    data: {
        client_id: '08ecc2f68d922f18800e',
        client_secret: '5846d428b5340812b76c9637eceaee979340b922'
    }
})
.then((response) => response.json())
.then((json)=> {
    console.log(`json = ${json}`);
    return repos = json;
})
.then((repos)=>{
    console.log(`repos = ${repos}`);
    console.log(`repos = ${repos.length}`);
    console.log(`repos$ 0  = ${repos[0]}`);
    console.log(`repos$ 1  = ${repos[1]}`);
    for (let i = 0; i < repos.length; i++) {
        console.log(`repos${i}  = ${repos[i]}`);
    }
});

// https://api.github.com/users/xgqfrms

// https://api.github.com/users/xgqfrms/react2 ???



// IIFE & return


let nct = ((username=`xgqfrms-GitHub`, repo=`Node-CLI-Tools`) => {
    fetch(`https://api.github.com/repos/${username}/${repo}/commits`,{
        data: {
            client_id: '08ecc2f68d922f18800e',
            client_secret: '5846d428b5340812b76c9637eceaee979340b922'
        }
    })
    .then((response) => response.json())
    .then((json)=> {
        return repos = json;
    })
    .then((repos)=>{
        console.log(repos);
    });
})();

// undefined


let new_nct = ((username=`xgqfrms-GitHub`, repo=`Node-CLI-Tools`) => {
    fetch(`https://api.github.com/repos/${username}/${repo}/commits`,{
        data: {
            client_id: '08ecc2f68d922f18800e',
            client_secret: '5846d428b5340812b76c9637eceaee979340b922'
        }
    })
    .then((response) => response.json())
    .then((json)=> {
        return repos = json;
    })
    .then((repos)=>{
        console.log(repos);
        return new_nct = repos;
    });
})();

// new_nct
// repos


((username=`xgqfrms-GitHub`, repo=`Node-CLI-Tools`) => {
    fetch(`https://api.github.com/repos/${username}/${repo}/commits`,{
        data: {
            client_id: '08ecc2f68d922f18800e',
            client_secret: '5846d428b5340812b76c9637eceaee979340b922'
        }
    })
    .then((response) => response.json())
    .then((json)=> {
        return repos = json;
    });
})();

// repos



/*

API

https://developer.github.com/v3/repos/

https://developer.github.com/v3/users/

https://developer.github.com/v3/repos/#list-user-repositories

https://developer.github.com/v3/repos/#list-organization-repositories

*/

fetch(`https://api.github.com/orgs/gildata/repos/`,{
    data: {
        client_id: '08ecc2f68d922f18800e',
        client_secret: '5846d428b5340812b76c9637eceaee979340b922'
    }
})
.then((response) => response.json())
.then((json)=> {
    console.log(`json = ${json}`);
    return repos = json;
});





fetch(`https://api.github.com/users`,{
    data: {
        client_id: '08ecc2f68d922f18800e',
        client_secret: '5846d428b5340812b76c9637eceaee979340b922'
    }
})
.then((response) => response.json())
.then((json)=> {
    console.log(`json = ${json}`);
    return repos = json;
});




fetch(`https://api.github.com/users/xgqfrms-gildata`,{
    data: {
        client_id: '08ecc2f68d922f18800e',
        client_secret: '5846d428b5340812b76c9637eceaee979340b922'
    }
})
.then((response) => response.json())
.then((json)=> {
    console.log(`json = ${json}`);
    return repos = json;
});














