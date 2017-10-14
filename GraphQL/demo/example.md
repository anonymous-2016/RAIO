# Queries and Mutations

http://graphql.org/learn/queries/

> On this page, you'll learn in detail about how to query a GraphQL server.


## Fields

```graphql

{
    hero {
        name
    }
}

```

```js

{
    "data": {
        "hero": {
            "name": "R2-D2"
        }
    }
}

```

```graphql

{
    hero {
        name
        # Queries can have comments!
        friends {
            name
        }
    }
}

```

```js

{
    "data": {
        "hero": {
            "name": "R2-D2",
            "friends": [
                {
                    "name": "Luke Skywalker"
                },
                {
                    "name": "Han Solo"
                },
                {
                    "name": "Leia Organa"
                }
            ]
        }
    }
}

```



## Arguments



```graphql

{
    human(id: "1000") {
        name
        height
    }
}

```

```js

{
    "data": {
        "human": {
            "name": "Luke Skywalker",
            "height": 1.72
        }
    }
}


```


```graphql

{
    human(id: "1000") {
        name
        height(unit: FOOT)
        # FOOT 英尺
        # https://en.wikipedia.org/wiki/Foot_(unit)
    }
}


{
    human(id: "1000") {
        name
        # height # default unit === METER
        # height(unit: METER) # 1.72
        height(unit: FOOT) # 5.6430448
        appearsIn
        friends {
            __typename
            name
            appearsIn
        }
        starships{
            id
        }
        friendsConnection{
            pageInfo{
                startCursor
                endCursor
                hasNextPage
            }
        }
    }
}

```

```js

{
    "data": {
        "human": {
            "name": "Luke Skywalker",
            "height": 5.6430448
        }
    }
}

```




## Aliases


```graphql

{
    empireHero: hero(episode: EMPIRE) {
        name
    }
    jediHero: hero(episode: JEDI) {
        name
    }
}

```

```js

{
    "data": {
        "empireHero": {
            "name": "Luke Skywalker"
        },
        "jediHero": {
            "name": "R2-D2"
        }
    }
}

```


## Fragments


```graphql

{
    leftComparison: hero(episode: EMPIRE) {
        ...comparisonFields
    }
    rightComparison: hero(episode: JEDI) {
        ...comparisonFields
    }
}

fragment comparisonFields on Character {
    name
    appearsIn
    friends {
        name
    }
}

```

```js

{
    "data": {
        "leftComparison": {
            "name": "Luke Skywalker",
            "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
            ],
            "friends": [
                {
                "name": "Han Solo"
                },
                {
                "name": "Leia Organa"
                },
                {
                "name": "C-3PO"
                },
                {
                "name": "R2-D2"
                }
            ]
        },
        "rightComparison": {
            "name": "R2-D2",
            "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
            ],
            "friends": [
                {
                "name": "Luke Skywalker"
                },
                {
                "name": "Han Solo"
                },
                {
                "name": "Leia Organa"
                }
            ]
        }
    }
}

```


## Variables 

> query


```graphql

query HeroNameAndFriends($episode: Episode) {
    hero(episode: $episode) {
        name
        friends {
            name
        }
    }
}

```

```json

{
    "episode": "JEDI"
}

```

```js

{
    "data": {
        "hero": {
            "name": "R2-D2",
            "friends": [
                {
                "name": "Luke Skywalker"
                },
                {
                "name": "Han Solo"
                },
                {
                "name": "Leia Organa"
                }
            ]
        }
    }
}

```


## Variable definitions


```graphql

($episode: Episode)

#  It lists all of the variables, prefixed by $, followed by their type, in this case `Episode`.

# All declared variables must be either scalars, enums, or input object types. 
# 所有声明的变量必须是`标量`，枚举或输入对象类型。

# Variable definitions can be optional or required. 
# In the case above, since there isn't an `!` next to the Episode type, it's optional.

```

```js

query HeroNameAndFriends($episode: Episode) {
    hero(episode: $episode) {
        name
        friends {
            name
        }
    }
}

```

