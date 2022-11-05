const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Content-type', 'application/json');
    next();
});

const MongoClient = require('mongodb').MongoClient;
const ObjectID    = require('mongodb').ObjectId;
const url         = "mongodb://localhost:27017"; //cnx entre node et mongo

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
    let db = client.db("MONDECUISINE");

    /* ---------------------------------Recettes------------------------------------------- */

    /* Liste des tous les recettes disponible */
    app.get("/recettes", (req,res) => {
        console.log("/recettes");
        try {
            db.collection("recettes").find().toArray((err, documents) => {
                res.end(JSON.stringify(documents));
            });
        } catch(e) {
            console.log("Erreur sur /recettes : " + e);
            res.end(JSON.stringify([]));
        }
    });

     /* Liste des recettes selon leurs  modeCuisson  */
    app.get("/recettes/modeCuisson/:Cuisson", (req,res) => {
    let Cuisson = req.params.Cuisson;
        console.log("/recettes/"+Cuisson);
        try {
            db.collection("recettes").find({modeCuisson:Cuisson}).toArray((err, documents) => {
                res.end(JSON.stringify(documents));
            });
        } catch(e) {
            console.log("Erreur sur /recettes/"+Cuisson+" : "+ e);
            res.end(JSON.stringify([]));
        }
    });
    //liste des recttes selon id
   
   app.get("/recettes/id/:id", (req, res) => {
        let item = req.params.item;
        try {
            var ObjectId = require('mongodb').ObjectID;
            db.collection("recettes").find({_id: ObjectId(item) }).toArray((err, documents) => {
                res.end(JSON.stringify(documents));
            });
        } catch (e) {
            console.log("Erreur sur recherche : " + e);
            res.end(JSON.stringify([]));
        }
    });


     /* Liste des recettes creer par le pseudo  */
    app.get("/recettes/pseudo/:ps", (req,res) => {
    let ps = req.params.ps;
        console.log("/recettes/"+ps);
        try {
            db.collection("recettes").find({pseudo:ps}).toArray((err, documents) => {
                res.end(JSON.stringify(documents));
            });
        } catch(e) {
            console.log("Erreur sur /recettes/"+ps+" : "+ e);
            res.end(JSON.stringify([]));
        }
    });
    
    
    /* Liste des recettes selon leurs ingredients */
    // a modifier 

    app.post("/recettes/ingredients", (req,res) => {
    let ing = req.body.ing;
        console.log("/recettes/"+ing);
        try {
            db.collection("ingredients").find({ingredients:ing}).toArray((err, documents) => {
                res.end(JSON.stringify(documents));
            });
        } catch(e) {
            console.log("Erreur sur /recettes/"+ing+" : "+ e);
            res.end(JSON.stringify([]));
        }
    });



    

    /* ---------------------------------Produits------------------------------------------- */

    /* Liste de tous les produits disponible */
     app.get("/produits", (req,res) => {
        console.log("/produits");
        try {
            db.collection("produits").find().toArray((err, documents) => {
                res.end(JSON.stringify(documents));
            });
        } catch(e) {
            console.log("Erreur sur /produits : " + e);
            res.end(JSON.stringify([]));
        }
    });
    
    /* Liste des produits selon leurs categorie  */
    app.get("/produits/categorie/:cat", (req,res) => {
    let cat = req.params.cat;
        console.log("/produits/"+cat);
        try {
            db.collection("produits").find({categorie:cat}).toArray((err, documents) => {
                res.end(JSON.stringify(documents));
            });
        } catch(e) {
            console.log("Erreur sur /produits/"+cat+" : "+ e);
            res.end(JSON.stringify([]));
        }
    });
       /*Recherche par id*/
  app.get("/recettes/rechercheId/:filtervalue", (req, res) => {
        console.log("/recettes/rechercheId  " + req.params.filtervalue);
        let item = req.params.filtervalue;
        try {
            var ObjectId = require('mongodb').ObjectID;
            db.collection("recettes").find({ "id": ObjectId(item) }).toArray((err, documents) => {
                res.end(JSON.stringify(documents));
            });
        } catch (e) {
            console.log("Erreur sur /recettes/rechercheId/:filtervalue : " + e);
            res.end(JSON.stringify([]));
        }
    });

      /* Recherche */

        app.get("/recettes/recherche/:filtervalue", (req, res) => {
        console.log("/recette/recherche/" + req.params.filtervalue);
        let item = req.params.filtervalue;
        try {
            db.collection("recettes")
            .find( { $or: [ { "nom": { $regex: new RegExp('.*' + item + '*.', "i") }  },
            { "niveau difficulté": { $regex: new RegExp('.*' + item + '*.', "i") }  },
             { "prix": { $regex: new RegExp('.*' + item + '*.', "i") }  },
            { "pseudo": { $regex: new RegExp('.*' + item + '*.', "i") }  },
             { "modeCuisson":{ $regex: new RegExp('.*' + item + '*.', "i") } } ] })
            .collation( { locale: 'fr', strength: 1 } )
            .toArray((err, documents) => {
                console.log("okey");
                if (documents.length > 0) res.end(JSON.stringify(documents));
                else res.end(JSON.stringify({"resultat": 0, "message": "aucune recette trouve"}));

            });
        } catch (e) {
            console.log("Erreur sur /recettes/recherche/:filtervalue : " + e);
            res.end(JSON.stringify([]));
        }
    });


 
   





     /* --------------------------------- Avis ------------------------------------------- */
    /* Liste des avis disponible */
     
     app.get("/avis", (req,res) => {
        console.log("/avis");
        try {
            db.collection("avis").find().toArray((err, documents) => {
                res.end(JSON.stringify(documents));
            });
        } catch(e) {
            console.log("Erreur sur /avis : " + e);
            res.end(JSON.stringify([]));
        }
    });
    
     /* ---------------------------------Utilisateurs------------------------------------------- */
    /* Liste des users disponible */
     
     app.get("/utilisateurs", (req,res) => {
        console.log("/utilisateurs");
        try {
            db.collection("utilisateurs").find().toArray((err, documents) => {
                res.end(JSON.stringify(documents));
            });
        } catch(e) {
            console.log("Erreur sur /utilisateurs : " + e);
            res.end(JSON.stringify([]));
        }
    });
    
    
    
    
    
    
    
    
    

   //ajouter insciption
   app.post("/utilisateurs/inscription", (req,res) => {
                try {
                        db.collection("utilisateurs")
                        .insertOne(req.body, (err, res1) => {
                            if (err) console.log(err)
                            else {
                                console.log("insertion réussie dans tableau des utilisateurs")
                                console.log(res1.ops)
                                res.end(JSON.stringify({"resultat": 1, "message": "Inscription réussie"}))
                            }
                        });
                } catch (e) {
                    console.log("exception")
                    console.log(e)
                        res.end(JSON.stringify({"resultat": 0, "message": "Inscription échouée: erreur"}));
                }
        });
        






    /* Connexion */
    app.post("/user/connexion", (req,res) => {
        console.log("/utilisateurs/connexion avec "+JSON.stringify(req.body));
        try {
            db.collection("utilisateurs")
            .find(req.body)
            .toArray((err, documents) => { console.log("okey");
                console.dir(req.body);
                if (documents.length == 1)
                    res.end(JSON.stringify({"resultat": 1, "message": "Authentification réussie"}));
                else res.end(JSON.stringify({"resultat": 0, "message": "Email et/ou mot de passe incorrect"}));
            });
        } catch (e) {
            res.end(JSON.stringify({"resultat": 0, "message": e}));
        }
    });
});

 


console.log("SERVEUR LANCE !");

app.listen(8888); //cnx entre node et client
