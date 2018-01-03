# Ethereum Truffle Sample

This project is an example dapp to showcase use of etherum and truffle framework on local ethereum network.
The use case is of C2C product purchase - One individual buys a product online from another individual.
The contract holds the Item information, cost of the item, shipping infomration and shipping cost.
Based on the role of the person in contract, certain information and actions are available.
- Once the item is picked, carrier will get the payment via eCoin cryptocurrency from shipper's account.
- One the item is delivered, automatic payment will be sent from receivers's ethereum account to shipper's ethereum account (price of item and shipping cost) via eCoin.

This example takes care of happy scenario and skips negative complicated scenarios like, low balance to make payments etc.


## Installation
cd ethereum-truffle

1. Install truffle and an ethereum client. For local development, try EthereumJS TestRPC.
    ```javascript
    npm install -g truffle // Version 3.0.5+ required.
    ```


2. Run local Ethereum network
    npm install ethereumjs-testrpc web3@0.20.1
    node_modules/.bin/testrpc

4. Compile and migrate the contracts.
    ```javascript
    truffle compile
    truffle migrate
    ```

5. Run the `liteserver` development server for front-end hot reloading. For now, smart contract changes must be manually recompiled and migrated.
    ```javascript
    npm run dev
    ```