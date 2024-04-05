import { ethers, hardhatArguments } from "hardhat";


const a1 = process.env.ACCOUNT_ETH1;
if ( !a1 ) {
  console.error("ACCOUNT_ETH1 is not defined in .env file");
  process.exit(1);
}
const ACCOUNT_ETH1 = a1;

async function main() {
  let contract;
  let owner;
  if (hardhatArguments.network === 'localhost') {
    [owner] = await ethers.getSigners();
  }  else {
    owner = ACCOUNT_ETH1; 
  }
  console.log("Running in ", hardhatArguments.network);

  contract = await ethers.deployContract("JSNonceToken", [owner, owner]);

  console.log("Deploying...");
  await contract.waitForDeployment();
  console.log(`Contract deployed to ${contract.target}`);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
