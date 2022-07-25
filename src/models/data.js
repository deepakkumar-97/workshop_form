const mongoose = require("mongoose")
const validator = require("validator")

const formSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        unique : [true,"email already exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    dateofbirth : {
        type : Date,
        required : true
    },
    mobileno : {
        type:Number,
        required : true,
        unique : true,
        min : 10
    },
    year : {
        type : String,
        require : true
    },
    branch : {
        type : String,
        require : true
    },
    member : {
        type:Number,
        required : true,
        min : 1
    },
    interest : {
        type : Array,
        require : true
    },
    project : {
        type : String,
        require : true
    }

})

const formdata = new mongoose.model("formdata",formSchema)
module.exports = formdata