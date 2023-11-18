import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import JWT from "jsonwebtoken";

//register user
export const register = async(req, res) => {

    //encrypt password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const newUser = new User({ 
            username : req.body.username,
            email : req.body.email,
            password : hash,
            photo : req.body.photo,
        });
        const savedUser = await newUser.save();
        res.status(200).json({
            error : false,
            message : "User Registered Successfully...!",
            user : savedUser
        });
    } catch (error) {
        console.log("Register User ::>> ",error);
        res.status(500).json({
            error: true,
            message: error.message
        })
    }
};
//login user
export const login = async(req, res) => {
    const email = req.body.email;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                error : false,
                message : `Invalid Credentials with email : ${email}`,
            });
        }
        //if user exist then check password is matched or not
        const isPasswordMatched = await bcrypt.compare(req.body.password, user.password); 
        if(!isPasswordMatched){
            res.status(401).json({
                error : false,
                message : `Invalid Credentials Email or Password...!`,
            })
            return;
        }

        const { password, role, ...rest } = user._doc;
        //generate jwt token
        const token = JWT.sign({ id:user._id, role:user.role }, 
                            process.env.JWT_SECRET_KEY,
                            { expiresIn: '15d' });
        return  res.cookie('accessToken', token, {httpOnly : true, expires : token.expiresIn})
                   .status(200)
                   .json({
                        error : false,
                        message : "Login Successfully...!",
                        token,
                        data: {...rest},
                        role,
                    })
    } catch (error) {
        console.log("Login User ::>> ",error);
        res.status(500).json({
            error: true,
            message: error.message
        })
    }
};