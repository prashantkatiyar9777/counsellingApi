const tf = require('@tensorflow/tfjs-node');

module.exports = async function(req, res){
    const category = req.query.category;
    const model = await tf.node.loadLayersModel(`https://raw.githubusercontent.com/crossphoton/counsellingApi/modelTest/assets/exported/${category}.json`);
    // const data = await tf.loadLayersModel(`../assets/models/${category}.bin`);

    var predict = model.predict(req.query.percentile);

    res.send(predict);
}

//  http://localhost:7000/v1/rank-with-percentile?percentile=98.39&category=gen