## Default variables


```graphql

query HeroNameAndFriends($episode: Episode = "JEDI") {
    hero(episode: $episode) {
        name
        friends {
            name
        }
    }
}

# When default values are provided for all variables, you can call the query without passing any variables.

# If any variables are passed as part of the variables dictionary, they will override the defaults.

```

## Operation name


```md
# One thing we also saw in the example above is that our query has acquired an operation name. 
# Up until now, we have been using a `shorthand syntax` where we omit both the `query keyword` and the `query name`,

# For example, in JavaScript we can easily work only with anonymous functions, 
# but when we give a function a name, it's easier to track it down, debug our code, and log when it's called.

```

## Directives



```graphql

query Hero($episode: Episode, $withFriends: Boolean!) {
    hero(episode: $episode) {
        name
        friends @include(if: $withFriends) {
            name
        }
    }
}

# The core GraphQL specification includes exactly two directives, 
# which must be supported by any spec-compliant GraphQL server implementation:

# @include(if: Boolean) Only include this field in the result if the argument is true.
# @skip(if: Boolean) Skip this field if the argument is true.


```

```json

{
    "episode": "JEDI",
    "withFriends": false
}

{
    "episode": "JEDI",
    "withFriends": true
}

```


```js

{
    "data": {
        "hero": {
            "name": "R2-D2"
        }
    }
}


{
    "data": {
        "hero": {
            "name": "R2-D2",
            "friends": [
                {
                "name": "Luke Skywalker"
                },
                {
                "name": "Han Solo"
                },
                {
                "name": "Leia Organa"
                }
            ]
        }
    }
}

```

## Mutations

> mutation 

```graphql

mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
    createReview(episode: $ep, review: $review) {
        stars
        commentary
    }
}

# This can be useful for fetching the new state of an object after an update. 

# This is especially useful when mutating existing data, 
# for example, when incrementing a field, since we can mutate and query the new value of the field with one request.

# in this example, the review variable we passed in is not a `scalar`. 
# It's an `input object type`, a special kind of object type that can be passed in as an argument. 

```

```json

{
    "ep": "JEDI",
    "review": {
        "stars": 5,
        "commentary": "This is a great movie!"
    }
}

```

```js

{
    "data": {
        "createReview": {
            "stars": 5,
            "commentary": "This is a great movie!"
        }
    }
}

```

## Multiple fields in mutations 


```graphql

# A mutation can contain multiple fields, just like a query.
# There's one important distinction between queries and mutations, other than the name:

# While query fields are executed `in parallel`, mutation fields run `in series`, one after the other.

# This means that if we send two incrementCredits mutations in one request, 
# the first is guaranteed to finish before the second begins, 
# ensuring that we don't end up with a `race condition` with ourselves.

# 竞争条件

```


## Inline Fragments 

http://graphql.org/learn/schema/#interfaces
http://graphql.org/learn/schema/#union-types

```graphql

# If you are querying a field that returns an interface or a union type, 
# you will need to use `inline fragments` to access data on the `underlying concrete type`. 

# 如果要查询一个返回一个`接口`或一个`联合类型`的字段，则需要使用内联片段来访问`底层具体类型`的数据。


query HeroForEpisode($ep: Episode!) {
    hero(episode: $ep) {
        name
        ... on Droid {
            primaryFunction
        }
        ... on Human {
            height
        }
    }
}

```

```json

{
    "ep": "JEDI"
}

```


```js

{
    "data": {
        "hero": {
            "name": "R2-D2",
            "primaryFunction": "Astromech"
        }
    }
}

```

## Meta fields



```graphql

# GraphQL allows you to request `__typename`, a meta field, 
# at any point in a query to get the name of the object type at that point.

{
    search(text: "an") {
        __typename
        ... on Human {
            name
        }
        ... on Droid {
            name
        }
        ... on Starship {
            name
        }
    }
}

# In the above query, search returns a `union type` that can be one of three options.
# It would be impossible to `tell apart` the different types from the client without the `__typename` field.
# 分辨

# GraphQL services provide a few meta fields, the rest of which are used to expose the `Introspection` system.
# GraphQL服务提供了一些元字段，其余的用于公开“内省”系统。

# introspection, self-examination 内省 自我检查




```

