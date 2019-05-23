var ajoutDb = require("./AjoutDb");
var bodyParser = require('body-parser');
var Requete = require("../request/request");

var ObjectId = require('mongodb').ObjectID;

module.exports = function(app,client) {

  app.get("/post/create", function(req, res) {
    res.render("createArticle");
  });

  app.post("/post/create", function(req, res) {
    let requete = new Requete();
    requete.creerArticle(app, req, res);
  });

  app.get("/post/:id", function(req, res) {
    let requete = new Requete();
    requete.afficherUnArticle(app, req, res);
  });


  app.get("/post/delete/:id", function(req, res) {
    let requete = new Requete();
    requete.supprimerArticle(app, req, res);
  });

  ajoutDb(app,client);  
}
