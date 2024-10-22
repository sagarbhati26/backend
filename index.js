require('dotenv').config()
const express = require('express')
const app=express()
const port=4000

app.get('/',(req,res)=>{
    res.send('hello i am learning backend')
})
app.listen(process.env,()=>{
    console.log(`app is listing on port ${port}`)
})