var posts = require("./posts");

module.exports = function(app,client){

  app.get("/", function(req, res) {
    res.render("index");
  });

  // Register posts endpoint
  posts(app,client);
}
