import Users from "../models/Users.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


export const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;

        const existingUser = await Users.findOne({email});

        if(existingUser){
            return res.status(409).json({
                success: false,
                message:"User already exits"
            });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Users({
            name, 
            email, 
            password:hashedPassword
        });

        await newUser.save();

        res.status(200).json({
            success:"true",
            message:"User Register successfully"
        });

    }catch(error){
        console.log("Register error", error);
        return res.status(500).json({
            success:false,
            message:"Internal Server error"
        })
    }

}

export const loginUsers = async (req, res) =>{
    try{
    const {email, password} = req.body;
    const user = await Users.findOne({email});
    if(!user){
        return res.status(401).json({
            success:false,
            message:"Invalid email and password"
        });
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if(!isPassword){
        return res.status(401).json({
            success:false,
            message:"Invalid password, please try again."
        });
    }
    const token = jwt.sign(
        {
            userId: user._id,
            email : user.email
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"1d"
        }
    );

    res.status(200).json({
        success:true,
        message:"Login Successfully",
        token
    });
    }catch(error){
        console.log("Login Error", error.message);
        return res.status(500).json({
            success:false,
            message:"Internal Server error"
        });
    }
};
