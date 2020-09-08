const tf = require('@tensorflow/tfjs-node');

module.exports = async function(req, res){
    const category = req.query.category;
    percentile = Number(req.query.percentile);
    model = await tf.loadLayersModel(`file://assets/exported/${category}.json`);
    var predict = model.predict(tf.tensor1d([percentile/100])).arraySync()[0][0]*10000000;
    res.json({rank: Math.floor(predict)});
}
