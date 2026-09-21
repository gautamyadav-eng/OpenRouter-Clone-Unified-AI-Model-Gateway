import mongoose from "mongoose";

const apiKeySchema = new mongoose.Schema({
    name:{type:String, required : true},
    keyHash : { type: String, required: true},
    isActive: {type:Boolean, default: true},
    createdAt:{type: Date, default: Date.now},
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:"User", 
        required: true
    }

});

const ApiKey = mongoose.model("ApiKey", apiKeySchema);

export default ApiKey;