```js

{
    "data": {
        "search": [
            {
                "__typename": "Human",
                "name": "Han Solo"
            },
            {
                "__typename": "Human",
                "name": "Leia Organa"
            },
            {
                "__typename": "Starship",
                "name": "TIE Advanced x1"
            }
        ]
    }
}

```


***



# Schemas and Types


http://graphql.org/learn/schema

> On this page, you'll learn all you need to know about the GraphQL type system and how it describes what data can be queried.

## Type system

```graphql

# the GraphQL query language is basically about selecting fields on objects. 

{
    hero {
        name
        appearsIn
    }
}

```


```js

{
    "data": {
        "hero": {
            "name": "R2-D2",
            "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
            ]
        }
    }
}

```



## Type language

```graphql

# GraphQL services can be written in any language. 

# We'll use the "GraphQL schema language" 
# it's similar to the query language, and allows us to talk about GraphQL schemas in a `language-agnostic` way.

# `与语言无关`
# agnostic 不可知

```

## Object types and fields

```graphql

type Character {
    name: String!
    appearsIn: [Episode]!
}

# `Character` is a `GraphQL Object Type`, meaning it's a type with some fields. 
# Most of the types in your schema will be object types.


# `name` and `appearsIn` are `fields` on the `Character` type.
# That means that name and appearsIn are the only fields that can appear in any part of a GraphQL query that operates on the Character type.


# `String` is one of the built-in `scalar types`
# these are types that resolve to a single scalar object, and can't have sub-selections in the query. 
# scalar types, 标量类型


# `String!` means that the field is `non-nullable`,
# meaning that the GraphQL service promises to always give you a value when you query this field.
# exclamation mark, 感叹号



```

## Arguments


```graphql

type Starship {
    id: ID!
    name: String!
    length(unit: LengthUnit = METER): Float
    # defined argument: `unit`
    # default value: `METER`
    # scalar types: `Float`
}

# All arguments are named.
# all arguments in GraphQL are passed by name specifically. 
# In this case, the `length` field has one defined argument, `unit`.

# Arguments can be either required or optional. 
# When an argument is optional, we can define a `default value` - if the unit argument is not passed, it will be set to `METER` by default.

```


## The Query and Mutation types

> Most types in your schema will just be normal object types, but there are two types that are special within a schema:

```graphql
# Every GraphQL service has a `query type` and may or may not have a `mutation type`. 

schema {
    query: Query
    mutation: Mutation
}

# These types are the same as a regular object type, but they are special because they define the entry point of every GraphQL query.

query {
    hero {
        name
    }
    droid(id: "2000") {
        name
    }
}

# That means that the GraphQL service needs to have a Query type with hero and droid fields:

type Query {
    hero(episode: Episode): Character
    droid(id: ID!): Droid
}


# Mutations work in a similar way 
# you define fields on the Mutation type, and those are available as the root mutation fields you can call in your query.

```


```js

{
    "data": {
        "hero": {
            "name": "R2-D2"
        },
        "droid": {
            "name": "C-3PO"
        }
    }
}


```

## Scalar types


```graphql
# A GraphQL object type has a name and fields, but at some point those fields have to resolve to some concrete data.
# 一个 GraphQL 对象类型具有名称和字段，但在某些时候，这些字段必须解析为某些具体数据。

{
    hero {
        name
        appearsIn
    }
}

# GraphQL comes with a set of default scalar types out of the box:

# Int: A signed 32‐bit integer.
# Float: A signed double-precision floating-point value.
# String: A UTF‐8 character sequence.
# Boolean: true or false.

# ID: The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache. 
# The ID type is serialized in the same way as a String; 
# however, defining it as an ID signifies that it is not intended to be human‐readable.

# In most GraphQL service implementations, there is also a way to specify custom scalar types.
# Then it's up to our implementation to define how that type should be serialized, deserialized, and validated.

`scalar Date`


```


