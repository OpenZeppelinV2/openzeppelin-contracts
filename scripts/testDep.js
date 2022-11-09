const fs = require("fs");
const { ethers } = require("hardhat");
const routerAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
const factoryAddress = "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f"
const wETHAddress =  "0xc778417e063141139fce010982780140aa0cd5ab"
const teamAddress ='0x99990Ab0E073Ecf018ad5d6C4D1D0815Aa3D33A1'
const treasuryAddress = '0x767355382FcCC2C6E9b4C26CcbaA0398Dfb76bbD'
const  _psWallet = '0xfCbDdbe9DC61cB5e4Ebf6135C52be50B9cab0837'
const cmoAddress = '0xed564EF21C2A46FcA92fB9fF29cb5b53a10C90B0'
const gagToken = '0xf4CADC71D29bF796ECa9E793E1B59CB49afF833F'



console.log("\n\n\n")
// hh verify
console.log(`hh verify ${gagToken} "${teamAddress}" "${treasuryAddress}" "${cmoAddress}" "${_psWallet}"`)


