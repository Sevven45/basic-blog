var ajoutDb = require("./AjoutDb");
var posts = require("./index");
var bodyParser = require('body-parser');

var ObjectId = require('mongodb').ObjectID;
var resultArray = [];


module.exports = function(app,client) {

  app.get("/post/create", function(req, res) {
    res.render("createArticle");
  });

  app.post("/post/create", function(req, res) {
    //faire fonctions de ça
    let titre = req.body.titre;
    let contenu = req.body.contenu;
    let auteur = req.body.auteur;
    let date = new Date();
    let dateFormate = date.getFullYear() + "/" + ajoutZero(date.getMonth() + 1) + "/" + ajoutZero(date.getDate());
    let doc = { titre: titre, auteur: auteur, contenu: contenu, date: dateFormate };
    //faire fonction de ça
    app.db.collection("Articles").insertOne(doc)
    .then(result => res.render("createArticleConfirme"))
    .catch(err => { throw Error(err) });
  });

  app.get("/post/:id", function(req, res) {
    //récupération de l'id dans l'url+ convertie en Int
    let id = req.params.id;
    app.db.collection("Articles").find({"_id" : new ObjectId(id)}).toArray()
    .then(function(result){res.render("article", { 'items': result[0]})})
    .catch(err => { throw Error(err) });
  });


  app.get("/post/delete/:id", function(req, res) {
    //récupération de l'id dans l'url+ convertie en Int
    let id = req.params.id;
    app.db.collection("Articles").deleteOne({"_id" : new ObjectId(id)})
    .then(result => res.redirect('/'))
    .catch(err => { throw Error(err) });
  });
  

  function ajoutZero(n){
    if(n <= 9){
      return "0" + n;
    }
    return n
  }

  ajoutDb(app,client);

  
}
