const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSignupModel = Schema({
    fname: String,
    lname: String,
    email: String,
    password: String

});

module.exports = mongoose.model("SignUp", userSignupModel);