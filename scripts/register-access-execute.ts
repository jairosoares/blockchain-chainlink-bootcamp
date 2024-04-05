import { ethers } from "hardhat";

const ADDRESS_CONTRACT = "0x3854E694E996C3D7469602d945f99d3101605e6F";

async function main() {

  const [owner, member1, member2, nonMember1] = await ethers.getSigners();
 
  const register = await ethers.getContractAt("RegisterAccess", ADDRESS_CONTRACT);
  console.log("  I - Info: ", await register.getInfo(0));
  
  const tx1 = await register.setInfo(0, "Olá Chainlink Maníacos!");
  await tx1.wait();
  console.log(" II - Info: ", await register.getInfo(0));

  const tx2 = await register.addMember(owner);
  await tx2.wait();

  const tx3 = await register.addInfo("Chainlink eh d+!");
  await tx3.wait();
  console.log(" New Info: ", tx3);

  const tx4 = await register.delMember(owner);
  await tx4.wait();
  console.log(" New Info: ", tx4);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
