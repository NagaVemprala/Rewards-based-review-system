import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import ecommerce from '../../ethereum/ecommerce';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class newProduct extends Component { 
	state = {
		minimumRewards: '',
		productName: '',
		errorMessage: '',
		loading: false, 
		account: '' 
	}

	onSubmit = async(event) => { 
		event.preventDefault();

		this.setState({loading: true, errorMessage: '' });
		try{ 
		  const accounts = await web3.eth.getAccounts();
		  console.log("web3.version --> ", web3.version);
		  console.log("accounts --> ", accounts);
		  this.setState({account: accounts[0]});
		  await ecommerce.methods.createProduct(this.state.minimumRewards, this.state.productName).send({
		  	  from: accounts[0]
		  });
		  this.setState({account: accounts[0]});

		  //Router.pushRoute('/');
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}
		this.setState({loading: false});
	}
	render() {
		return( 
			<Layout>
			<h2> {this.state.account}</h2>  
			<h3> Create a new product - And provide rewards that you would like to distribute </h3>

			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}> 
				<Form.Field> 
					<label> Rewards, you would like to distribute ! </label>
					<Input 
					  label='Cryptos' 
					  labelPosition="right"
					  value={this.state.minimumRewards}
					  onChange={event => this.setState({minimumRewards: event.target.value})} 
					/>
					<Input style={{ marginTop: '10px' }}
					  label='Product Name' 
					  labelPosition="right"
					  value={this.state.productName}
					  onChange={event => this.setState({productName: event.target.value})} 
					/>
				</Form.Field>

				<Message error header="Oops!" content={this.state.errorMessage} />
				<Button primary loading={this.state.loading}>
				  Add Product & Reward Contributions !
				</Button>
			</Form>
			</Layout>
		);
	}
}

export default newProduct;