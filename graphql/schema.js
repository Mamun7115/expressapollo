export const typeDefs = `#graphql

type User {
    name:String
}

type Query {
    users:[User]
}

`
// games and game = games are multiple array and then game is singler one and returns on ID reveived from frontend
// data types for graphql =  int, string, boolean , ID, float and can be more look at the docs