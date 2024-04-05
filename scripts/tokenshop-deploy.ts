import { ethers } from "hardhat";

const ac = process.env.ADDRESS_CONTRACT;
if (!ac ) {
  console.error("ADDRESS_CONTRACT is not defined in .env file");
  process.exit(1);
}
const ADDRESS_CONTRACT = ac;


async function main() {
  const tokenShopContract = await ethers.deployContract("TokenShop", [ADDRESS_CONTRACT]);

  console.log("Deploying...");
  await tokenShopContract.waitForDeployment();
  console.log(`Contract deployed to ${tokenShopContract.target}`);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
