var posts = require("./posts");

var resultArray = [];

module.exports = function(app,client){

  app.get("/", function(req, res) {

    app.client = client;
    app.db = client.db("Blog");

    var cursor = app.db.collection("Articles").find();
    console.log(app.db.collection("Articles").find());
    cursor.forEach(function(doc, err) {
      resultArray.push(doc);
    },function() {
      client.close();
      app.render('index', {'items': resultArray});
    });
  });

  // Register posts endpoint
  posts(app,client);
}
