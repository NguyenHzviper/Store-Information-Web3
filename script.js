import { ethers } from "./ethers-v5.6.js"
import { abi, contractAddress } from "./constants.js"

const connectButton = document.getElementById("connectWallet")
connectButton.onclick = connect
const storeButton = document.getElementById("storeButton")
storeButton.onclick = store

async function connect() {
   await ethereum.request({ method: "eth_requestAccounts" }).catch((error) => {
      if (error.code === 4001) {
         // EIP-1193 userRejectedRequest error
         document.getElementById("requestConnect").innerHTML =
            "Please connect to Metamask wallet"
      } else {
         console.error(error)
      }
   })
   await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x4" }], // chainId must be in hexadecimal numbers
   })

   const provider = new ethers.providers.Web3Provider(window.ethereum)
   const singer = provider.getSigner()
   const address = await singer.getAddress()
   document.getElementById(
      "walletAddress"
   ).innerHTML = `Wallet address: ${address}`
}
var ID = 0

function refreshTime() {
   const timeDisplay = document.getElementById("time")
   const dateString = new Date().toLocaleString()
   const formattedString = dateString.replace(", ", " - ")
   timeDisplay.textContent = formattedString
}
setInterval(refreshTime, 1000)

async function store() {
   if (typeof window.ethereum != "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, abi, signer)
      let currentdate = new Date().toLocaleString()
      const datetime = currentdate.replace(", ", " - ")

      let dataInput = document.getElementById("dataInput").value
      console.log(datetime, dataInput)
      const transactionResponse = await contract.addStraw(datetime, dataInput)
      await listenTransactionMine(transactionResponse, provider)
      console.log("Done!")
      //Update table
      const valueUpdate = `<tr><th scope=row>${ID}</th><td>${datetime}</td><td>${dataInput}</td><td><a target=blank href=https://rinkeby.etherscan.io/tx/${transactionResponse.hash} >View in Blockscan</a></td></tr>`
      document.getElementById("lastUpdate").innerHTML += valueUpdate
      ID++
   }
}

function listenTransactionMine(transactionResponse, provider) {
   return new Promise((resolve, reject) => {
      provider.once(transactionResponse.hash, (transactionReceipt) => {
         console.log(`Mining: ${transactionResponse.hash}`)
         resolve()
      })
   })
}
