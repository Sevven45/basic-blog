var app = require("../server.js");
var supertest = require("supertest");
var assert = require("chai").assert;
ObjectID = require("mongodb").ObjectID;
var idTest = new ObjectID();

describe("Test insertion nouvelle article", function () {
    describe("Insertion Test", function () {
        it("Insert", function () {
            
            let entreeTest = { "_id": ObjectID(idTest), 
                                "titre": "TitreTest", 
                                "auteur": "David GoodEnough", 
                                "contenu": "ContennantContenuContenaire", 
                                "date": "21/05/1998" };

            app.db.collection("Articles").insertOne({entreeTest});

            app.db.collection("Articles").find({ "_id": new ObjectID(idTest) }).toArray().then(function (result) {
                expect(result[0].titre.to.equal("TitreTest"));
                expect(result[0].auteur.to.equal("David GoodEnough"));
                expect(result[0].contenu.to.equal("ContennantContenuContenaire"));
                expect(result[0].date.to.equal("21/05/1998"));
            });
        });
        
    });
    /*app.db.collection("Articles").deleteOne({ _id: ObjectID(idTest) });*/
    
});