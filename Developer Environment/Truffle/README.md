# Truffle for developing and deploying Smart Contracts

## Ganache

Ganache is a personalised blockchain. This helps in understanding about each block creation. 
Ganache is a local development blockchain used to develop decentralized applications on the Ethereum blockchain. It simulates the Ethereum network, and you can see how your DApp will perform before you release it to production.
Typically, to start developing distributed applications on the Ethereum network, you will need to set up an Ethereum client such as Geth or OpenEthereum to provide you access to an Ethereum Virtual Machine (EVM).

Although that is a great way to develop distributed applications on Ethereum, it is not the most efficient and user-friendly approach, as you need to configure these clients manually and keep them running. Maintaining a self-hosted node can be expensive and time-consuming, you don’t want to spend valuable time troubleshooting a failed node during development.

With Ganache, all you need to do is start the application and you have a preconfigured Ethereum client with 10 pre-funded and unlocked accounts ready for use. This allows you to quickly test your DApp throughout your development cycle.

## How to install Ganache?

1. [Install npm & nodejs](https://nodejs.org/en/)
2. Install ganache globally by running ``` npm install ganache --global ```
3. Or you can install ganache directly using this [link](https://trufflesuite.com/ganache/)

## How to use Ganache?

1. Open Ganache environment in your local machine
![ganache](https://github.com/Web3-courses/Uniswap-Bootcamp/blob/main/Images/Screenshot%202023-01-13%20at%2010.20.51.png)

2. Go to **Quickstart** for quick version of blockchain setup.
3. You will get 10 wallets automatically with mnemonic phrase.
4. Go to **Blocks** to see the blocks mined.
5. Go to **Transactions** to see the txns happened.
6. Go to **Contracts** to see the details about contracts.
7. Go to **Events** to see the emits.
8. Go to **Logs** to have a look at the Logs. 

## How to connect Ganache with metamask?

1. Go to **Add Network**
![add network](https://github.com/Web3-courses/Uniswap-Bootcamp/blob/main/Images/Screenshot%202023-01-13%20at%2011.00.21.png)
<hr>

2. Click on **Add Network Manually**
![add network manually](https://github.com/Web3-courses/Uniswap-Bootcamp/blob/main/Images/Screenshot%202023-01-13%20at%2011.02.20.png)
<hr>

3. Enter the details accordingly in the fields
![details](https://github.com/Web3-courses/Uniswap-Bootcamp/blob/main/Images/Screenshot%202023-01-13%20at%2011.06.16.png)
**You can get the details from the ganache dashboard**
<hr>

4. Add your private key of the ganache account to the metamask add account <br/>
![add account](https://github.com/Web3-courses/Uniswap-Bootcamp/blob/main/Images/Screenshot%202023-01-13%20at%2011.12.21.png)
<hr/>

## How to work with truffle?

[Truffle suite](https://trufflesuite.com/)
Truffle is a development environment, testing framework, and asset pipeline for Ethereum, aiming to make life as an Ethereum developer easier. With Truffle you get:

- Built-in smart contract compilation, linking, deployment and binary management.
- Automated contract testing with Mocha and Chai.
- Configurable build pipeline with support for custom build processes.
- Scriptable deployment & migrations framework.
- Network management for deploying to many public & private networks.
- Interactive console for direct contract communication.
- Instant rebuilding of assets during development.
- External script runner that executes scripts within a Truffle environment.


### Installing truffle

1. Installing
> npm install -g truffle

**create a folder or clone a project and inside the project, try to use tihs command**

2. Initializing
> truffle init

