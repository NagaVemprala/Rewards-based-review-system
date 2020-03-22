import React, { Component } from 'react';
import { Table, Button, Rating, Segment, Label, Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import ecommerceReviews from '../ethereum/deployProduct';
import { Link } from '../routes';

class RequestRow extends Component {
  state = {
    errorMessage: ''
  };

  onApprove = async () => {
    const deployedProduct = ecommerceReviews(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await deployedProduct.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    });
  };

  onRate = async (event, data) => {
    console.log('so the address is right', this.props.address);
    const deployedProduct = ecommerceReviews(this.props.address);

    const accounts = await web3.eth.getAccounts();
    console.log('this is the msg.sender ', accounts[0]);
    await deployedProduct.methods.rateReview(data.rating, this.props.id).send({
      from: accounts[0]
    });
  };

  render() {
    const { Row, Cell } = Table;
    const { id, review } = this.props;
    console.log(review.reviewText);
    if (review.totalRatings > 0) {
      review.averageRating = review.sumTotalRating / review.totalRatings
    } else {
      review.averageRating = 0
    }
    
    return (

      <Row>
        <Cell><Link route={`/products/${this.props.address}/${id}`} params={{reviewNumber: `${id}`}}><a>{id}</a></Link></Cell>
        <Cell>
          <Segment padded color='grey'> {review.reviewText} </Segment>
        </Cell>
        <Cell>
          <Rating icon='star' defaultRating={review.averageRating} maxRating={5} 
            onRate={ this.onRate }> {review.averageRating} </Rating> {review.averageRating} 
        </Cell>
        <Cell>{review.totalRatings}</Cell>
        <Cell>{review.complete}</Cell>
        <Cell>
          <Button color="blue"> {review.reviewerAddress} </Button>
        </Cell>
      </Row>

    );
  }
}

export default RequestRow;