const hre = require('hardhat');

async function main() {
    
    // Grab the contract factory 
    const NFT_Mint = await hre.ethers.getContractFactory("NFT_Mint");
    const TEST = await NFT_Mint.deploy("",""); //Add constructor arguments to deploy function
    console.log("Contract deployed to address:", TEST.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });

   