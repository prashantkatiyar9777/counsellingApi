const express = require('express');
const app = express();
const mongo = require('mongodb');
const iiitData = require("./assets/iiitList.json");
const rankData = require("./assets/rankData.json");

var Database;


//Database
mongo.connect(process.env.dbUrl,
    {useUnifiedTopology: true, useNewUrlParser: true},
    (err, client) => {
    if(err) throw err;
    Database = client.db("counselling");
    console.log("Database connected.");
});


//Middlewares

const instituteWithRank = require("./middlewares/instituteWithRank");
const rankWithPercentile = require("./middlewares/rankWithPercentile");



//Routes


// // For future use with sufficient data

// app.get("/v1/institute-data/:institute", (req, res)=>{
//     if(req.params.institute)
//         return res.redirect(`${instituteUrl}/${req.params.institute}.json`);
//     return res.json({error: "Invalid parameters", params: req.params});
// });

app.get("/v1/institute-with-rank", (req, res) =>{
    instituteWithRank(req, res, Database);
});

app.get("/v1/rank-with-percentile", (req, res)=>{
    rankWithPercentile(req, res);
});

app.get("/v1/institute-data", (req, res)=>res.json(iiitData));

app.get("/v1/placement-data", (req, res)=>res.json(rankData));

app.get("/v1/josaa-data", (req, res)=> res.redirect("https://josaa.herokuapp.com"+req.url));





//Initializing Server
app.listen(process.env.PORT || 7000, ()=> console.log("Server Up"));