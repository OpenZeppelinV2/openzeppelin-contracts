async function main() {


  const prox = "0x1e8E62B7C75ee1a11a04541B58C32f91FBB84aEF"
  const Contract2 = await hre.ethers.getContractFactory("PANTHR");



  const contract2 = await Contract2.deploy(prox, "0x8129fc1c", {gasPrice: 20000000000}); // 50gwei
  console.log("depoloying proxy ");
  await contract2.deployed();
  console.log(contract2.address);
  console.log(" ");


  console.log("mox --> ", contract2.address);
  console.log(" ");
  console.log(" ");
  console.log("hh verify ", contract2.address, " --network rink");
  console.log(" ");
}

// ["0x3663f45bbbb2851b60407c1cae03f2d0dc860a21","0xe19abd85a10aa5321796506c2a80c3bc35ed8b00"]

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
