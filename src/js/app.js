PO = {
    web3: null,
    web3Provider: null,
    contracts: {},
    contractAddresses: [],
    receiverAddress: null,
    carrierAddress: null,
    shipperAddress: null,
    transactionHash: ["0xa7d1671cd46dd96b6a7e04b60badfe7316a3bd792eec8b7b4b0d166b16f7a077","0xd6bfc210221994012377da5b33be887637ceca1b460aac4772a3e2b40ffc1bb0","0x8da249c75b7bcfedc2924e0cfb514f8067e8dc502440e02d450b41c146c70ad1","0x169a064b189e8e6e0ea9370cb0328432c2b60a1ba82cf0def1dbd3b8c70c89cc","0xa6c9c5edafddb2fdbbb56240b9a8977075cb83bc3a63d490ca875a29528ac137","0x43c798d2b220e85986befed4c9abf10fbef4a44abe2d048a888c036e26aded13","0x68adc26f50e43cf7b7a169e3f8c9b0e60eeaf740d44a5ae5287409d743210ba7","0x45562f9d5a1b2f2307606b6619368ddb3629605b89a34847cd12c11a8e17bce8"],
    transactionTime:["Sep 27 2017 11:04:03 GMT-0700 (PDT)","Oct 02 2017 07:11:23 GMT-0700 (PDT)","Oct 02 2017 10:01:43 GMT-0700 (PDT)","Oct 02 2017 11:11:23 GMT-0700 (PDT)","Oct 02 2017 16:34:13 GMT-0700 (PDT)","Oct 20 2017 17:16:03 GMT-0700 (PDT)","Oct 20 2017 20:14:23 GMT-0700 (PDT)","Fri Oct 27 2017 09:04:44 GMT-0700 (PDT)"],
    status: ["Awaiting", "Ready", "PickedUpFromVendor", "DeliveredToPort", "LoadedInVessel", "ArrivedAtDestinationPort", "DeliveredToCFS", "DeliveredToDC"],

    init: function () { 
        $("#poForm").hide();
        console.log("pos loading");
        PO.bindEvents();
        return PO.initWeb3();
    },

    initPoList: function(){
        var poList = "";
        $.each(PO.contractAddresses, function(index, value){
            poList += '<tr><td><a href="#" onClick="PO.loadPODetails(\''+value+'\')">'+value+'</td></tr><tr><td id="'+value+'"></td></tr>'; 
        });
        console.log(poList);
        $("#polist").html(poList);
    },

    loadPODetails: function(address){
        console.log(address);
        // var contractDetails = PO.contracts.Package.at(address);
        // contractDetails.getItemInfo.call({from:PO.buyerAddress}).then(function(itemInfo){
        //     console.log(itemInfo);
        // });
        // contractDetails.getCurrentStatus.call({from:PO.buyerAddress}).then(function(status){
        //     console.log(status);
        // });
        // var gntAddress="0xf7c1bf795d5f676bdb6b6b31563d541f4eff655b";
        // var filter=web3.eth.filter({fromBlock: 3492700, toBlock: 3492900, address: [gntAddress], topics: []});
        // filter.get(function(error, log) {
        //     console.log(log);
        //     console.log(error);
        //   console.log(JSON.stringify(log));
        // });
        // filter.stopWatching();
       
        var poDetail = "<b>Item Name: </b>Fosca Floral Embellished Pointy Toe Boot<br><b>Item Color: </b>White Floral<br><b>Item Size: </b>9.5<br><b>Quantity: </b>1000<br><b>Vendor Cost: </b>2000<br><b>Shipper Cost: </b>5000<br><b>Delivery Location: </b>DC 299<br>"+
        "<BR/><b>Transaction List</b><br><BR/>"

        poDetail += PO.transactionHash[7]+"&nbsp;&nbsp;<b><BR/>Status: </b>"+PO.status[7]+"&nbsp;&nbsp;<b>UpdatedBy: </b>"+PO.truckerAddress+"<b>&nbsp;&nbsp;Time: </b>"+PO.transactionTime[7]+"<br><br>";
        poDetail += PO.transactionHash[6]+"&nbsp;&nbsp;<b><BR/>Status: </b>"+PO.status[6]+"&nbsp;&nbsp;<b>UpdatedBy: </b>"+PO.shipperAddress+"<b>&nbsp;&nbsp;Time: </b>"+PO.transactionTime[6]+"<br><br>";
        poDetail += PO.transactionHash[5]+"&nbsp;&nbsp;<b><BR/>Status: </b>"+PO.status[5]+"&nbsp;&nbsp;<b>UpdatedBy: </b>"+PO.shipperAddress+"<b>&nbsp;&nbsp;Time: </b>"+PO.transactionTime[5]+"<br><br>";
        poDetail += PO.transactionHash[4]+"&nbsp;&nbsp;<b><BR/>Status: </b>"+PO.status[4]+"&nbsp;&nbsp;<b>UpdatedBy: </b>"+PO.shipperAddress+"<b>&nbsp;&nbsp;Time: </b>"+PO.transactionTime[4]+"<br><br>";
        poDetail += PO.transactionHash[3]+"&nbsp;&nbsp;<b><BR/>Status: </b>"+PO.status[3]+"&nbsp;&nbsp;<b>UpdatedBy: </b>"+PO.shipperAddress+"<b>&nbsp;&nbsp;Time: </b>"+PO.transactionTime[3]+"<br><br>";
        poDetail += PO.transactionHash[2]+"&nbsp;&nbsp;<b><BR/>Status: </b>"+PO.status[2]+"&nbsp;&nbsp;<b>UpdatedBy: </b>"+PO.shipperAddress+"<b>&nbsp;&nbsp;Time: </b>"+PO.transactionTime[2]+"<br><br>";
        poDetail += PO.transactionHash[1]+"&nbsp;&nbsp;<b><BR/>Status: </b>"+PO.status[1]+"&nbsp;&nbsp;<b>UpdatedBy: </b>"+PO.vendorAddress+"<b>&nbsp;&nbsp;Time: </b>"+PO.transactionTime[1]+"<br><br>";
        poDetail += PO.transactionHash[0]+"&nbsp;&nbsp;<b><BR/>Status: </b>"+PO.status[0]+"&nbsp;&nbsp;<b>UpdatedBy: </b>"+PO.buyerAddress+"<b>&nbsp;&nbsp;Time: </b>"+PO.transactionTime[0]+"<br><br>";
   
        $("#"+address).html(poDetail);

    },

    initAddresses: function () {
        PO.buyerAddress = PO.web3.eth.accounts[0]
        $("#buyerAddress").text(PO.buyerAddress);
        PO.vendorAddress = PO.web3.eth.accounts[1];
        $("#vendorAddress").text(PO.vendorAddress);
        PO.shipperAddress = PO.web3.eth.accounts[2];
        $("#shipperAddress").text(PO.shipperAddress);
        PO.truckerAddress = PO.web3.eth.accounts[3];
        $("#truckerAddress").text(PO.truckerAddress);
        console.log(new Date().getTime());
    },

    bindEvents: function() {
        $(document).on('click', '.btn-create-po', function() {
            $("#poForm").show();
          });
          $(document).on('click', '.btn-submit-po', function() {
            $("#poForm").hide();
            PO.createContract();
          });
      },

    createContract: function () {
        console.log($("#Package".data));
        
        $.getJSON('Package.json', function(data) {
            // Get the necessary contract artifact file and instantiate it with truffle-contract
            var PackageArtifact = data;
            PO.contracts.Package = TruffleContract(PackageArtifact);
  
            // Set the provider for our contract
            PO.contracts.Package.setProvider(PO.web3Provider);
  
            // Use our contract to retrieve and mark the adopted pets
            return PO.createPackage();
        });
    },

    getRandomInt: function() {
        min = Math.ceil(1000);
        max = Math.floor(100000);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      },

    createPackage: function() {
        var PackageInstance;
        var po1 = PO.contracts.Package.new($("#itemName").val(),$("#itemColor").val(),$("#itemSize").val(),$("#quantity").val(),PO.vendorAddress,$("#vendorPrice").val(),PO.shipperAddress,$("#shipperPrice").val(),$("#deliveryLocation").val(),new Date().getTime(),{from:PO.buyerAddress})
            .then(function(instance){console.log(instance)})
        console.log(po1);

        PO.contracts.Package.deployed().then(function(instance) {
            PackageInstance = instance;
             console.log("**" + PackageInstance.address);
            return PackageInstance;
        }).then(function(data) {
            console.log("***** marked adopted")
            console.log(data);
            PO.contractAddresses.push(data.address + PO.getRandomInt());
            return PO.initPoList();
        }).catch(function(err) {
            console.log(err.message);
        });
    },
  

    initWeb3: function() {
        if (PO.web3 !== null) {
            console.log(PO.web3.eth.accounts);
            return;
        }
        Web3 = require('web3');
        PO.web3Provider = new Web3.providers.HttpProvider("http://localhost:8545");
        PO.web3 = new Web3(PO.web3Provider);
        PO.web3.eth.getAccounts(function(error, accounts) {
            console.log(accounts);
            if (error) {
                console.log(error);
            }
        });
    }
   
};

$(function () {
    $(window).load(function () {
        PO.init();
        PO.initPoList();
        PO.initAddresses();
    });
});
