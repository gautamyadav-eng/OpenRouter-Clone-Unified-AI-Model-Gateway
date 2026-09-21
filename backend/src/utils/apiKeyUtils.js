import {randomBytes, createHash} from "crypto";


const randomSecretKey = async () => {
    const secret = await randomBytes(32);
    return secret.toString("hex");
}

const hashApiKey = (apiKey) =>{
    const hash =  createHash("sha256");
    hash.update(apiKey);
    return hash.digest("hex");
}

export {randomSecretKey, hashApiKey};