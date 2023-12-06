// load env variables
import dotenv from "dotenv"
dotenv.config()

import {ApolloServer} from "@apollo/server"
import {expressMiddleware} from "@apollo/server/express4"
import express from "express"
import cors from "cors"
import connectMongoDB from "./database/connnection.js"
import { resolvers } from "./graphql/resolvers.js"
import { typeDefs } from "./graphql/schema.js"

const app = express();
const PORT = process.env.PORT

// Validate required environment variables
if(!PORT){
    console.error("Please provide a PORT in the .env file")
    process.exit(1)
}

// Connect to MongoDB
connectMongoDB();

// Setup Apollo Server
const apolloServer  = new ApolloServer({
    typeDefs,
    resolvers
})


await apolloServer.start().then(()=>{
    console.log("Apollo loaded")
}).catch((err)=>{
    console.error("Apollo failed", err)
})

// Middlewares
app.use(express.json(),(req,res,next)=>{
    next();
})

app.use("/graphql", cors(), expressMiddleware(apolloServer), (req,res,next)=>{
    next();
}); // 


// Routes
app.get("/",(req,res)=>{
    res.send("Express alive")
})




// express started
app.listen(PORT,()=>{
    console.log(`Express server running on ${PORT} with graphql listening at /graphql`)
})
