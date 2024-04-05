import { ethers, hardhatArguments } from "hardhat";

const ets = process.env.ADDRESS_TOKEN_SHOP;
if (!ets ) {
  console.error("ADDRESS_TOKEN_SHOP is not defined in .env file");
  process.exit(1);
}
const ADDRESS_TOKEN_SHOP = ets;

function formatPrice(price: ethers.BigNumber): string {
  const formattedPrice = ethers.formatUnits(price, 8);
  const priceNumber = parseFloat(formattedPrice);
  const formattedPriceString = priceNumber.toFixed(2);
  return "$" + formattedPriceString;
}

async function main() {

  console.log("Running in", hardhatArguments.network);

  const [owner] = await ethers.getSigners();
  console.log(`Owner is : ${await owner.getAddress()}`);

  const tokenShopContract = await ethers.getContractAt("TokenShop", ADDRESS_TOKEN_SHOP);

  const tokenShopAddress = await tokenShopContract.getTokenAddress();
  console.log(`tokenAddress is : ${tokenShopAddress}`);
  
  // Get the latest ETH price
  const price = await tokenShopContract.getChainlinkDataFeedLatestAnswer();
  console.log(`ETH Price : ${formatPrice(price)}`);

  // Get the latest ETH price
  const tokenAmount = await tokenShopContract.tokenAmount(ethers.parseEther("0.01"));
  console.log(`TokenAmount formated: ${ethers.formatUnits(tokenAmount, 2)} tokens`);

  // Enviar Ether para o contrato
  console.log("Buying token...");
  const amountToSend = ethers.parseEther("0.01"); 
  const tx = await owner.sendTransaction({
    to: tokenShopContract.getAddress(),
    value: amountToSend,
  });
  await tx.wait();
  console.log("Token purchased!");
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
