import { ethers } from "hardhat";

const ADDRESS_CONTRACT = "0x5aD19bB68C552ddC130Bcb397e794cb33840649B";

async function main() {

  const register = await ethers.getContractAt("Register", ADDRESS_CONTRACT);
  console.log("  I - Info: ", await register.getInfo());

  await register.setInfo("Olá Chainlink Maníacos!")
  console.log(" II - Info: ", await register.getInfo());

  await register.setInfo("Valeu Solange, tudo muito show!")
  console.log("III - Info: ", await register.getInfo());
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
