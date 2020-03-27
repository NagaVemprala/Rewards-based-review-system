import web3 from './web3';
import compiledFactory from './build/allProducts.json';


const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  '0xFA74CC2fb9e1FF3796C58B06d0b960bD6dF66509'
);

export default instance;