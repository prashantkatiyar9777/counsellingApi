const express = require('express');
const app = express();
const mongo = require('mongoose');
const env = require('dotenv');

var Database;


// Variables to be converted to use enviornment variables
process.env.dbUrl = "mongodb://localhost:27017/counselling";


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

    // const rank = Number(req.query.rank);
    // const category = req.query.category;
    // const opening = category+".data.opening"
    // const closing = category+".data.closing"

    // var query = {
    //     [closing]: {
    //         $gt: rank
    //     }
    // }
    // Database.collection("2019").find(query, {projection: {name: 1, [category]:1}}).toArray((err, data)=>{
    //     if(err) return res.statusCode(500);
    //     res.json(data);
    //     console.log(data.length);
    // })

    // //TODO : Filter out data
}); 





//Initializing Server
app.listen(7000, ()=> console.log("Server Up at http://localhost:7000"));