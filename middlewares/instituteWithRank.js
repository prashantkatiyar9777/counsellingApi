const filter = require("./iwrFilter");

module.exports = function(req, res, Database){
    const rank = Number(req.query.rank);
    const category = req.query.category;

    if(category && percentile){
        var query = {
            [category+".data.closing"]: {
                $gt: rank
            }
        }


        Database.collection("2019").find(query, {projection: {name: 1, shortID: 1, [category]:1}}).toArray((err, data)=>{
            if(err) return res.statusCode(500);
            finalData = filter(data, rank, category);
            return res.json(finalData);
        })
    }
    return res.json({error: "Invalid Parameters", query: req.query});
}