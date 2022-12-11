const express = require('express')
const app = express();
const bodyParser = require("body-parser");

//app.use(express.urlencoded());
// // Parse JSON bodies (as sent by API clients)
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.post("/add", (req, res) => {
    let sum = Number(req.body.num1) + Number(req.body.num2);
    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
        return res.json(
            {
                "status": "error",
                "message": "Invalid data types"
            }
        )
    }
    else if (req.body.num1 < -1000000 || req.body.num2 < -1000000 || sum < -1000000) {
        return res.json(
            {
                "status": "error",
                "message": "UnderFlow"
            })
    }
    else if (sum > 1000000) {
        return res.json(
            {
                "status": "error",
                "message": "OverFlow"
            }
        )
    }
    else {
        res.json({
            "status": "Success",
            "message": "the sum of given two numbers",
            "result": sum
        })
    }
});
app.post("/sub", (req, res) => {
    let sub = Number(req.body.num1) - Number(req.body.num2);
    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
        return res.json(
            {
                "status": "error",
                "message": "Invalid data types"
            }
        )
    }
    else if (req.body.num1 < -1000000 || req.body.num2 < -1000000 || sub < -1000000) {
        return res.json(
            {
                "status": "error",
                "message": "UnderFlow"
            })
    }
    else if (sub > 1000000) {
        return res.json(
            {
                "status": "error",
                "message": "OverFlow"
            }
        )
    }
    else {
        res.json({
            "status": "Success",
            "message": "the difference of given two numbers",
            "result": sub
        })
    }
})
app.post("/mul", (req, res) => {
    let mul = Number(req.body.num1) * Number(req.body.num2);
    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
        return res.json(
            {
                "status": "error",
                "message": "Invalid data types"
            }
        )
    }
    else if (req.body.num1 < -1000000 || req.body.num2 < -1000000 || mul < -1000000) {
        return res.json(
            {
                "status": "error",
                "message": "UnderFlow"
            })
    }
    else if (mul > 1000000) {
        return res.json(
            {
                "status": "error",
                "message": "OverFlow"
            }
        )
    }
    else {
        res.json({
            "status": "Success",
            "message": "The product of given numbers",
            "result": mul
        })
    }
})
app.post("/div", (req, res) => {

    let div = Number(req.body.num1) / Number(req.body.num2);

    if (isNaN(req.body.num1) || isNaN(req.body.num2)) {
        return res.json(
            {
                "status": "error",
                "message": "Invalid data types"
            }
        )
    }
    else if (req.body.num1 < -1000000 || req.body.num2 < -1000000 || div < -1000000) {
        return res.json(
            {
                "status": "error",
                "message": "UnderFlow"
            })
    }
    else if (req.body.num2 == 0) {
        return res.json(
            {
                "status": "error",
                "message": "Cannot divide by zero"
            })
    }
    else if ( div > 1000000) {
        return res.json(
            {
                "status": "error",
                "message": "OverFlow"
            }
        )
    }
   
    else {
        res.json({
            "status": "Success",
            "message": "The division of given numbers",
            "result": div
        })

    }
})

app.post('/*', (req, res) => {
    res.json({
        "status": "failure"
    })
})


app.listen(3000, () => console.log(`Server is up!`))
module.exports = app;