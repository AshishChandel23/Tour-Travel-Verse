import JWT from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken = async(req, res, next)=>{

    const token = req.cookies.accessToken;
    if(!token){
        return next(createError(401,"your are not authenticated...!"))
    }
    JWT.verify(token, process.env.JWT_SECRET_KEY, (err, user)=>{
        if(err){
            return next(createError(403, "Token is not valid...!"))
        }
        // console.log("14 user::>> ",user);
        req.user = user;
        next();
    });
}

export const verifyUser = async(req, res, next)=>{
    console.log("21>>>",req.params)
    verifyToken(req, res, (err)=>{
        if(err) return next(err);
        if(req.user.id === req.params.id || req.user.role==='Admin'){
            console.log("14 user::>> ",req.user);
            next();
        }
        else{
            return next(createError(403, "you are not authorized user...!"))
        }
    });
}

export const verifyAdmin = async(req, res, next)=>{
    verifyToken(req, res, (err)=>{
        if(err) return next(err);
        if(req.user.role==='Admin'){
            next();
        }
        else{
            return next(createError(403, "you are not authorized ...!"))
        }
    });
}