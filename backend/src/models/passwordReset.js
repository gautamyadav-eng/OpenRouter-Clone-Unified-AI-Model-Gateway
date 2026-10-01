import mongoose from "mongoose";

const passwordResetSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    otpHash:{type:String, required : true},
    expiredAt:{type:Date, required: true},

    verified:{type:Boolean, required: true}
},
    {timestamps: true}
);

export default mongoose.model("PasswordReset", passwordResetSchema);