const Item = require("../models/item");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const item = await new Item(req.body).save();
        res.send(item);
    } catch (error) {
        res.send(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const items = await Item.find();
        res.send(items);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const item = await Item.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(item);
    } catch(error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        res.send(item);
    } catch(error) {
        res.send(error);
    }
});

module.exports = router;