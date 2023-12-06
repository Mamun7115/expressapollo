import mongoose from "mongoose"

const UsersSchema = new mongoose.Schema({
    name:String, 
    email:String, 
    password:String, 
    createdAt:{
        type:Date, 
        default:Date.now
    },
    updateAt:{
        type:Date, 
        default:Date.now
    }

})


const PostsSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }, 
    title:String, 
    content:String, 
    createdAt:{
        type:Date, 
        default:Date.now
    }, 
    updatedAt:{
        type:Date, 
        default:Date.now
    }

})


const CommentsSchema = new mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }, 
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }, 
    body:String, 
    createdAt:{
        type:Date, 
        default:Date.now
    }, 
    updateAt:{
        type:Date, 
        default:Date.now
    }
})


const User = mongoose.model("Users",UsersSchema )
const Post = mongoose.model("Posts", PostsSchema)
const Comment = mongoose.model("Comments", CommentsSchema)


export default {User, Post, Comment}