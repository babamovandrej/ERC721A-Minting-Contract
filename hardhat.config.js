/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
   solidity: "0.8.10",
   defaultNetwork: "rinkeby",
   networks: {
      hardhat: {},
      rinkeby: {
         //Insert the endpoint url below to connect to rinkeby
         url: "",
         accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
   },
}