const { ethers } = require("hardhat");


const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/2be567dce95f4ed2b765cea1e793a26a");



async function main() {
  const  gasPrice = await provider.getGasPrice()
  console.log("gasPrice --> ",  ethers.utils.formatUnits(gasPrice, 'gwei'));

  const Contract = await hre.ethers.getContractFactory("666");
  const contract = await Contract.deploy({gasPrice: 20000000}); // 50gwei

  const Contract2 = await hre.ethers.getContractFactory("BLUE");
  const contract2 = await Contract2.deploy(contract.address); // 50gwei
  
  console.log("depoloying token 1 ");
  await contract.deployed();
  console.log(contract.address);
  console.log(" ");
  console.log("depoloying token 2 ");
  await contract2.deployed();
  console.log(contract2.address);
  console.log(" ");




  console.log("token 1 --> ", contract.address);
  console.log("token 2 --> ", contract2.address);
  console.log(" ");
  console.log(" ");

  console.log("hh verify ", contract.address, " --network g");
  console.log("hh verify ", contract2.address, "--network g");
  

  console.log(" ");
}

// ["0x3663f45bbbb2851b60407c1cae03f2d0dc860a21","0xe19abd85a10aa5321796506c2a80c3bc35ed8b00"]

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
