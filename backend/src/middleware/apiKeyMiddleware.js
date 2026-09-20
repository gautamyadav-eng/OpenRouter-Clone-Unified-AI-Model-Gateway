const apiKeyMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            success:false,
            message:"API key is missing"
        });
    }
    const parts = authHeader.split(" ");
    if(parts.length !== 2 || parts[0] !== "Bearer" || !parts[1] ){
        return res.status(401).json({
            success: false,
            message:"Invalid authorization format. use Bearer<API_KEY>"
        });
    }

    const apiKey = parts[1];

    console.log("Api key recevide", Boolean(apiKey));

   next();
}
export default apiKeyMiddleware;