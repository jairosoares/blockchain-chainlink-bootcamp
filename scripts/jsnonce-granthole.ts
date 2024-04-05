import { ethers, hardhatArguments } from "hardhat";

const ADDRESS_CONTRACT   = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; //JSNonceToken
const ADDRESS_TOKEN_SHOP = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"; //TokenShop

async function main() {
  
  console.log("Running in ", hardhatArguments.network);

  const jsNonceContract = await ethers.getContractAt("JSNonceToken", ADDRESS_CONTRACT);

   // Obtem o valor da variável MINTER_ROLE do contrato
  const role = await jsNonceContract.MINTER_ROLE();
  console.log(" Hash MINTER_ROLE:", role);

  const tx1 = await jsNonceContract.grantRole(role, ADDRESS_TOKEN_SHOP);
  await tx1.wait();
  console.log(`Role successfylly granted to account ${ADDRESS_TOKEN_SHOP}`);

  const hasRole = await jsNonceContract.hasRole(role, ADDRESS_TOKEN_SHOP);
  console.log(`Has role: ${hasRole}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
