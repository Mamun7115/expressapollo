import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose"

const MONGO_URI= process.env.MONGO_URI

export default async function connectMongoDB(){
    try {
        await mongoose.connect(MONGO_URI)
        console.log("MongoDB connected")
    } catch (error) {
        console.error("MONGODB Failed:", error)
    }
}
