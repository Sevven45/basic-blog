module.exports = function(app,client) {
    app.get("/AjoutDb", function(req, res) {

        var Articles = 
        [
            {'titre': 'Article 1', 'auteur': 'Montoya', 'contenu': 'Il était une fois ....', 'date': "2016-11-17" },
            {'titre': 'Article 2', 'auteur': 'Escobar', 'contenu': 'Un beau jour dans une autre monde ...', 'date': "2017-07-26" },
            {'titre': 'Article 3', 'auteur': 'Morel','contenu': 'Dans une lointaine contré ...', 'date': "2018-09-17" },
        
        ]
});
}