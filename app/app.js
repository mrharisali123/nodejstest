const express = require('express');
const app= express();

app.get('/', (req,res)=>{
    res.send("api works")
})

module.exports = app;
