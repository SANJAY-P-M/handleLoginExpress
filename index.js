// In this task I am using common javascript cjs
// but I will also provide how to handle it in mjs ECMAScript
// If you are using ECMA script change type property in package.json to module



// importing express cjs comment it If you use ECMA script
const express = require("express");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
const path = require("path");

// uncomment below if you use ECMA Script 
// import express from "express";
// import { fileURLToPath } from "url";
// var __dirname = fileURLToPath(import.meta.url);
// import { jwt } from "jsonwebtoken";
// import { cookie } from "cookie";

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


// Before trying to get login pages we need to put all html and css in static middleware
expressObject.use(express.static(`public`));

// Convert json to handle the response easily 
expressObject.use(express.json());

// making a response
expressObject.get(
    '/',
    (req, res) => {
        // if the user is not authenticated then he will be redirected to login page
        try {
            // Parsing the cookie before using it 
            var incomingCookies = cookie.parse(req.headers.cookie);

            console.log(incomingCookies);
            var token = incomingCookies.jwt;
            if(token){
                jwt.verify(token, "password", (error, decoded) => {
                    if (error){
                        res.clearCookie();
                        res.redirect(`/`);
                    }
                    else {
                        res.sendFile(__dirname+`/authorized.html`);
                    }
                });
            }
        } catch (error) {
            console.log(error);
            res.sendFile(__dirname + '/public/form.html');
        }
    }
);



// Adding another middleware function to get form data
expressObject.use(express.urlencoded({ extended: true }))


// Handling POST request from form
expressObject.post(
    '/authenticate',
    (req, res) => {
        var { username, password } = req.body;
        if (username === 'admin' && password === 'password123') {
            var token = jwt.sign(
                {
                    message: 'login successful'
                },
                'password'
            );
            res.cookie('jwt',token,{
                httpOnly:true,
            });
            console.log(`token Attached`);
        }
        res.redirect(`/`);
    }
);

expressObject.get(
    '/logout',
    (req, res) => {
        res.clearCookie('jwt');
        res.redirect('/');
    }
);