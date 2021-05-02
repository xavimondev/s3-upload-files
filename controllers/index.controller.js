const {getBuckets} = require('../helpers/s3');

const index = async (req,res) => {
    const data = await getBuckets();
    
    res.render('index',{
        buckets:data.Buckets
    });
};

module.exports = {
    index
}