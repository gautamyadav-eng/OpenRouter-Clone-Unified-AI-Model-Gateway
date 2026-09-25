import mongoose from "mongoose";

const requestLogSchema = new mongoose.Schema({
    apiKeyId : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"ApiKey",
        required:true
    },
    provider:{
        type:String,
        required: true
    },
    model:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    responseTime:{
        type:Number,
        required : true
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
});
const RequestLog = mongoose.model("RequestLog", requestLogSchema);
export default RequestLog;