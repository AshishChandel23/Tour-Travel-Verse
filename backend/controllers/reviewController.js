import Review from "../models/Review.js";
import Tour from "../models/Tour.js"

export const addReview = async(req, res)=>{
    const tourId = req.params.tourId;
    const newReview = new Review({...req.body});
    try {
        const savedReview = await newReview.save();
        //after creating a new review then update the review array for that tour {tourId}
        await Tour.findByIdAndUpdate(tourId, {
            $push : {reviews : savedReview._id}
        });
        return res.status(500).json({
            error: true,
            message: "Review Submitted...!",
            data: savedReview
        }); 
    } catch (error) {
        console.log("Add Review Error ::>> ",error);
        return res.status(500).json({
            error: true,
            message: error.message
        });
    }
};