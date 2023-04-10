/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = "d3ed47c9043c4085bec5b55b525aa862";
const SEPOLIA_PRIVATE_KEY = "f74612dfc657a7687f97324a5a9469441fe719a0bd590c4d6f84bfea72e73d48";

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
