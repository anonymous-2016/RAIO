/*
    GraphQL Server
*/

const type Query {
    me : User
}

const type User {
    id : ID
    name : String
}


const Query_me = (request) => {
    return(request.auth.user);
}

const User_name = (user) => {
    return user.getName();
}

/*
// request URL

{
    me {
        name
    }
}

// response JSON

{
    "me": {
        "name": "Luke Skywalker"
    }
}


*/