const express = require("express")
const app = express()
require("./database/link")
const formdata = require("./models/data")
const port = process.env.PORT || 8000


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set("view engine", "hbs")

app.get("/", (req,res) =>{
    res.render("register")
})

app.post("/register", async (req, res) =>{
      try{
        const registerstudent = new formdata({
            name : req.body.name,
            email : req.body.email,
            dateofbirth : req.body.dob,
            mobileno : req.body.mob,
            year : req.body.year,
            branch : req.body.branch,
            member : req.body.grp,
            interest : req.body.int,
            project : req.body.textarea
        })
        const registered = await registerstudent.save()
        res.render("success")

    }catch(e){
        res.status(400).send(e)
    }
})

app.listen(port, () =>{
    console.log(`running at port number ${port}`)
})