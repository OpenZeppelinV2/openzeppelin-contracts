const fs = require("fs");
const { ethers } = require("hardhat");
const routerAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
const factoryAddress = "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f"
const wETHAddress =  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"


const cont = "FlipKart"

const {
  parseEther,
  formatEther,
} = ethers.utils



async function main() {

  const nft = await ethers.getContractFactory(cont);
  const nftToken = await nft.deploy();


  console.log("nft Token Deploy TX HASH -->", nftToken.deployTransaction.hash)
  console.log("\n\n\n")
  
  await nftToken.deployed();
  const nftTokenAddress = nftToken.address
  await nftToken.deployTransaction.wait()
  console.log("nft deployed -->", nftToken.address, "\n")

  console.log("\n\n\n")
  console.log(`hh verify ${nftToken.address} --network rink`)
  console.log(" ");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  