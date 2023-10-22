// In this task I am using common javascript cjs
// but I will also provide how to handle it in mjs ECMAScript
// If you are using ECMA script change type property in package.json to module



// importing express cjs comment it If you use ECMA script
const express = require("express");


// uncomment below if you use ECMA Script 
// import express from "express";
// import { fileURLToPath } from "url";
// var __dirname = fileURLToPath(import.meta.url);


// creating a express object
var expressObject = express();



// initializing the server in port no 3000
// If you want your server to access in the internet connect with public ip,
// add second argument as 0.0.0.0 as below
expressObject.listen(
    3000,
    // '0.0.0.0',
    (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Server started`);
        }
    }   
);

// variable that is used to authenticate 
var authenticated = false;


// Before trying to get login pages we need to put all html and css in static middleware
expressObject.use(express.static(`login-page`))

// making a response
expressObject.get(
    '/',
    (req, res) => {
        // By making this conditional
        // Once the user is login he/she will never see the login page again till he/she logout( as like instagram )
        if(!authenticated)
            res.sendFile(__dirname + '/login-page/form.html');
        else
            res.send(`Authenticated page !<a href='/logout'>logout</a>`);
    }
);



// Adding another middleware function to get form data
expressObject.use(express.urlencoded({extended : true}))


// Handling POST request from form
expressObject.post(
    '/authenticationPage',
    (req, res) => {
        var formData = req.body;
        if(formData.username === 'admin' && formData.password === 'password123'){
            authenticated = true;
            res.redirect(`/`);
        }
        else{
            res.redirect(`/`);
        }
    }
);

expressObject.get(
    '/logout',
    (req,res)=>{
        authenticated = false;
        res.redirect('/');
    }
);