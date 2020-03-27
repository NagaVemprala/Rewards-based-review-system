import React, { Component } from 'react';
import { Form, TextArea, Message, Button, Header } from 'semantic-ui-react';
import ecommerceReviews from '../ethereum/deployProduct';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class createReview extends Component {
  state = {
    reviewText: '',
    errorMessage: '',
    loading: false, 
    account: ''
  };

  onSubmit = async event => {
    event.preventDefault();

    console.log(this.props.address);
    const deployedProduct = ecommerceReviews(this.props.address);

    this.setState({ loading: true, errorMessage: '' });

    if (typeof this.props.reviewNumber == "undefined") {
      try {
        const accounts = await web3.eth.getAccounts();
        await deployedProduct.methods.createReview(this.state.reviewText, accounts[0]).send({
        from: accounts[0]
      });

        this.setState({account: accounts[0]});
        Router.replaceRoute(`/products/${this.props.address}`);
        this.setState({ reviewText: "" });
      } catch (err) {
        this.setState({ errorMessage: err.message });
      }
    } else {
      try {
        const accounts = await web3.eth.getAccounts();
        await deployedProduct.methods.updateReview(this.state.reviewText, this.props.reviewNumber).send({
        from: accounts[0]
        });

        Router.replaceRoute(`/products/${this.props.address}`);
        this.setState({ reviewText: "" });
      } catch (err) {
        this.setState({ errorMessage: err.message });
      }
    }
    

    this.setState({ loading: false, reviewText: '' });
  };

  render() {
    const HeaderExampleBlock = () => (
      <Header as='h3' block>Block Header</Header>
    );

    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <h3 class="ui block header">Same Place - New Review or Update Your Existing Review</h3>
          <TextArea
            onChange={event => this.setState({ reviewText: event.target.value, value: '' })}
            label="TEXT"
            labelPosition="right"
          />
        </Form.Field>

        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Post Review
        </Button>
      </Form>
    );
  }
}

export default createReview;