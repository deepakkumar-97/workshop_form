const mongoose = require("mongoose")

// code for connection with with local database
// mongoose.connect("mongodb://localhost:27017/registration_form")

mongoose.connect("mongodb+srv://Deepak:9999mongo@cluster0.v8gzl.mongodb.net/registration_form?retryWrites=true&w=majority").then(() => {
    console.log(`Connection Done`)
}).catch((e) => {
    console.log(e)
})