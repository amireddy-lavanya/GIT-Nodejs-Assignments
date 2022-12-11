const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080;
const data = require("./InitialData");
//app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let studentId = data.length;

app.get('/api/student', (req, res) => {
    res.json(data);

})

app.get('/api/student/:id', (req, res) => {

    const index = data.findIndex(element => element.id == req.params.id);
    
    if (index >= 0) {
        const student = data[index];
        res.status(200).json({ student })
    }
    else {
        res.status(404).json(
            {
                status: "Failure",
                message: "id is invalid respond"
            })
    }

})

app.post('/api/student', (req, res) => {

    if (req.body.name !== undefined && req.body.currentClass !== undefined && req.body.division !== undefined) {
        {
            studentId = studentId + 1;
            data.push({
                id: studentId,
                name: req.body.name,
                currentClass: req.body.currentClass,
                division: req.body.division
            })
            res.json({ student_id: studentId });
        }
    }
    else {
        res.status(400).json({
            status: "400",
            message: "Incomplete details"
        })
    }
})

app.put('/api/student/:id', (req, res) => {
    
    let index = -1;
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == req.params.id) {
            index = i;
        }
    }
    if(index>=0)
    {
    data[index] = {
                id: req.params.id,
                name: req.body.name,
                currentClass: req.body.currentClass,
                division: req.body.division
            }
            let newstd_data = data[index]
            console.log(newstd_data)
                res.status(200).json(newstd_data)
        }
    else {
        res.status(404).json({
            status: "404",
            message: "Invalid Id"
        })
    }

})

app.delete('/api/student/:id', (req, res) => {
    let index = -1;
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == req.params.id) {
            index = i;
        }
    }
    if (index >= 0) {
        const student = data.splice(index,1)
        res.json({ student });
    } else {
        res.status(404).json({
            status: "404",
            message: "Invalid Id"
        })
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app; 