const path = require("path");
const multer = require("multer");

const config = {
    storage: multer.diskStorage({
        destination: (req, file, next) => {
            next(null, "server/upload/");
        },

        filename: (req, file, next) => {
            let times = Date.now();
            next(null, times + times + path.extname(file.originalname));
        }
    })
};

module.exports = multer(config);