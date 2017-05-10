var mongoose = require('mongoose');
var cloudinary = require('cloudinary');
// import Story schema
const GallerySchema = require('../schema/Gallery')

module.exports = {
    // Connect/Disconnect middleware
    config: (req, res, next) => {
        cloudinary.config({
            cloud_name: req.webtaskContext.secrets.CL_CLOUD_NAME,
            api_key: req.webtaskContext.secrets.CL_API_KEY,
            api_secret: req.webtaskContext.secrets.CL_SECRET
        });
        req.cloudinary = cloudinary;
        next()
    },
}