```js

{
    "data": {
        "hero": {
            "name": "R2-D2",
            "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
            ]
        }
    }
}

```

## Enumeration types

> Enums, enumeration types are a special kind of scalar that is restricted to a particular set of allowed values. 

```graphql

enum Episode {
    NEWHOPE
    EMPIRE
    JEDI
}

# This means that wherever we use the type Episode in our schema, we expect it to be exactly one of NEWHOPE, EMPIRE, or JEDI.

# in a language like JavaScript with no enum support, these values might be internally mapped to a set of integers.
# 在没有枚举支持的JavaScript语言中，这些值可能在内部映射到一组整数。

```

## Lists and Non-Null 

```graphql

# But when you use the types in other parts of the schema, or in your query variable declarations, 
# you can apply additional `type modifiers` that affect validation of those values.


type Character {
    name: String!
    appearsIn: [Episode]!
}

# we're using a `String type` and marking it as `Non-Null` by adding an exclamation mark, `!` after the type name. 

# The Non-Null type modifier can also be used when defining arguments for a field,

query DroidById($id: ID!) {
    droid(id: $id) {
        name
    }
}

# We can use a `type modifier` to mark a type as a `List`, which indicates that this field will return an `array` of that type.
# In the schema language, this is denoted by wrapping the type in `square brackets`, [ and ]. 

# The Non-Null and List modifiers can be combined. 

myField: [String!]

# This means that the list itself can be null, but it can't have any null members. 

myField: null // valid
myField: [] // valid
myField: ['a', 'b'] // valid
myField: ['a', null, 'b'] // error

# defined a Non-Null List of Strings:

myField: [String]!

# This means that the list itself cannot be null, but it can contain null values:

myField: null // error
myField: [] // valid
myField: ['a', 'b'] // valid
myField: ['a', null, 'b'] // valid

# You can arbitrarily nest any number of Non-Null and List modifiers, according to your needs.
# 可以根据需要随意嵌套任意数量的非空和列表修饰符。

```

```json

{
    "data": {
        "droid": null
    }
}

```

```js

{
    "data": {
        "droid": null
    }
}


```

## Interfaces

> An `Interface` is an abstract type that includes a certain set of fields that a type must include to implement the interface.

```graphql

interface Character {
    id: ID!
    name: String!
    friends: [Character]
    appearsIn: [Episode]!
}

# Star Wars trilogy 星球大战三部曲
# This means that any type that implements Character needs to have these exact fields, with these arguments and return types.

type Human implements Character {
    id: ID!
    name: String!
    friends: [Character]
    appearsIn: [Episode]!
    starships: [Starship]
    totalCredits: Int
}

type Droid implements Character {
    id: ID!
    name: String!
    friends: [Character]
    appearsIn: [Episode]!
    primaryFunction: String
}

query HeroForEpisode($ep: Episode!) {
    hero(episode: $ep) {
        name
        primaryFunction
    }
}

query HeroForEpisode($ep: Episode!) {
    hero(episode: $ep) {
        name
        ... on Droid {
            primaryFunction
        }
    }
}

```

```json

{
    "ep": "JEDI"
}

```

```js

{
    "errors": [
        {
            "message": `
                Cannot query field \"primaryFunction\" on type \"Character\". 
                Did you mean to use an inline fragment on \"Droid\"?
            `,
            "locations": [
                {
                "line": 4,
                "column": 5
                }
            ]
        }
    ]
}

{
    "data": {
        "hero": {
        "name": "R2-D2",
            "primaryFunction": "Astromech"
        }
    }
}

```

## Union types

> `Union types` are very similar to `interfaces`, but they don't get to specify any common fields between the types

