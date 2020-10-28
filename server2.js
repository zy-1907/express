const { response } = require('express')
const express=require('express')
const { request } = require('http')
const app=express()
const port = 8080
app.get('/hello',(request,response)=>{
    response.send('hello.')
})

app.get('/world',(request,response)=>{
    response.send('world.')
})

app.listen(port,()=>console.log('express server'))