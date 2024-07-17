import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.Mongodb_url}/${DB_NAME}`)
        console.log(`\n mongoDB connected !! DB Host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("MONGODB connection FAILED :-",error)
        process.exit(1)
    }
}

export default connectDB