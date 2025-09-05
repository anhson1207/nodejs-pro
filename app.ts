import express from 'express';
// const express=require('express');
const app=express();
const PORT=8080;
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.get("/nguyenson", (req, res) => {
    res.send("Hello Nguyen Son");
});
app.listen(PORT, () => {
    console.log(`my app is running on port ${PORT}`);
});