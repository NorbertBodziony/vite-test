// import './style.css'
import { Connection } from '@solana/web3.js'
console.log(Connection)
const NETWORK_URL_KEY = 'http://localhost:8899'
const connection = new Connection(NETWORK_URL_KEY)

const app = document.querySelector<HTMLDivElement>('#app')!
const btn = document.querySelector('connect')

btn?.addEventListener('click', async () => {
  let { blockhash } = await connection.getRecentBlockhash()
  console.log(blockhash)
})

app.innerHTML = `
<h1>Test web3 connection</h1>
<button type="button" id="connect">Test connection!</button>
`
