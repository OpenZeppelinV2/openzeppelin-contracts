async function main() {
  const Contract = await hre.ethers.getContractFactory("Zyzzl");
  const Contract2 = await hre.ethers.getContractFactory("Mox");
  const contract = await Contract.deploy();

  console.log("depoloying token ");
  await contract.deployed();
  console.log(contract.address);
  console.log(" ");

  const contract2 = await Contract2.deploy(contract.address, "0x8129fc1c");
  console.log("depoloying proxy ");
  await contract2.deployed();
  console.log(contract2.address);
  console.log(" ");


  console.log("token --> ", contract.address);
  console.log("mox --> ", contract2.address);
  console.log(" ");
  console.log(" ");

  console.log("hh verify ", contract.address, " --network rink");
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
