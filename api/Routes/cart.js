const Cart = require("../models/Cart")
const { verifyToken, verifyTokenandAuthorization, verifyTokenandAdmin } = require("./verifyToken");

const router = require("express").Router();

// Create

router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    } catch(err) {
        res.status(500).json(err)
    }
})

// Update

router.put("/:id", verifyTokenandAuthorization, async (req, res) => {
    
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true}
        );
        res.status(200).json(updatedCart);   
    } catch(err){
        res.status(500).json(err) 
    }

})

// Delete

router.delete("/:id", verifyTokenandAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been cleared") 
    } catch(err){
        res.status(500).json(err);
    }
})

// Get User Cart

router.get("/find/:userId", verifyTokenandAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json({cart});        
    }   catch(err){
        res.status(500).json(err);
    }
})

// Get All Carts

router.get("/", verifyTokenandAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router