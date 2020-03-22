const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const compiledFactory = require('./build/allProducts.json');
const provider = new HDWalletProvider(
	'there wink vibrant dinner fan adult letter fox start spider cloth nose', 
	'https://rinkeby.infura.io/v3/87b8127cc2bf40879083501c126268b5'
);
const web3 = new Web3(provider);

const deploy = async () => {
	listOfAccounts = await web3.eth.getAccounts();
	const nodeGasPrice = await web3.eth.getGasPrice();
	console.log('Attempting to deploy from account ', listOfAccounts[0]);
	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
	.deploy({data: compiledFactory.bytecode})
	.send({from: listOfAccounts[0], gas: '1500000', gasPrice: nodeGasPrice});
	console.log('Contract deployed to --> ', result.options.address);
	// console.log(interface);
};
deploy();
