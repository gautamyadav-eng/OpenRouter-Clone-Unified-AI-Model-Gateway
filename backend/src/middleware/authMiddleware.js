import jwt from "jsonwebtoken";

const tokenMiddleware = async (req, res, next) => {
    try{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            success:false,
            message:"Token is missing"
        });
    }

    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY
    );

    req.user = decode
    next();
}catch(error){
    console.log("token error", error.message);
    return res.status(501).json({
        success:false,
        message:"Invalid and expired token"
    });
}
}

export default tokenMiddleware;