var ajoutDb = require("./testAjoutDb");
var posts = require("./index");

var ObjectId = require('mongodb').ObjectID;
var resultArray = [];


module.exports = function(app,client) {
  var resultArray = [];

  


  app.get("/post/create", function(req, res) {
    res.send("XXX");
  });

  app.post("/post/create", function(req, res) {
    res.send("XXX");
  });

  app.get("/post/:id", function(req, res) {
    let id = parseInt(req.params.id);
    
    let cursor = app.db.collection("Articles").find({"_id" : id}).toArray()
    .then(result => res.render("article", { 'items': cursor})
    .catch(err => { throw Error(err) }));

  });
  

  //ajoutDb(app,client);
}
