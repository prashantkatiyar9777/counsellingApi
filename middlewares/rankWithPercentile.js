const tf = require('@tensorflow/tfjs-node');

module.exports = async function(req, res){
    const category = req.query.category;
    const percentile = Number(req.query.percentile);
    if(category && percentile){
        model = await tf.loadLayersModel(`file://assets/exported/${category}.json`);
        var predict = model.predict(tf.tensor1d([percentile/100])).arraySync()[0][0]*10000000;
        return res.json({rank: Math.floor(predict)});
    }
    return res.json({error: "Invalid Parameters", query: req.query});
}
