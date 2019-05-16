var ajoutDb = require("./testAjoutDb");

module.exports = function(app,client) {
  app.get("/post/create", function(req, res) {
    res.send("XXX");
  });

  app.post("/post/create", function(req, res) {
    res.send("XXX");
  });

  app.get("/post/:id", function(req, res) {
    res.send("XXX");
  });

  ajoutDb(app,client);
}
