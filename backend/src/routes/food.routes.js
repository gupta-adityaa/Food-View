const express = require('express');
const foodController = require("../controllers/food.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const router = express.Router();
const multer = require('multer');
// Multer is a middleware that parses incoming request containing files and makes them accessible inside backend using req.file

const upload = multer({
    storage: multer.memoryStorage(),
    // Defines where multer should store the file, instead of storing on disk file is temporarily stored in RAM and available as a buffer
})


/* POST /api/food/ [protected]*/
router.post('/',
    authMiddleware.authFoodPartnerMiddleware,
    upload.single("Item-1"),
    // It tells Multer expect one file from the request and its field name will be Item-1
    foodController.createFood)


/* GET /api/food/ [protected] */
router.get("/",
    authMiddleware.authUserMiddleware,
    foodController.getFoodItems)


router.post('/like',
    authMiddleware.authUserMiddleware,
    foodController.likeFood)


router.post('/save',
    authMiddleware.authUserMiddleware,
    foodController.saveFood
)


router.get('/save',
    authMiddleware.authUserMiddleware,
    foodController.getSaveFood
)



module.exports = router
