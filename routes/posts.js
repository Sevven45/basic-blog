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
    //récupération de l'id dans l'url+ convertie en Int
    let id = parseInt(req.params.id);
    
    app.db.collection("Articles").find({"_id" : id}).toArray()
    .then(function(result){res.render("article", { 'items': result[0]})})
  });
  

  //ajoutDb(app,client);
}
