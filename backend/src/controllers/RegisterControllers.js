import Users from "../models/Users.js";
import bcrypt from "bcrypt"


const registerUser = async (req, res) => {
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
 export default registerUser;