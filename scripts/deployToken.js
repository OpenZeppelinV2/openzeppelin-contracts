const { ethers } = require("hardhat");


const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/fdb838ca64104d919ab943e55bbb6ab9")
const TOKEN_ADDRESS = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
const GRASSHOUSE_ADDRESS = "0xb3A8C16FA4ae6fC07A49a791CE7711541ca61a9a";
const VAULT_ADDRESS = "0x950Cb0357c2386ffCCA8797Ce712D5C9f7067726";
const ROUTER_ADDRESS = "0x10ed43c718714eb63d5aa57b78b54704e256024e";
const REMAINING = ethers.utils.parseEther("62471.062297587444765624");
const SPLITBPS = "5000";
const REWARD_PATH= ["0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", "0xbE1Eb8ec9008b2fCBE2945536EB6F74b13f52Ba7"];
const VAULT_SWAP_PATH = ["0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"];

async function main() {
  const Contract = await hre.ethers.getContractFactory("RevenueTreasury");
  // const Contract2 = await hre.ethers.getContractFactory("PANTHR");
  const contract = await Contract.deploy(
    // TOKEN_ADDRESS,
    // GRASSHOUSE_ADDRESS,
    // REWARD_PATH,
    // VAULT_ADDRESS,
    // VAULT_SWAP_PATH,
    // ROUTER_ADDRESS,
    // REMAINING,
    // SPLITBPS
  )

  


 const  gasPrice = await provider.getGasPrice()
  console.log("gasPrice --> ",  ethers.utils.formatEther(gasPrice));
  
  console.log("depoloying token ");
  await contract.deployed();
  console.log(contract.address);
  console.log(" ");

  // const contract2 = await Contract2.deploy(contract.address, "0x8129fc1c");
  // console.log("depoloying proxy ");
  // await contract2.deployed();
  // console.log(contract2.address);
  // console.log(" ");


  console.log("token --> ", contract.address);
  // console.log("mox --> ", contract2.address);
  console.log(" ");
  console.log(" ");

  console.log("hh verify ", contract.address, " --network bscTest");
  // console.log("hh verify ", contract2.address, " --network rink");
  console.log(" ");
}

// ["0x3663f45bbbb2851b60407c1cae03f2d0dc860a21","0xe19abd85a10aa5321796506c2a80c3bc35ed8b00"]

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
