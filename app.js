const express = require("express");
const path = require('path');
const session = require('express-session');

const app = express();
app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');
const db = require('./server/connection');

const { register, unsafe_register } = require('./server/register');

// home page
app.get('/',(req,res)=>{
    res.render(path.resolve(__dirname,'./public/index'))
})

// register page
app.get('/register',(req,res)=>{
    res.render(path.resolve(__dirname,'./public/register'))
})

// register page post request
app.post('/register',register,(req,res)=>{
    res.send("successful registration " + req.body.name);
})

// unsafe register page
app.get('/unsafe/register',(req,res)=>{
    res.render(path.resolve(__dirname,'./public/register_unsafe'))
})

// unsafe register post request
app.post('/unsafe/register',unsafe_register,(req,res)=>{
    res.send("successful registration " + req.body.name);
})

// any other page
app.get('/*',(req,res)=>{
    res.redirect('/')
})





app.listen(3000, () => console.log("server is running on port 3000"));