```graphql

# Note that members of a union type need to be concrete object types;
# you can't create a union type out of interfaces or other unions.

union SearchResult = Human | Droid | Starship


{
    search(text: "an") {
        ... on Human {
            name
            height
        }
        ... on Droid {
            name
            primaryFunction
        }
        ... on Starship {
            name
            length
        }
    }
}

{
    search {
        ... on Human {
            name
            height
        }
        ... on Droid {
            name
            primaryFunction
        }
        ... on Starship {
            name
            length
        }
    }
}

```


```js

{
    "data": {
        "search": [
            {
                "name": "Han Solo",
                "height": 1.8
            },
            {
                "name": "Leia Organa",
                "height": 1.5
            },
            {
                "name": "TIE Advanced x1",
                "length": 9.2
            }
        ]
    }
}


{
    "data": {
        "search": [
            {
                "name": "Luke Skywalker",
                "height": 1.72
            },// Human
            {
                "name": "Darth Vader",
                "height": 2.02
            },
            {
                "name": "Han Solo",
                "height": 1.8
            },
            {
                "name": "Leia Organa",
                "height": 1.5
            },
            {
                "name": "Wilhuff Tarkin",
                "height": 1.8
            },
            {
                "name": "C-3PO",
                "primaryFunction": "Protocol"
            },// Droid
            {
                "name": "R2-D2",
                "primaryFunction": "Astromech"
            },
            {
                "name": "Millenium Falcon",
                "length": 34.37
            },
            {
                "name": "X-Wing",
                "length": 12.5
            },
            {
                "name": "TIE Advanced x1",
                "length": 9.2
            },// Starship
            {
                "name": "Imperial shuttle",
                "length": 20
            }
        ]
    }
}
```


## Input types

> `input types` look exactly the same as regular object types, but with the keyword `input` instead of `type`:


```graphql

input ReviewInput {
    stars: Int!
    commentary: String
}

# This is particularly valuable in the case of `mutations`, where you might want to pass in a whole object to be created.

mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
    createReview(episode: $ep, review: $review) {
        stars
        commentary
    }
}

# The fields on an input object type can themselves refer to input object types,
# but you can't mix input and output types in your schema.

# Input object types also can't have arguments on their fields.

```

```json

{
    "ep": "JEDI",
    "review": {
        "stars": 5,
        "commentary": "This is a great movie!"
    }
}

```

```js

{
    "data": {
        "createReview": {
            "stars": 5,
            "commentary": "This is a great movie!"
        }
    }
}

```










# Introspection

http://graphql.org/learn/introspection/

```graphql

```

```json

```

```js

```


```graphql

```

```json

```

```js

```




```graphql

```

```json

```

```js

```



# Validation

http://graphql.org/learn/validation/

> By using the type system, it can be predetermined whether a GraphQL query is valid or not.

> 通过使用类型系统，可以预先确定 GraphQL 查询是否有效。

https://github.com/graphql/graphql-js/blob/master/src/__tests__/starWarsValidation-test.js

```graphql

{
    hero {
        ...NameAndAppearances
        friends {
            ...NameAndAppearances
            friends {
                ...NameAndAppearances
            }
        }
    }
}

fragment NameAndAppearances on Character {
    name
    appearsIn
}

# A fragment cannot refer to itself or create a cycle, as this could result in an unbounded result! 

{
    hero {
        ...NameAndAppearancesAndFriends
    }
}

fragment NameAndAppearancesAndFriends on Character {
    name
    appearsIn
    friends {
        ...NameAndAppearancesAndFriends
    }
}

# When we query for fields, we have to query for a field that exists on the given type.

# INVALID: favoriteSpaceship does not exist on Character
{
    hero {
        favoriteSpaceship
    }
}

# INVALID: hero is not a scalar, so fields are needed
{
    hero
}

# INVALID: name is a scalar, so fields are not permitted
{
    hero {
        name {
            firstCharacterOfName
        }
    }
}

# That query is invalid, because primaryFunction is not a field on Character. 
# By setting up a fragment defined on Droid and including it, 
# we ensure that we only query for primaryFunction where it is defined.

{
    hero {
        name
        ...DroidFields
    }
}

fragment DroidFields on Droid {
    primaryFunction
}

# `named fragments` were valuable above when we used them multiple times, but we're only using this one once.
# Instead of using a named fragment, we can use an `inline fragment`;

{
    hero {
        name
        ... on Droid {
            primaryFunction
        }
    }
}


```


