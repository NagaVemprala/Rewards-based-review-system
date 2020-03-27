import web3 from './web3';
import compiledFactory from './build/allProducts.json';

const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  '0x7cB2B3DFA861C494573a73dfC3EBbFa8dB933360'
);

export default instance;