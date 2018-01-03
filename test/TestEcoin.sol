pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/ECoin.sol";

contract TestECoin {

  function testInitialBalanceUsingDeployedContract() {
    ECoin meta = ECoin(DeployedAddresses.ECoin());

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 ECoin initially");
  }

  function testInitialBalanceWithNewECoin() {
    ECoin meta = new ECoin();

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 ECoin initially");
  }

}
