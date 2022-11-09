async function main() {
  const Contract = await hre.ethers.getContractFactory("TTT");

 const args = ["0x998ce591aC8a8458Eb18E7aB0542B1EBE55Aa853", "0x998ce591aC8a8458Eb18E7aB0542B1EBE55Aa853"]



 const sargs = "'0x998ce591aC8a8458Eb18E7aB0542B1EBE55Aa853' '0x998ce591aC8a8458Eb18E7aB0542B1EBE55Aa853'";
  const contract = await Contract.deploy(args[0], args[1]);



  console.log("depoloying token ");
  await contract.deployed();
  console.log(contract.address);
  console.log(" ");



  console.log("token --> ", contract.address);

  console.log(" ");
  console.log(" ");
    // create LFG x wETH pair with PCS factory
    const createPairTx = await factory.createPair(lfgTokenAddress, wETHAddress);
    console.log("Create Pair TX HASH -->", createPairTx.hash)
    const receipt = await createPairTx.wait()
    const pairAddress = receipt.events[0].args[2]
    console.log("Pair created -->", pairAddress, "\n")
  
    // call after pair is created
    await lfgToken.setTokenPairAddress(pairAddress)
  
    // extremely important, disable pair contract from receiving reflect
    await lfgToken.excludeAccount(pairAddress)

  console.log("hh verify ", contract.address, sargs ,  " --network rink");

  console.log(" ");
}

// ["0x3663f45bbbb2851b60407c1cae03f2d0dc860a21","0xe19abd85a10aa5321796506c2a80c3bc35ed8b00"]

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
