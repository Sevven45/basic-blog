module.exports = function(app,client) {
    app.get("/AjoutDb", function(req, res) {

        var Auteur = ["Escobar","Montoya","Morel","Messi","Maradona","Pele","Ronaldo"];
        var Titre = ["Jour de vote au Royaume-Uni","Luka Modric, un Ballon d'Or qui a de l'éclat","Python et Netflix",
                        "En France, un joueur de jeux vidéo sauve un autre «gamer» du suicide"]
        var Dates=["20/05/2019","15/04/2019","22/11/2018","06/09/2018","14/08/2018","06/06/2018","30/05/2018","27/02/2018"]
        var Contenu=
        [
            "Pour comprendre à quel point la politique britannique est entrée dans la quatrième dimension, il faut écouter l’étonnante conversation entre les petits groupes de manifestants pro et anti-Brexit présents devant le palais de Westminster, à Londres. Drapeaux européens autour du cou pour les uns, tee-shirts en faveur du Parti du Brexit pour les autres, ils sont de bords radicalement opposés. Ils ont cependant un point commun : pour les élections européennes de ce jeudi 23 mai – les scrutins au Royaume-Uni se déroulent toujours un jeudi –, ils ont voté pour la première fois de leur vie pour un parti différent de celui qu’ils soutiennent d’habitude. 'J’ai été membre du Parti conservateur pendant trente et un ans et j’en suis parti la semaine dernière », révèle Lee Bishop, un Londonien de 56 ans. Son vote est allé au Parti du Brexit, de Nigel Farage, parce qu’il veut envoyer un message clair pour que le Brexit ait lieu rapidement : « Pas question d’accepter l’accord de Theresa May, qui n’est pas un vrai Brexit. 'Comme en écho, Christopher Maw raconte son histoire : ' J’ai été membre du Parti travailliste pendant trente ans, et j’en suis parti il y a trois semaines. ' Son vote est allé aux libéraux-démocrates, dont le slogan ' Bollocks to Brexit ' (littéralement ' Brexit, mes couilles ») ne laisse guère d’ambiguïté. « Je ne comprends pas les hésitations de Jeremy Corbyn [le leader travailliste]. On ne comprend pas s’il est pour ou contre un deuxième référendum ', déplore M. Maw.",
            "C'est à 22 h 15 que sa silhouette s'est extraite du nuage de fumée blanche situé en haut de l'escalier du Grand Palais. Le Ballon d'Or dans les mains et le sourire aux lèvres, Luka Modric est devenu à cet instant le premier joueur de l'ex-Yougoslavie à soulever le trophée si convoité. La désignation du Croate soulèvera la déception des Français, et celle des supporters de CR7 - implacable au printemps, le Portugais tenait presque son sixième Ballon d'Or au soir de la troisième victoire de rang du Real Madrid en Ligue des champions. Mais la surprise aurait été de ne pas voir sacrer le vainqueur de tous les prix individuels de l'année. Désigné meilleur joueur de la Coupe du monde et meilleur joueur de l'année pour l'UEFA et la FIFA, le natif de Zadar était bien le favori des pronostics.",
            "Netflix est une entreprise américaine implantée qui propose des films et séries télévisées en flux continu sur Internet. En prévision de la conférence PyCon de la Python Software Foundation à Cleveland, le géant de la diffusion en continu a expliqué en détail comment il utilise le langage open source. Rappelons que Python est un langage de programmation interprété, multiparadigme et multiplateformes. En 2017 déjà, L’Institute of Electrical and Electronics Engineers (IEEE), la plus grande association mondiale de professionnels techniques, classait le langage comme le meilleur en 2017 en dépassant C et Java. En début de cette année, Python est sacré langage de programmation de l'année 2018 par l'index TIOBE. Le langage est de plus en plus sollicité dans presque tous les domaines de la programmation allant de la programmation web au développement de l'intelligence artificielle. « De nos jours, c’est le premier langage le plus enseigné dans les universités. Il est numéro un dans le domaine statistique, numéro un en programmation d’IA, numéro un en rédaction de scripts et numéro un en tests de système d’écriture. En outre, Python est également un chef de file de la programmation Web et de l’informatique scientifique, etc. », a écrit TIOBE.",
            "Les jeux vidéo peuvent sauver des vies. Hier, dans un communiqué publié sur le réseau social Facebook, la préfète des Hautes-Alpes rapportait une histoire sous l’intitulé «Coup de cœur»: le 18 mai, grâce à l’alerte d’un joueur résidant à Rousset, un autre «gamer» de Seine-et-Marne a pu être secouru. Ce dernier avait fait connaître ses intentions suicidaires en ligne, sur le jeu vidéo en ligne «Star Wars: Héros de la Galaxie».«Le joueur qui se cachait derrière le pseudo utilisé [a été] rapidement identifié» peut-on lire dans le communiqué. «Des investigations menées sur les réseaux sociaux et des recoupements ont permis de trouver une adresse en Seine-et-Marne. L’intéressé a pu être joint en moins de deux heures et ses parents informés, évitant tout passage à l’acte». Sur Facebook, la préfète a félicité le civisme du joueur de Rousset et la réactivité des gendarmes, qui sont partis d’un «simple pseudonyme dans un jeu vidéo hébergé aux États-Unis»."
        ]


        var nbAleaNbArticle=Math.floor(Math.random()*Math.floor(7)+3);
        var Article
        for (var i=0; i<nbAleaNbArticle;i++){
            var nbAleaAut=Math.floor(Math.random()*Math.floor(6));
            var nbAleaTitre=Math.floor(Math.random()*Math.floor(3));
            var nbAleaDate=Math.floor(Math.random()*Math.floor(7));
            var nbAleaContenu=Math.floor(Math.random()*Math.floor(3));
            console.log("1"+nbAleaAut+" "+nbAleaContenu+" "+nbAleaDate+" "+nbAleaTitre);
            let doc = { titre: Titre[nbAleaTitre], auteur: Auteur[nbAleaAut], contenu: Contenu[nbAleaContenu], date: Dates[nbAleaDate] };
            app.db.collection("Articles").insertOne(doc)
            .then(result => res.render("createArticleConfirme"))
            .catch(err => { throw Error(err) });
            console.log(doc);
        }
        

});
}