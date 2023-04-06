/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = "d3ed47c9043c4085bec5b55b525aa862";
const SEPOLIA_PRIVATE_KEY = "bc9b40ff49221c831251dab088fd5de3cc5b2ea60f50ffe71e8cbb08ea6cf1e9";

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
