const filter = require("./iwrFilter");

module.exports = function(req, res, Database){
    const rank = Number(req.query.rank);
    const category = req.query.category;

    var query = {
        [category+".data.closing"]: {
            $lt: rank
        }
    }


    Database.collection("2019").find(query, {projection: {name: 1, shortID: 1, [category]:1}}).toArray((err, data)=>{
        if(err) return res.statusCode(500);
        finalData = filter(data, rank, category);
        res.json(finalData);
    })


    //TODO : Filter out data
}