const {Router} = require('express');
const {upload} = require('../controllers/upload.controller');
const {verifyFile} = require('../middlewares/verifyFile');
const router = Router();

router.post('/',verifyFile,upload);

module.exports = router;