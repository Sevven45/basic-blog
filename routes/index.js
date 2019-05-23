var posts = require("./posts");
var fonctions = require("../fonctions/fonctions");

module.exports = function(app,client){

  app.get("/", function(req, res) {
    let resultArray = [];
    var cursor = app.db.collection("Articles").find();
    
    cursor.forEach(function(doc, err) {
      if (err == null){
        resultArray.push(doc);
      }
    },function() {
      resultArray.forEach(element => {
        element.contenu = fonctions.summarize(element.contenu);
      });
      res.render('index', {items: resultArray});
    });
  });

  // Register posts endpoint
  posts(app,client);
}
