import Booking from "../models/Booking.js";

export const addBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
    try{
        const savedBooking = await newBooking.save();
        return res.status(200).json({
            error : false,
            message : "Booking added Successfully...!",
            data : savedBooking
        })
    } catch (error) {
        console.log("Add Booking Error ::>> ",error);
        return res.status(500).json({
            error: true,
            message: error.message
        });
    }
};

export const getBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const getBookingDetails = await Booking.findById(id);
        if(!getBookingDetails){
            res.status(404).json({
                error : false,
                message : `There is no booking found for this id : ${id}`,
                data :  {}
            })
            return;
        }
        res.status(200).json({
            error : false,
            message : `Booking found Successfully... with id : ${id}`,
            data : getBookingDetails
        })
    } catch (error) {
        console.log("Get Booking Error ::>> ",error);
        res.status(500).json({
            error: true,
            message: error.message
        })
    }
};

export const getAllBooking = async (req, res) => {
    try {
        const getBookingDetails = await Booking.find({});
        res.status(200).json({
            error : false,
            message : getBookingDetails.length==0 ? "Empty" : "Booking found Successfully...!",
            data : getBookingDetails
        })
    } catch (error) {
        console.log("Get All Booking Error ::>> ",error);
        res.status(500).json({
            error: true,
            message: error.message
        })
    }
};