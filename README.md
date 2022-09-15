# NFT_Minting_Contract
Solidity smart contract in compliance with the ERC721A standard for batch minting.

The NFT_Minting_Contract repository contains smart contracts that, when deployed on a solidity based blockchain, can be used for nft minting.

### Firstly, you will need to install some dependencies in your repository. You can do so by running the commands below:

```
npm i hardhat
npm i @nomiclabs/hardhat-ethers
npm i dotenv
npm i hardhat
```
### Furthermore, you will need to install the openzeppelin package that contains contract interfaces needed to build the smart contract.

```
npm i @openzeppelin/contracts
```
### After completing the above steps, you will need to obtain the private key from your wallet, and update the .env file in the repostiory.
Currently the .env file contains a single variable PRIVATE_KEY. You will need to assign your private key to the variable. Make sure to save the changes, otherwise it will be impossible to deploy the contract.

```
PRIVATE_KEY = Insert_your_private_key_here
```

### Next, you will have to update the network url in the hardhat.connfig.js file. 

More specifically, you will need to connect to a endpoint on the rinkeby test network. You can obtain a link to the endpoint from https://infura.io/. Keep in mind that if you want to deploy on a network other than rinkeby, you will have to add the other network to module.exports. It is also important to clarify that the private key is also needed. If you want to add it directly to module exports, keep in mind that you will need to add '0x' at the beggining. Here is an example below were I added the option to deploy to ethereum mainnet:

```
module.exports = {
   solidity: "0.8.10",
   defaultNetwork: "mainnet",
   networks: {
      hardhat: {},
      rinkeby: {
         url: "",
         accounts: [`0x${process.env.PRIVATE_KEY}`]
      },
      mainnet: {
          url: "",
          accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
   },
}
```
### Additionally, you will need to add the contract constructor arguments to the deploy.js script in scripts. After doing so, you will need to compile the contracts using the code below:
```
npx hardhat compile
```
### Lastly, you can deploy the contract to the rinkeby testnet by runnning the following command:

```
npx hardhat run scripts/deploy.js --network rinkeby
```
If you are deploying to a different network you will have to change the name of the network in the command above.
