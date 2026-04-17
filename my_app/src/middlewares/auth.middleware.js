//auth middleware

function auth(req,res,next){
    //step 1 : authorization infomation read

    const authHeader = req.headers.authorization;

    //step-2
    if(!authHeader){
        return res.status(401).json({msg:"Token not found"})
    }

    
}