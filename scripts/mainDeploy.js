const fs = require("fs");
const { ethers } = require("hardhat");
const routerAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
const factoryAddress = "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f"
const wETHAddress =  "0xc778417e063141139fce010982780140aa0cd5ab"
const teamAddress ='0x99990Ab0E073Ecf018ad5d6C4D1D0815Aa3D33A1'
const treasuryAddress = '0x767355382FcCC2C6E9b4C26CcbaA0398Dfb76bbD'
const  _psWallet = '0xfCbDdbe9DC61cB5e4Ebf6135C52be50B9cab0837'
const cmoAddress = '0xed564EF21C2A46FcA92fB9fF29cb5b53a10C90B0'








const cont = "GAGGLE"





const {
  parseEther,
  formatEther,
} = ethers.utils
const args = [teamAddress, treasuryAddress, cmoAddress , _psWallet]



// const args = ["0x99990Ab0E073Ecf018ad5d6C4D1D0815Aa3D33A1", "0x99990Ab0E073Ecf018ad5d6C4D1D0815Aa3D33A1"]
// const sargs = "'0x99990Ab0E073Ecf018ad5d6C4D1D0815Aa3D33A1' '0x99990Ab0E073Ecf018ad5d6C4D1D0815Aa3D33A1'";



async function main() {

  const factory = await ethers.getContractAt("IPancakeFactory", factoryAddress);
  
  // console.log("Deploying GAG to ETH Mainnet with the account:", deployerAddress)
  // console.log("Account balance:", (await deployer.getBalance()).toString(), "\n");
  
  const daoContractAddress = "0x998ce591aC8a8458Eb18E7aB0542B1EBE55Aa853"
  const opsWallet = "0x998ce591aC8a8458Eb18E7aB0542B1EBE55Aa853"
  
  // deploy GAG contract
  const GAG = await ethers.getContractFactory(cont);
  const gagToken = await GAG.deploy();


  console.log("GAG Token Deploy TX HASH -->", gagToken.deployTransaction.hash)
  console.log("\n\n\n")
  
  await gagToken.deployed();
  const gagTokenAddress = gagToken.address
  await gagToken.deployTransaction.wait()
  console.log("GAG deployed -->", gagToken.address, "\n")

  // // create GAG x wETH pair with PCS factory
  // const createPairTx = await factory.createPair(gagTokenAddress, wETHAddress);
  // console.log("Create Pair TX HASH -->", createPairTx.hash)
  // const receipt = await createPairTx.wait()
  // const pairAddress = receipt.events[0].args[2]
  // console.log("Pair created -->", pairAddress, "\n")

  // console.log("\n\n\n")  // call after pair is created

  // const receipt2 = await gagToken.setTokenPairAddress(pairAddress)
  // console.log("Pair set -->", receipt2.hash)



//   // extremely important, disable pair contract from receiving reflect
//  const rec = await gagToken.excludeAccount(pairAddress)
//   console.log("Pair excluded -->", rec.hash)
  console.log("\n\n\n")
  // hh verify
  console.log(`hh verify ${gagToken.address} --network mainnet`)


    


  console.log(" ");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


// 0x163bA1b8559b6FEa00955Caf98eE676ECC8aB951

  