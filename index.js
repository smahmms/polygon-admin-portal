require('dotenv').config()
const express = require('express');
const path = require('path');
const cors = require('cors');
let port  = process.env.PORT || 3000;
const app = express()
const https = require('https');
const fs = require('fs');
const {constants} = require('crypto');
app.use(cors());
const options = {
    key: fs.readFileSync("ssl/private.key"),
    cert: fs.readFileSync("ssl/public.crt"),
    ca: [ fs.readFileSync('ssl/ca_bundle.crt') ]
 };
 app.use(express.static('public'))
 app.use('/*',(req,res,next)=>{
     res.sendFile(path.join(__dirname,'/public/index.html'))
 })
 //https.createServer(options,app).listen(port,()=>console.log(`app run on port ${port}`));
 app.listen(port,()=>{console.log(`app runing on port ${port}`)})