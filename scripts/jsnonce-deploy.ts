import { ethers, hardhatArguments } from "hardhat";

async function main() {
  let contract;
  let owner;
  if (hardhatArguments.network === 'localhost') {
    [owner] = await ethers.getSigners();
  }  else {
    owner = "0xEd3097B280eA1aa9F2A33A307E72467e3121076C"; // Account ETH I
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
