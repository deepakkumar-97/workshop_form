const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/registration_form")
.then(() => {
    console.log(`Connection Done`)
}).catch((e) => {
    console.log(`No connection`)
})