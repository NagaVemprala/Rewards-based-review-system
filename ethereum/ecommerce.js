import web3 from './web3';
import compiledFactory from './build/allProducts.json';

const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  '0xA9CdAb75ec13dD42d534B34b571354206B2048af'
);

export default instance;