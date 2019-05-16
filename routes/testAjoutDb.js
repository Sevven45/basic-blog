module.exports = function(app,client) {
    app.get("/testAjoutDb", function(req, res) {

        var Articles = 
        [
            {_id:1, 'titre': 'Test 1', 'nom': 'Montoya', 'prenom': 'Thomas', 'contenu': 'Il était une fois ....', 'date': "2016-09-17T23:25:56.314Z" },
            {_id:2, 'titre': 'New Test 2', 'nom': 'Escobar', 'prenom': 'Benjamin', 'contenu': 'Un beau jour dans une autre monde ...', 'date': "2017-09-17T23:25:56.314Z" },
            {_id:3, 'titre': 'Newest Test 3', 'nom': 'Morel', 'prenom': 'Charles-Antony', 'contenu': 'Dans une lointaine contré ...', 'date': "2018-09-17T23:25:56.314Z" },
        
        ]

  app.client = client;
  app.db = client.db("Blog");
            app.db.collection("Articles").insert(Articles, null, function (error, results){
                if(error) throw error;
                console.log("Les articles ont bien été insérés.");
                });
        });
}