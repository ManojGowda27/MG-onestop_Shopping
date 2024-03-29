const User = require("../models/User");
const { verifyToken, verifyTokenandAuthorization, verifyTokenandAdmin } = require("./verifyToken");

const router = require("express").Router();

// Update

router.put("/:id", verifyTokenandAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.Pass_Sec).toString();
    }

    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true}
        );
        res.status(200).json(updateUser);   
    } catch(err){
        res.status(500).json(err) 
    }

})

// Delete

router.delete("/:id", verifyTokenandAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted") 
    } catch(err){
        res.status(500).json(err);
    }
})

// Get User

router.get("/find/:id", verifyTokenandAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json({others});        
    }   catch(err){
        res.status(500).json(err);
    }
})

// Get All User

router.get("/", verifyTokenandAdmin, async (req, res) => {
    
    const query = req.query.new
    
    try {
        const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();
        res.status(200).json({users});        
    }   catch(err){
        res.status(500).json(err);
    }
})

// Get User Stats

router.get("/stats", verifyTokenandAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() -1));

    try {

        const data = await User.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {
                $project: {
                    month: {$month: "$createdAt"}
                }
            },
            {
                $group: {
                    _id : "$month",
                    total: {$sum: 1}
                }
            }
        ]);
        res.status(200).json(data);
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router;