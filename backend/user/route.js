const express = require("express");
const User=require('./controller')
const user =new User();

module.exports=function (app){
    app.post("/luxerange/signup", (req, res) => {user.signup(req, res)
    console.log(req.body,'req body')});
}