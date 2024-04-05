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

  const tokenContract = await ethers.getContractAt("JSNonceToken", ADDRESS_CONTRACT);

   // Obtem o valor da variável MINTER_ROLE do contrato
  const role = await tokenContract.MINTER_ROLE();
  console.log(" Hash MINTER_ROLE:", role);

  const tx1 = await tokenContract.grantRole(role, ADDRESS_TOKEN_SHOP);
  await tx1.wait();
  console.log(`Role successfylly granted to account ${ADDRESS_TOKEN_SHOP}`);

  const hasRole = await tokenContract.hasRole(role, ADDRESS_TOKEN_SHOP);
  console.log(`Has role: ${hasRole}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
