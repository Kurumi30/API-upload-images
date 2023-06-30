const upload = require("../config/multer")
const express = require("express")
const PictureController = require("../controllers/pictureController")
const router = express.Router()

router.post("/", upload.single("file"), PictureController.create)
router.get("/", PictureController.findAll)
router.delete("/:id", PictureController.remove)

module.exports = router