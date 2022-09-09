async function main() {
    
    // Grab the contract factory 
    const NFT_Mint = await ethers.getContractFactory("NFT_Mint");
 
    // Start deployment, returning a promise that resolves to a contract object
    const TEST = await NFT_Mint.deploy(); // Instance of the contract 
    console.log("Contract deployed to address:", TEST.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });