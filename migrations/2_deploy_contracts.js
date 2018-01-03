var ConvertLib = artifacts.require("./ConvertLib.sol");
var ECoin = artifacts.require("./ECoin.sol");
var Package = artifacts.require("./Package.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, ECoin);
  deployer.deploy(ECoin);
  deployer.link(ECoin, Package);
  deployer.deploy(Package);
};
