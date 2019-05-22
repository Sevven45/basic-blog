var express = require("express");
var MongoClient = require("mongodb");
var bodyParser = require('body-parser');
var cons = require('consolidate');
var bodyParser = require('body-parser');
var fonctions = require("../fonctions/fonctions");

var ObjectId = require('mongodb').ObjectID;

module.exports = class requeteBase {

    afficherUnArticle(app, req, res){
        //récupération de l'id dans l'url+ convertie en Int
        let id = req.params.id;
        app.db.collection("Articles").find({"_id" : new ObjectId(id)}).toArray()
        .then(function(result){res.render("article", { 'items': result[0]})})
        .catch(err => { throw Error(err) });
    }

    creerArticle(app, req, res){
        let titre = req.body.titre;
        let contenu = req.body.contenu;
        let auteur = req.body.auteur;
        let dateRetour = fonctions.date();
        console.log(dateRetour);
        let doc = { titre: titre, auteur: auteur, contenu: contenu, date: dateRetour };
        
        app.db.collection("Articles").insertOne(doc)
        .then(result => res.render("createArticleConfirme"))
        .catch(err => { throw Error(err) });
    }

    supprimerArticle(app, req, res){
        let id = req.params.id;

        app.db.collection("Articles").deleteOne({"_id" : new ObjectId(id)})
        .then(result => res.redirect('/'))
        .catch(err => { throw Error(err) });
    }

    

}

function ajoutZero(n){
    if(n <= 9){
      return "0" + n;
    }
    return n
  }