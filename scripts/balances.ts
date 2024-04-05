import { ethers, hardhatArguments } from "hardhat";

const ets = process.env.ADDRESS_TOKEN_SHOP;
const ac = process.env.ADDRESS_CONTRACT;
if (!ets || !ac ) {
  console.error("ADDRESS_TOKEN_SHOP | ADDRESS_CONTRACT is not defined in .env file");
  process.exit(1);
}
const ADDRESS_TOKEN_SHOP = ets;
const ADDRESS_CONTRACT = ac;

async function main() {
  
  console.log("Running in", hardhatArguments.network);

  const tokenShopContract = await ethers.getContractAt("TokenShop", ADDRESS_TOKEN_SHOP);
  const jsNonceContract = await ethers.getContractAt("JSNonceToken", ADDRESS_CONTRACT);

  const b1 = await jsNonceContract.balanceOf(ADDRESS_CONTRACT);
  console.log(" Balance of Token:", ethers.formatEther(b1));

  const b2 = await jsNonceContract.balanceOf(ADDRESS_TOKEN_SHOP);
  console.log(" Balance of TokenShop:", ethers.formatEther(b2));

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
