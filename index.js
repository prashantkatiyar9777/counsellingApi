const express = require('express');
const app = express();
const mongo = require('mongoose');
const env = require('dotenv');

var Database;


// Variables to be converted to use enviornment variables
const dbUrl = "mongodb://localhost:27017/counselling";


//Database
mongo.connect(dbUrl,
    {useUnifiedTopology: true, useNewUrlParser: true},
    (err, db) => {
    if(err) throw err;
    Database = db;
    console.log("Database connected.");
});



//Routes
app.get("/v1/institute-data/:institute", (req, res)=>{
    res.redirect(`${instituteUrl}/${req.params.institute}.json`);
})

app.get("/v1/institute-with-rank", (req, res) =>{
    const rank = Number(req.query.rank);
    const category = req.query.category;
    const opening = category+".data.opening"
    const closing = category+".data.closing"

    var query = {
        [closing]: {
            $lt: rank
        }
    }
    Database.collection("2019").find(query, {projection: {name: 1, [category]:1}}).toArray((err, data)=>{
        if(err) return res.statusCode(500);
        res.json(data);
        console.log(data.length);
    })

    //TODO : Filter out data
}); 





//Initializing Server
app.listen(7000, ()=> console.log("Server Up"));