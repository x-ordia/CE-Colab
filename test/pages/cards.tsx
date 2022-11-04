
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'
// import ListGroup from 'react-bootstrap/ListGroup';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.scss'
// import {ProductDetail} from './productDetails.js'
import Link from 'next/link';
// import { SuggestForm } from './form'
// import handler from "./api/form.js"
import Head from "next/head"
import Script from "next/script"

//deleted
// main div - className="mt-5 d-grid gap-4 ps-5"
//card title, add to cart - className='mt-2'

// var MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server;
//
// var mongoClient = new MongoClient(new Server('localhost', 27017));
// mongoClient.open(function(err, mongoClient) {
//   var db1 = mongoClient.db("Colab");
//   var myobj = { name: "Europe", country: "Spain" };
//   db1.collection("continents").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
//   mongoClient.close();
// });

export default function Cardsss() {

  // async function suggestHandler(enteredData) {
  //   const response = await fetch("/api/form", {
  //     method: "POST",
  //     body: JSON.stringify(enteredData),
  //     headers:
  //     {
  //       "Content-Type":
  //       "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // }
  // const [id, setid] = useState('');
  // const [allid, setallid] = useState([]);
  // let allidarray = [];
  // if (typeof window !== "undefined") {}

  // useEffect(() => {
  //   var mysql = require('mysql');
  //   var con = mysql.createConnection({
  //     host: "localhost",
  //     user: "root",
  //     password: "",
  //     database: "colab"
  //   });
  //   // var set;
  //   // set.bind('id', function(data) {
  //   //   allidarray.push(data);
  //   //   setallid(allid);
  //   // });
  // })

  // const suggest = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch(`http://localhost:8000/api/suggest` ,{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       id
  //     })
  //   });
  //   console.log(response);
  //   setid('');
  // }

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
  //   var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("1 record inserted");
  //   });
  // });

  //deleted form for suggest button
  // <form>
  //   <input type="number" placeholder="id" name="id" min="1" max="3" required/>
  //   <button type="submit" onClick={suggestHandler}>Suggest</button>
  // </form>
  // <SuggestForm />

// body
// <Card style={{ display: 'flex', flexDirection: 'row',width: '50rem' }} >
//   <Card.Img style={{ width: '10rem' }} src="https://i5.walmartimages.com/asr/d63cc29a-1802-4b13-bee5-30f1f03435e7.ef5de3226a1d75ce0e8dd94e4f79eaca.jpeg" fluid="true" />
//   <Card.Body >
//     <Card.Title>Product title</Card.Title>
//     <Card.Text>
//       Produc description product description product description
//     </Card.Text>
//     <button href="#" className={styles.button} >Add to cart</button> {' '}
//     <button className={styles.button} ><Link href="/productDetails" className={styles.Link}>Buy now</Link></button> {' '}
//     <button href="#" className={styles.button} >Suggest</button>
//   </Card.Body>
// </Card>
//
// <Card style={{ display: 'flex', flexDirection: 'row',width: '50rem' }} >
//   <Card.Img style={{ width: '10rem' }} src="https://i5.walmartimages.com/asr/d63cc29a-1802-4b13-bee5-30f1f03435e7.ef5de3226a1d75ce0e8dd94e4f79eaca.jpeg" fluid="true" />
//   <Card.Body >
//     <Card.Title>Product title</Card.Title>
//     <Card.Text>
//       Produc description product description product description
//     </Card.Text>
//     <button href="#" className={styles.button} >Add to cart</button> {' '}
//     <button className={styles.button} ><Link href="/productDetails" className={styles.Link}>Buy now</Link></button> {' '}
//     <button href="#" className={styles.button} >Suggest</button>
//   </Card.Body>
// </Card>
//
// <Card style={{ display: 'flex', flexDirection: 'row',width: '50rem' }} >
//   <Card.Img style={{ width: '10rem' }} src="https://i5.walmartimages.com/asr/d63cc29a-1802-4b13-bee5-30f1f03435e7.ef5de3226a1d75ce0e8dd94e4f79eaca.jpeg" fluid="true" />
//   <Card.Body >
//     <Card.Title>Product title</Card.Title>
//     <Card.Text>
//       Produc description product description product description
//     </Card.Text>
//     <button href="#" className={styles.button} >Add to cart</button> {' '}
//     <button className={styles.button} ><Link href="/productDetails" className={styles.Link}>Buy now</Link></button> {' '}
//     <button href="#" className={styles.button} >Suggest</button>
//   </Card.Body>
// </Card>

  return (
    <div style={{ float: 'left' }} className="mt-6 d-grid gap-4 ps-5">

    </div>
   );
 }

//  Cardsss.getInitialProps = async () => {
//   return {
//     products: [
//       {id: "nextjs_halfmoon", name: "Halfmoon Betta", price: 25.00, image: "../static/halfmoon.jpg", description: "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees."} as IProduct,
//       {id: "nextjs_dragonscale", name: "Dragon Scale Betta", price: 35, image: "../static/dragonscale.jpg",description: "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor."} as IProduct,
//       {id: "nextjs_crowntail", name: "Crowntail Betta", price: 7.50, image: "../static/crowntail.jpg", description: "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb."} as IProduct,
//       {id: "nextjs_veiltail", name: "Veiltail Betta", price: 5.00, image: "../static/veiltail.jpg", description: "By far the most common betta fish. You can recognize it by its long tail aiming downwards."} as IProduct,
//     ]
//   }
// }

 export {Cardsss};
