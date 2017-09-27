var {graphql, buildSchema} = require('graphql');

var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

var root = {
    hello: () => 'Hello world!'
};

graphql(schema, '{ hello }', root)
.then((response) => {
    console.log(response);
    // {data: { hello: 'Hello world!' }}
});



/*

```sh
$ npm init -Y

$ npm i -S graphql

$ node test.js

```
*/

