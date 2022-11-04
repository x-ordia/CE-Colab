import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.scss'
// import '../styles/index.module.css';
import Pusher from 'pusher-js'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import Link from 'next/link';
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"

// import {router} from "next/client";
// import { Html, Main } from 'next/document'
//react index
// import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//end

interface IIndexProps {
  products: IProduct[]
}

export default function Home(props: IIndexProps) {
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  let allMessages = [];
  if (typeof window !== "undefined") {}

  useEffect(() => {
    Pusher.logToConsole = true;
    const pusher = new Pusher('361f7ef1d7f18076912c', {
      cluster: 'ap2'
    });
    const channel = pusher.subscribe('test');
    channel.bind('message', function(data) {
      allMessages.push(data);
      setMessages(allMessages);
    });
  })

  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/api/messages` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        message
      })
    });
    console.log(response);
    setMessage('');
  }

  //deleted :
  // <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
  // <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
  // <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

  return (
    <div className={styles.fullbody}>
      <Head>
        <title>Colab</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
      <Script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="ZDI1MWZjMjktMmU0My00Y2FkLWI0NjUtZTJiMDQyY2Y3MWQ1NjM4MDI2MjMyNDY4MDU1MTc1" id="snipcart" />
      <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <React.StrictMode>
        <App />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
        <script src="https://js.pusher.com/7.2/pusher.min.js"></script>
        <br />
        <div className={styles.bg}>
          <div className={styles.chat}>
            <div className={styles.chatdecoration}>
              <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                <span className={styles.chattop}>Enter username :</span>
                <input className={styles.input} placeholder='  Username' value={username} onChange={e => setUsername(e.target.value)}/>
              </div>

              <div className={styles.chatarea} style={{minHeight: "300px"}}>
                {messages.map(message => {
                  return(
                    <>
                      <div className={styles.message}>
                        <strong>{message.username}</strong>
                        <div className="col-10 mb-1 small">{message.message}</div>
                      </div>
                    </>
                  )
                })}
              </div>

              <form onSubmit={submit} className={styles.chatbottom}>
                <input className={styles.input} placeholder='Enter your message' value = {message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button type='submit' className={styles.button}> Send </button>
              </form>
            </div>
          </div>
          <ProductList products={props.products} />
        </div>
        </React.StrictMode>
      <Contact />
      <Footer />
      <script>var Alert = ReactBootstrap.Alert;</script>
    </div>
  )
}


Home.getInitialProps = async () => {
 return {
   products: [
     {id: "nextjs_halfmoon", name: "Halfmoon Betta", price: 25.00, image: "../static/photo.webp", description: "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees."} as IProduct,
     {id: "nextjs_dragonscale", name: "Dragon Scale Betta", price: 35, image: "../static/brown.jpg",description: "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor."} as IProduct,
     {id: "nextjs_crowntail", name: "Crowntail Betta", price: 7.50, image: "../static/smart.jpg", description: "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb."} as IProduct,
     {id: "nextjs_veiltail", name: "Veiltail Betta", price: 5.00, image: "../static/rolex.jpeg", description: "By far the most common betta fish. You can recognize it by its long tail aiming downwards."} as IProduct,
   ]
 }
}