```js

{
    "data": {
        "hero": {
            "name": "R2-D2",
            "appearsIn": [
                "NEWHOPE",
                "EMPIRE",
                "JEDI"
            ],
            "friends": [
                {
                    "name": "Luke Skywalker",
                    "appearsIn": [
                        "NEWHOPE",
                        "EMPIRE",
                        "JEDI"
                    ],
                    "friends": [
                        {
                            "name": "Han Solo",
                            "appearsIn": [
                                "NEWHOPE",
                                "EMPIRE",
                                "JEDI"
                            ]
                        },
                        {
                            "name": "Leia Organa",
                            "appearsIn": [
                                "NEWHOPE",
                                "EMPIRE",
                                "JEDI"
                            ]
                        },
                        {
                            "name": "C-3PO",
                            "appearsIn": [
                                "NEWHOPE",
                                "EMPIRE",
                                "JEDI"
                            ]
                        },
                        {
                            "name": "R2-D2",
                            "appearsIn": [
                                "NEWHOPE",
                                "EMPIRE",
                                "JEDI"
                            ]
                        }
                    ]
                },
                {
                    "name": "Han Solo",
                    "appearsIn": [
                        "NEWHOPE",
                        "EMPIRE",
                        "JEDI"
                    ],
                    "friends": [
                        {
                            "name": "Luke Skywalker",
                            "appearsIn": [
                                "NEWHOPE",
                                "EMPIRE",
                                "JEDI"
                            ]
                        },
                        {
                            "name": "Leia Organa",
                            "appearsIn": [
                                "NEWHOPE",
                                "EMPIRE",
                                "JEDI"
                            ]
                        },
                        {
                            "name": "R2-D2",
                            "appearsIn": [
                                "NEWHOPE",
                                "EMPIRE",
                                "JEDI"
                            ]
                        }
                    ]
                },
                {
                    "name": "Leia Organa",
                    "appearsIn": [
                        "NEWHOPE",
                        "EMPIRE",
                        "JEDI"
                    ],
                    "friends": [
                        {
                            "name": "Luke Skywalker",
                            "appearsIn": [
                                "NEWHOPE",
                                "EMPIRE",
                                "JEDI"
                            ]
                        },
                        {
                            "name": "Han Solo",
                            "appearsIn": [
                                "NEWHOPE",
                                "EMPIRE",
                                "JEDI"
                            ]
                        },
                        {
                            "name": "C-3PO",
                            "appearsIn": [
                                "NEWHOPE",
                                "EMPIRE",
                                "JEDI"
                            ]
                        },
                        {
                            "name": "R2-D2",
                            "appearsIn": [
                                "NEWHOPE",
                                "EMPIRE",
                                "JEDI"
                            ]
                        }
                    ]
                }
            ]
        }
    }
}



{
    "errors": [
        {
            "message": "Cannot spread fragment \"NameAndAppearancesAndFriends\" within itself.",
            "locations": [
                {
                    "line": 11,
                    "column": 5
                }
            ]
        }
    ]
}

```


# Execution

http://graphql.org/learn/execution/

```graphql

```

```json

```

```js

```



# BEST PRACTICES

## GraphQL Best Practices

> The GraphQL specification is intentionally silent on a handful of important issues facing APIs such as dealing with the network, authorization, and pagination.

http://graphql.org/learn/best-practices/


http://graphql.org/learn/thinking-in-graphs/

![](http://graphql.org/img/diagrams/business_layer.png)

http://graphql.org/learn/serving-over-http/

http://graphql.org/learn/authorization/

http://graphql.org/learn/pagination/

http://graphql.org/learn/caching/





# blog

http://graphql.org/blog/






# [MIT](https://opensource.org/licenses/MIT) LICENSE

Copyright © 2017-present xgqfrms

Copyright © 2017-forever xgqfrms





