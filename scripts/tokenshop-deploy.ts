import { ethers } from "hardhat";

const ADDRESS_TOKEN_CONTRACT = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

async function main() {
  const contract = await ethers.deployContract("TokenShop", [ADDRESS_TOKEN_CONTRACT]);

  console.log("Deploying...");
  await contract.waitForDeployment();
  console.log(`Contract deployed to ${contract.target}`);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
