const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const mongodb = require('mongodb');

    const app = express();
    app.use(cors())
    app.use(bodyParser.json());


    const MongoClient = mongodb.MongoClient;
    const url = "mongodb://localhost:27017/recart";


    const InsertOne = () => {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            var myobj = { name: "Company Inc", address: "Highway 37" };
            dbo.collection("customers").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
            });
        });
    }




    app.get("/" , (req, res) => {
        InsertOne()
        res.send('hello')
    })

    app.listen(process.env.PORT || 3000, ()=> {
        console.log(`App is running on port http://localhost:3000`);
    })