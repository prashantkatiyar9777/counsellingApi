const express = require('express');
const app = express();
const mongo = require('mongoose');
const env = require('dotenv');

var Database;


// Variables to be converted to use enviornment variables
// process.env.dbUrl = "mongodb://localhost:27017/counselling";


//Database
mongo.connect(process.env.dbUrl,
    {useUnifiedTopology: true, useNewUrlParser: true},
    (err, db) => {
    if(err) throw err;
    Database = db;
    console.log("Database connected.");
});


//Middlewares

const instituteWithRank = require("./middlewares/instituteWithRank");



//Routes
app.get("/v1/institute-data/:institute", (req, res)=>{
    res.redirect(`${instituteUrl}/${req.params.institute}.json`);
})

app.get("/v1/institute-with-rank", (req, res) =>{
    instituteWithRank(req, res, Database);
}); 





//Initializing Server
app.listen(7000, ()=> console.log("Server Up at http://localhost:7000"));