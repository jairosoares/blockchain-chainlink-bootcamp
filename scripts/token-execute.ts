import { ethers, hardhatArguments } from "hardhat";

const ac = process.env.ADDRESS_CONTRACT;
const a1 = process.env.ACCOUNT_ETH1;
if ( !ac  || !a1 ) {
  console.error("ADDRESS_CONTRACT | ACCOUNT_ETH1 is not defined in .env file");
  process.exit(1);
}
const ADDRESS_CONTRACT = ac;
const ACCOUNT_ETH1 = a1;

async function main() {
  let account1;
  let account2;
  if (hardhatArguments.network === 'localhost') {
    [account1, account2] = await ethers.getSigners();
  }  else {
    account1 = ACCOUNT_ETH1;
    account2 = ACCOUNT_ETH1;
  }
  
  console.log("Running in", hardhatArguments.network);

  const tokenContract = await ethers.getContractAt("JSNonceToken", ADDRESS_CONTRACT);
  
  // Mint tokens to account1
  const amountToMint1 = ethers.parseUnits("230.00", 2);
  const tx1 = await tokenContract.mint(account1, amountToMint1);
  await tx1.wait();

  // Mint tokens to account1
  const amountToMint2 = ethers.parseUnits("369.00", 2);
  const tx2 = await tokenContract.mint(account2, amountToMint2);
  await tx2.wait();


  // Consultar saldo de tokens de account2
  const account1Balance = await tokenContract.balanceOf(account1);
  console.log(`Account 1 balance: ${ethers.formatUnits(account1Balance, 2)} tokens`);

  // Consultar saldo de tokens de account2
  const account2Balance = await tokenContract.balanceOf(account2);
  console.log(`Account 2 balance: ${ethers.formatUnits(account2Balance, 2)} tokens`);

  // Consultar o total de tokens em circulação
  const totalSupply = await tokenContract.totalSupply();
  console.log(`     Total supply: ${ethers.formatUnits(totalSupply, 2)} tokens`);

  // Consultar o número de casas decimais
  const decimals = await tokenContract.decimals();
  console.log(`         Decimals: ${decimals}`);

   // Obtém o valor da variável MINTER_ROLE do contrato
  const MINTER_ROLE_HASH = await tokenContract.MINTER_ROLE();
  console.log(" Hash MINTER_ROLE:", MINTER_ROLE_HASH);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
