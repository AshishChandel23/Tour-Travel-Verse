import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save();
        res.status(200).json({
            error : false,
            message : "Tour Registered Successfully...!",
            tour : savedTour
        })
    } catch (error) {
        console.log("Create Tour ::>> ",error);
        res.status(500).json({
            error: true,
            message: error.message
        })
    }
};

export const updateTour = async (req, res) => {
    try {
        const id = req.params.id;
        const getTour = await Tour.findById(id);
        if(!getTour){
            res.status(200).json({
                error : false,
                message : `There is no Tour found for this id : ${id}`,
                tour : {}
            })
            return;
        }
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set : req.body
        },
        {new:true});

        res.status(200).json({
            error : false,
            message : "Tour Updated Successfully...!",
            tour : updatedTour
        })
    } catch (error) {
        console.log("Update Tour ::>> ",error);
        res.status(500).json({
            error: true,
            message: error.message
        })
    }
};

export const deleteTour = async (req, res) => {
    try {
        const id = req.params.id;
        const getTour = await Tour.findById(id);
        if(!getTour){
            res.status(200).json({
                error : false,
                message : `There is no Tour found for this id : ${id}`,
                tour : {}
            })
            return;
        }
        const deletedTour = await Tour.findByIdAndDelete(id);
        res.status(200).json({
            error : false,
            message : "Tour Deleted Successfully...!",
            tour : deletedTour
        })
    } catch (error) {
        console.log("Delete Tour ::>> ",error);
        res.status(500).json({
            error: true,
            message: error.message
        })
    }
};

export const getSingleTour = async (req, res) => {
    try {
        const id = req.params.id;
        const getTour = await Tour.findById(id).populate("reviews");
        if(!getTour){
            res.status(200).json({
                error : false,
                message : `There is no Tour found for this id : ${id}`,
                tour : {}
            })
            return;
        }
        res.status(200).json({
            error : false,
            message : `Tour found Successfully... with id : ${id}`,
            tour : getTour
        })
    } catch (error) {
        console.log("Get Single Tour ::>> ",error);
        res.status(500).json({
            error: true,
            message: error.message
        })
    }
};

export const getAllTour = async (req, res) => {
    const page = parseInt(req.query.page);

    console.log("Page ::>> ",page);

    try {
        const getTours = await Tour.find({})
        .populate("reviews")
        .skip(page * 8)
        .limit(8);
        res.status(200).json({
            error : false,
            count : getTours.length,
            message : getTours.length==0 ? "Empty" : "Tours found Successfully...!",
            tour : getTours
        });
    } catch (error) {
        console.log("Get All Tour ::>> ",error);
        res.status(404).json({
            error: true,
            message: error.message
        });
    }
};

export const getTourBySearch = async(req, res)=>{
    //here 'i' means Case-insensitive  
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);
    console.log("City ::>>-- ",city);
    console.log("Distance ::>> ",distance);
    console.log("MaxGroupSize ::>> ",maxGroupSize);
    try {
        // gte means greater than equal
        const tours = await Tour.find({ city,
                                        distance : {$gte : distance},
                                        maxGroupSize : {$gte : maxGroupSize}}).populate("reviews");
        
        res.status(200).json({
            error : false,
            
            message : tours.length==0 ? "Empty" : "Tours found Successfully...!",
            tour : tours });

    } catch (error) {
        console.log("Search Tour ::>> ",error);
        res.status(404).json({
            error: true,
            message: error.message
        });
    }
};

export const getFeaturedTours = async (req, res) => {

    try {
        const getTours = await Tour.find({featured: true}).populate("reviews").limit(8);
        res.status(200).json({
            error : false,
            message : getTours.length==0 ? "Empty" : "Tours found Successfully...!",
            tour : getTours
        });
    } catch (error) {
        console.log("Get All Tour ::>> ",error);
        res.status(404).json({
            error: true,
            message: error.message
        });
    }
};

export const getTourCount = async (req, res) => {

    try {
        const countTour = await Tour.estimatedDocumentCount();
        res.status(200).json({
            error : false,
            message : countTour.length==0 ? "Empty" : "Tours Count Successfull...!",
            tour : countTour
        });
    } catch (error) {
        console.log("Get All Tour Count ::>> ",error);
        res.status(404).json({
            error: true,
            message: error.message
        });
    }
};