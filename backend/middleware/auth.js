import jwt  from "jsonwebtoken"

const authMidlleware = async (req,res,next) => {
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false,message:"Not Authorized Login agin"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userID = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Erorr"})
        
    }

} 

export default authMidlleware;