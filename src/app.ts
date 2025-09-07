import express from 'express';
import webRoutes from "./routes/web";
require("dotenv").config();
// const express=require('express');
const app=express();
const PORT= 8080;

//config view engine
app.set("view engine","ejs");
app.set("views","./src/views");

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//config routes
webRoutes(app);
//config static files (css,js,img)
app.use(express.static("public"));


app.listen(PORT, () => {
    console.log(`my app is running on port ${PORT}`);
    console.log("env port:",process.env.PORT);
});