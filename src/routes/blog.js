const router = require('express').Router();
const Blog = require('../models/Blog')
const bodyparser = require("body-parser");
router.use(bodyparser.json());

router.get("/blog", async (req, res) => {

    try {
        const { page, search } = req.query;

        console.log(req.query)
        const users = await Blog.find({ topic: search }).limit(parseInt(page));
        res.json({
            status: "Success",
            users: users
        })
    } catch (e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

router.post("/blog", async (req, res) => {
    try {
        const user = await Blog.create(req.body)
        res.json({
            status: "Success",
            user
        })
    }
    catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
});

router.put('/blog/:id', async (req, res) => {
    console.log(req.params)

    try {
        let user=await Blog.updateOne({_id:req.params.id}, req.body)
        let particular=await Blog.find({_id:req.params.id})
        res.json({status:"success",
                   result:particular
                })
        console.log(particular)
    }
    catch (e) {
        res.json({ status: "Failed", result: e.message })
    }

});

router.delete('/blog/:id', async (req, res) => {
    console.log(req.params)
    try {
        const delUser = await Blog.find({ "_id": req.params.id });
        const user = await Blog.deleteOne({ "_id": req.params.id });
        console.log(user)
        res.json({
            status: "success",
            delUser
        })

    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

module.exports = router;