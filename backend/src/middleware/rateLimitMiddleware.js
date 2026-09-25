
const requestCount =new Map();

const LIMIT = 10;
const WINDOW = 60 *1000;

const rateLimitMiddleware = (req, res, next) => {
    const apiKey = req.apiKey._id.toString();

    const currTime = Date.now();
    const requestData = requestCount.get(apiKey);

    if(!requestData){
        requestCount.set(apiKey, {
            count: 1,
            startTime : currTime
        });
        return next();
    }

    const passedTime = currTime - requestData.startTime;
    if(!passedTime >= WINDOW){
        requestCount.set(apiKey, {
            count :1,
            startTime : currTime
        });
    }
    if(requestData.count >= LIMIT){
        return res.status(429).json({
            success:false,
            message:"Too many requests, please try again leter"
        });
    }
    requestData.count++;
    next();
}

export default rateLimitMiddleware;
