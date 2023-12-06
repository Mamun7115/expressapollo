export const typeDefs = `#graphql

type User {
    id:String!
    name:String!
    email:String!,
    password:String!, 
    createdAt:String!, 
    updateAt:String!
}

type Post {
    userId:String!, 
    title:String!,
    content:String!, 
    createdAt:String!, 
    updateAt:String!
}

type Comment {
    postId:String!, 
    userId:String!,
    body:String!,
    createdAt:String!,
    updateAt:String!
}

type Query {
    users:[User],
    posts:[Post]
    comments:[Comment],
    

}

`
// games and game = games are multiple array and then game is singler one and returns on ID reveived from frontend
// data types for graphql =  int, string, boolean , ID, float and can be more look at the docs