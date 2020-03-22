import web3 from './web3';
import compiledFactory from './build/ecommerceReviews.json';

export default (address) => {
	return new web3.eth.Contract(JSON.parse(compiledFactory.interface), address);
};