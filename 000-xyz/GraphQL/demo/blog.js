/*

$ npm i -S graphql

*/


import { GraphQLSchema } from 'graphql';

export default new GraphQLSchema({
    query: QueryType,
});



import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'The root of all... queries',
    fields: () => (
        {
            allPeople: {
                type: new GraphQLList(PersonType),
                resolve: root => {
                    // Fetch the index of people from the REST API
                },
            },
            person: {
                type: PersonType,
                args: {
                    id: {
                        type: GraphQLString
                    }
                },
                resolve: (root, args) => {
                    // Fetch the person with ID `args.id`
                },
            }
        }
    )
});


import {
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';

const PersonType = new GraphQLObjectType({
    name: 'Person',
    description: 'Somebody that you used to know',
    fields: () => (
        {
            firstName: {
                type: GraphQLString,
                resolve: person => person.first_name
            },
            lastName: {
                type: GraphQLString,
                resolve: person => person.last_name
            },
            email: {
                type: GraphQLString
            },
            id: {
                type: GraphQLString
            },
            username: {
                type: GraphQLString
            },
            friends: {
                type: new GraphQLList(PersonType),
                resolve: person => {
                    // Fetch the friends with the URLs `person.friends`
                }
            }
        }
    )
});
