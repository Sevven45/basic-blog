var posts = require("./posts");

var resultArray = [];

module.exports = function(app,client){

  app.get("/", function(req, res) {
    var cursor = app.db.collection("Articles").find();
    
    cursor.forEach(function(doc, err) {
      if (err == null){
        resultArray.push(doc);
      }
    },function() {
      client.close();
      res.render('index', {items: resultArray});
    });
  });

  // Register posts endpoint
  posts(app,client);
}
