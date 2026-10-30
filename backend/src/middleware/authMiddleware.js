import jwt from "jsonwebtoken";

const tokenMiddleware = async (req, res, next) => {
    try{
    const authHeader = req.headers.authorization;

    const tokenFromHeader = authHeader?.startsWith("Bearer")? authHeader.split(" ")[1] : null;
    
    const token = req.cookies.openrouter_token || tokenFromHeader;

    if(!token){
        return res.status(401).json({
            success:false,
            message:"Login token is missing"
        });
    }
    const decode = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY
    );

    req.user = decode
    next();
}catch(error){
    console.log("token error", error.message);
    return res.status(401).json({
        success:false,
        message:"Invalid and expired token"
    });
}
}

export default tokenMiddleware;