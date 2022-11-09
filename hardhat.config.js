require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");

require("dotenv").config();

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL;
const G_RPC_URL = process.env.G_RPC_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const BSC_API = process.env.BSC_API;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const BSCTEST_RPC_URL = process.env.BSCTEST_RPC_URL;
const BSC_URL = process.env.BSC_URL;

module.exports = {
  defaultNetwork: "g",
  networks: {
    hardhat: {
      // If you want to do some forking, uncomment this
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/5SUKt3iWyki7QYJ2nlfcGKEXfBZ3IS_d",
      },
    },
    localhost: {},
    bscTest: {
      url: BSCTEST_RPC_URL,
      gasPrice: 50000000000,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
    },
    bsc: {
      url: BSC_URL,
      gasPrice: 50000000000,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
    },
    g: {
      url: G_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
    },
    mainnet: {
      url: MAINNET_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
    },
  },

  gasReporter: {
    currency: "USD",
    gasPrice: 21,
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY,
  },

  solidity: {
    compilers: [
      //  {
      //      version: "0.8.9"
      //  },

      {
        version: "0.8.13",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.15",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },     
       {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },

      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },

      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.4.23",
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};

// npx hardhat node --fork https://eth-mainnet.alchemyapi.io/v2/5SUKt3iWyki7QYJ2nlfcGKEXfBZ3IS_d
