import web3 from './web3';
import compiledFactory from './build/allProducts.json';

const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  '0xA810939605332c2763eB7AA2118FA9A195B7943C'
);

export default instance;