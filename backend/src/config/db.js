import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const DB = process.env.MONGODB_URI;
        
        await mongoose.connect(DB);
        console.log("mongodb successfully connected");
    }catch(error){
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDB;