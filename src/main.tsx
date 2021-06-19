// import './style.css'
import React from 'react'
import ReactDOM from 'react-dom'

import { Connection } from '@solana/web3.js'
console.log(Connection)
const NETWORK_URL_KEY = 'https://api.devnet.solana.com'
const connection = new Connection(NETWORK_URL_KEY)

console.log(connection.getRecentBlockhash().then((a) => console.log(a)))

ReactDOM.render(
  <React.StrictMode>
    <button
      type='button'
      onClick={() => {
        console.log(connection.getRecentBlockhash().then((a) => console.log(a)))
      }}
    >
      Test connection!
    </button>
  </React.StrictMode>,
  document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
