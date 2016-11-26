/*jshint node:true,asi:true */
"use strict"
var express = require('express')
var app = express()

app.get('/whoami',function(req,res){
    var ipaddress = req.connection.remoteAddress
    var language = req.acceptsLanguages
    // var software = req.params.software
    console.log(req)
    var obj = {
        ipaddress:req.connection.remoteAddress,
        language:req.acceptsLanguages,
        // software:software
    }
    res.end(JSON.stringify(obj))
})

app.listen(3000);