require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path:__dirname+'/.env'})

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 const { STAGING_ALCHEMY_KEY, PROD_ALCHEMY_KEY, PRIVATE_KEY } = process.env

 module.exports = {
  solidity: '0.8.10',
  networks: {
    mumbai: {
      url: STAGING_ALCHEMY_KEY,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: PROD_ALCHEMY_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
};