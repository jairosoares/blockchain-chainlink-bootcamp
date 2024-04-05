import { ethers, hardhatArguments } from "hardhat";

const ADDRESS_CONTRACT = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function main() {
  let account1;
  let account2;
  if (hardhatArguments.network === 'localhost') {
    [account1, account2] = await ethers.getSigners();
  }  else {
    account1 = "0xEd3097B280eA1aa9F2A33A307E72467e3121076C"; // Account ETH I
    account2 = "0x6369602078b1c7727fC25252Ed54a516d6115481"; // Account ETH II
  }
  console.log("Running in ", hardhatArguments.network);

  const jsNonceContract = await ethers.getContractAt("JSNonceToken", ADDRESS_CONTRACT);
  
  // Mint tokens to account1
  const amountToMint1 = ethers.parseUnits("230.00", 2);
  const tx1 = await jsNonceContract.mint(account1, amountToMint1);
  await tx1.wait();

  // Mint tokens to account1
  const amountToMint2 = ethers.parseUnits("369.00", 2);
  const tx2 = await jsNonceContract.mint(account2, amountToMint2);
  await tx2.wait();


  // Consultar saldo de tokens de account2
  const account1Balance = await jsNonceContract.balanceOf(account1);
  console.log(`Account 1 balance: ${ethers.formatUnits(account1Balance, 2)} tokens`);

  // Consultar saldo de tokens de account2
  const account2Balance = await jsNonceContract.balanceOf(account2);
  console.log(`Account 2 balance: ${ethers.formatUnits(account2Balance, 2)} tokens`);

  // Consultar o total de tokens em circulação
  const totalSupply = await jsNonceContract.totalSupply();
  console.log(`     Total supply: ${ethers.formatUnits(totalSupply, 2)} tokens`);

  // Consultar o número de casas decimais
  const decimals = await jsNonceContract.decimals();
  console.log(`         Decimals: ${decimals}`);

   // Obtém o valor da variável MINTER_ROLE do contrato
  const MINTER_ROLE_HASH = await jsNonceContract.MINTER_ROLE();
  console.log(" Hash MINTER_ROLE:", MINTER_ROLE_HASH);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
