import React, { Component } from 'react';
//import './App.css';
import web3 from '../src/web3';
import ecommerce from '../src/ecommerce';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {manager: '',
                productNumber: '',
                reviewNumber: '',
                reviewText: '',
                message: ''
//                users: ''
                };
  }
  async componentDidMount(){
    const manager = await ecommerce.methods.manager().call();
    const productNumber = await ecommerce.methods.productNumber().call();
    const reviewNumber = await ecommerce.methods.reviewNumber().call();
    //const users = await ecommerce.methods.users().call();

    this.setState({ manager, productNumber, reviewNumber});

  }

  onSubmit = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success...' });

    await ecommerce.methods.writeReview(this.state.reviewText, 1).send({
      from: accounts[0]
    });

    this.setState({ message: 'Your review is submitted!', 
                    reviewText: '' });
  };

  render () { 
    console.log(ecommerce);
    
    return (
      <div>
        <h2> Blockchain-based product review Crypto-rewards platform </h2>
        <hr/>
        <p> Contract is deployed by {this.state.manager} </p>
        <hr/>
        <p> There are a total of {this.state.reviewNumber} reviews available on the platform </p>
        <hr/>
        <p> There are a total of {this.state.productNumber} products for which users can write or rate reviews </p>
        <hr/>
        <form onSubmit={this.onSubmit}>
          <h4>Write Review for Product 1 </h4>
          <div>
            <label>Enter your review text and Submit </label>
            <input type='text' name='reviewText'
              //reviewText={this.state.reviewText}
              onChange={event => this.setState({ reviewText: event.target.value })}
            />
          </div>
          <button>Enter</button>
      </form>
      <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
