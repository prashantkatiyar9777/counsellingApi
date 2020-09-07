const express = require('express');
const app = express();
const mongo = require('mongoose');

var Database;


//Database
// mongo.connect(process.env.dbUrl,
//     {useUnifiedTopology: true, useNewUrlParser: true},
//     (err, db) => {
//     if(err) throw err;
//     Database = db;
//     console.log("Database connected.");
// });


//Middlewares

const instituteWithRank = require("./middlewares/instituteWithRank");
const rankWithPercentile = require("./middlewares/rankWithPercentile");



//Routes
app.get("/v1/institute-data/:institute", (req, res)=>{
    res.redirect(`${instituteUrl}/${req.params.institute}.json`);
})

app.get("/v1/institute-with-rank", (req, res) =>{
    instituteWithRank(req, res, Database);
});

app.get("/v1/rank-with-percentile", (req, res)=>{
    rankWithPercentile(req, res);
})





//Initializing Server
app.listen(process.env.PORT || 7000, ()=> console.log("Server Up at http://localhost:7000"));