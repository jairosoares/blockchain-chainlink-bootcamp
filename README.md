# Sample Bootcamp Projects

This project demonstrates...

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

# View Chainlink folder to bootcamp

npm install -D @openzeppelin/contracts
npm install -D @chainlink/contracts

# Sepolia Etherscan
https://sepolia.etherscan.io/

# Deploying
npx hardhat run scripts/register-deploy.ts --network localhost
npx hardhat run scripts/register-execute.ts --network localhost

npx hardhat run scripts/register-access-deploy.ts --network localhost
npx hardhat run scripts/register-access-execute.ts --network localhost

1) Deploy the contracts
npx hardhat run scripts/token-deploy.ts --network localhost
npx hardhat run scripts/tokenshop-deploy.ts --network localhost
2) Update .env.ADDRESS_CONTRACT and .env.ADDRESS_TOKEN_SHOP with copy generated address above
npx hardhat run scripts/token-granthole.ts --network localhost
npx hardhat run scripts/token-execute.ts --network localhost
3) Execute token shop tasks
npx hardhat run scripts/tokenshop-execute.ts --network localhost
4) Show the balances
npx hardhat run scripts/balances.ts --network localhost