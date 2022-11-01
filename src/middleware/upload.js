// multer: (This upload middleware will provide us with lot of useful methods, such as uploading a single picture or multi)
const multer = require('multer')
// setting up the multer engine
const storage = multer.diskStorage({})
const upload = multer({storage:storage})

module.exports = upload