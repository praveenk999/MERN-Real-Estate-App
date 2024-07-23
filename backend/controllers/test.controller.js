import jwt from "jsonwebtoken"

export const shouldlogedin = async(req,res)=>{
        console.log(req.userId);
        res.status(200).json({message:"You are Authenticated"})
}

export const shouldadmin =async (req,res)=>{
    const token = req.cookies.token;

    if(!token) return res.status(401).json({message:"Not Authenticated"});

    jwt.verify(token,process.env.JWT_SECRET_KEY,async(err,payload)=>{
        if(err) return res.status(403).json({message:"Token is not valid"});
        if(!payload.isadmin) {
            res.status(403).json({message:"Not Autharized Not Admin"});
        }
    })

    res.status(200).json({message:"You are Authenticated user admin"})

}