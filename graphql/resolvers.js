import { User, Post, Comment } from "../database/models/Model.js"

export const resolvers = {
    Query: {
        users: async ()=>{
            const users = await User.find();

            return users.map(user=>{
                return({
                    id:user._id,
                    name:user.name, 
                    email:user.email,
                    password:user.password,
                    createdAt:user.createdAt.toISOString(),
                    updateAt:user.updateAt.toISOString()
                })
                
            })
        },
        posts: async()=>{
            const posts = await Post.find()

            return posts.map(post=>{
                return({
                    userId:post.id
                })
            })

            // test ended
        }
    }
}

