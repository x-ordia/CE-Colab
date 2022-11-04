import Link from 'next/link'
import { FormEvent } from 'react'
import styles from '../styles/Home.module.scss'
import handler from "./api/form.js"

export default function SuggestForm() {
  // Handle the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Cast the event target to an html form
    // const form = event.target as HTMLFormElement

    // Get data from the form.
    const data = {
      id: form.target.id.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // // Send the form data to our API and get a response.
    // const response = await fetch('/api/form', {
    //   // Body of the request is the JSON data we created above.
    //   body: JSON.stringify(data),
    //   // Tell the server we're sending JSON.
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // The method is POST because we are sending data.
    //   method: 'POST',
    // })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this the product id: ${result.data}`)
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.suggest}>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" name="id" required />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export {SuggestForm};
