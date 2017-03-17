var express = require("express");
var router = express.Router();
var request = require("request");


/* GET home page. */
router.get("/", function(req, res, next) {

  request("http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=8f2e2264-6eab-451f-a66d-34aa2a0aa7b1"
    ,function(err,res2,content){
      var obj = JSON.parse(content);
      
      res.render("index", {
        title: "台北市垃圾",
        garbage:obj.result.results
      });

    });

});


module.exports = router;
