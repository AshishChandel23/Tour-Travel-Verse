import User from "../models/User.js";

export const createUser = async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        return res.status(200).json({
            error : false,
            message : "User Registered Successfully...!",
            user : savedUser
        })
    } catch (error) {
        console.log("Create User ::>> ",error);
        return res.status(500).json({
            error: true,
            message: error.message
        })
    }
};

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const getUser = await User.findById(id);
        if(!getUser){
            res.status(200).json({
                error : false,
                message : `There is no User found for this id : ${id}`,
                user : {}
            })
            return;
        }
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set : req.body
        },
        {new:true});

        return res.status(200).json({
            error : false,
            message : "User Updated Successfully...!",
            user : updatedUser
        })
    } catch (error) {
        console.log("Update User ::>> ",error);
        return res.status(500).json({
            error: true,
            message: error.message
        })
    }
};

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const getUser = await User.findById(id);
        if(!getUser){
            res.status(200).json({
                error : false,
                message : `There is no User found for this id : ${id}`,
                user : {}
            })
            return;
        }
        const deletedUser = await User.findByIdAndDelete(id);
        return res.status(200).json({
            error : false,
            message : "User Deleted Successfully...!",
            user : deletedUser
        })
    } catch (error) {
        console.log("Delete User ::>> ",error);
        return res.status(500).json({
            error: true,
            message: error.message
        })
    }
};

export const getSingleUser = async (req, res) => {
    try {
        const id = req.params.id;
        const getUser = await User.findById(id);
        if(!getUser){
            res.status(200).json({
                error : false,
                message : `There is no User found for this id : ${id}`,
                user : {}
            })
            return;
        }
        return res.status(200).json({
            error : false,
            message : `User found Successfully... with id : ${id}`,
            user : getUser
        })
    } catch (error) {
        console.log("Get Single User ::>> ",error);
        return res.status(500).json({
            error: true,
            message: error.message
        })
    }
};

export const getAllUser = async (req, res) => {
    try {
        const getUsers = await User.find({});
        return res.status(200).json({
            error : false,
            count : getUsers.length,
            message : getUsers.length==0 ? "Empty" : "Users found Successfully...!",
            user : getUsers
        });
    } catch (error) {
        console.log("Get All User ::>> ",error);
        return res.status(404).json({
            error: true,
            message: error.message
        });
    }
};