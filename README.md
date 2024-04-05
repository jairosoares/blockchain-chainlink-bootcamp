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

# ERC20 Token
npx hardhat run scripts/jsnonce-deploy.ts --network localhost
npx hardhat run scripts/tokenshop-deploy.ts --network localhost

npx hardhat run scripts/jsnonce-execute.ts --network localhost
npx hardhat run scripts/jsnonce-granthole.ts --network localhost

npx hardhat run scripts/tokenshop-execute.ts --network localhost
