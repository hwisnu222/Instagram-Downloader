const express = require("express");
const router = express.Router();
const instagram = require('instagram-save');


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "INSTADOWN",
  });
});

router.post("/post", function (req, res) {
  let getUrl = req.body.url
  let getCode = getUrl.split("/");
  instagram(getCode[4], "images/")
    .then(res => {
      console.log(res.file);
    })
  setTimeout(function () {
    res.render("index", {
      title: "INSTADOWN",
      urlView: getUrl,
      imgSource: `/images/${getCode[4]}.jpg`,
    });
  }, 3000);
});

module.exports = router;