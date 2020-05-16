const express = require("express");
const router = express.Router();

const upload = require("./file");
const singleUpload = upload.single("image");

router.post("/image-upload", function (req, res) {
  singleUpload(req, res, function (err) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "File Upload Error", detail: err.message }]
      });
    }
    console.log(req.file);
    return res.json({ imageUrl: "Wilson" });
  });
});

module.exports = router;
