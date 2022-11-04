const express = require('express')
const cors = require('cors')
const Pusher = require("pusher");
const bodyParser = require('body-parser')
// const MongoClient = require('mongodb').MongoClient
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://root:dBV0OloLbkEXCOat@clustercolab.r84qbtw.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// var mysql = require('mysql');

const pusher = new Pusher({
  appId: "1485915",
  key: "361f7ef1d7f18076912c",
  secret: "c6661aa30ab1861630e7",
  cluster: "ap2",
  useTLS: true
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))

app.use(express.json())

app.post('/api/messages', async (req, res) => {
    await pusher.trigger("test", "message", {
        username: req.body.username,
        message: req.body.message
    });
    res.json([]);
})

// app.post('/api/suggest', async (req, res) => {
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "colab"
//   });
//   const data = req.body;
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO customers (name, address) VALUES (?,?)";
//     const result = con.query(sql, data.id, data.id, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });
//   res.status(201).json({ message: "Data inserted successfully!" });
// })

// client.connect(err => {
//   const database = client.db("Carts");//.collection("Suggestions");
//   const collection = database.collection('Suggestions');
//   // perform actions on the collection object
//   console.log("Successful mongodb connection!!");
//   app.post('/suggest', (req, res) => {
//     quotesCollection.insertOne(req.body)
//       .then(result => {
//         console.log("inserted");
//         res.redirect('/')
//       })
//       .catch(error => console.error(error))
//   })
//   client.close();
// });


// MongoClient.connect(uri, { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to Database')
//     const db = client.db('Carts')
//   })

// var mysql = require('mysql');
//
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "colab"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE DATABASE colab";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

console.log('listening to port 8000');
app.listen(8000)
