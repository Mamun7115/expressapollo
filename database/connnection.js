import mongoose from "mongoose"


export default async function connectMongoDB(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017")
        console.log("MongoDB connected")
    } catch (error) {
        console.error("MONGODB Failed:", error)
    }
}
