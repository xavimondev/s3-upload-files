const verifyFile = (req,res,next) => {
    if(!req.files || Object.keys(req.files).length === 0 || !req.files.file)
        return res.status(400).json({msg:'No files were uploaded'});

    next();
};

module.exports = {
    verifyFile
};