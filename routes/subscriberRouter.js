const express = require("express");
const router = express.Router();
const Subscriber = require('../models/db')

//getting all
router.get("/",async(req, res) => {
   try {
    const subscribers = await Subscriber.find();
    res.json(subscribers)
   } catch (error) {
    res.status(500).json({message:error.message})
    
   }
  
});

//getting one
router.get("/:id", async (req, res) => {
  res.send(req.params.id);
});
//creating one
router.post("/", async (req, res) => {
    const subscriber = new Subscriber({
        name:req.body.name,
        subscribedToChannel:req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber)
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
});

//updatind one
router.patch("/", async (req, res) => {});

//deleting one
router.delete("/", async (req, res) => {});

module.exports = router;