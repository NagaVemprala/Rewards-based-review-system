import React, { Component } from 'react';
import { Table, Button, Rating, Segment, Label, Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import ecommerceReviews from '../ethereum/deployProduct';
import { Link, Router } from '../routes';

class RequestRow extends Component {
  state = {
    errorMessage: ''
  };

  onRate = async (event, data) => {
    try { 
      console.log('so the address is right', this.props.address);
      this.setState({ errorMessage: 'Updating Review to Blockchain Please Wait !!!' });
      const deployedProduct = ecommerceReviews(this.props.address);

      const accounts = await web3.eth.getAccounts();
      console.log('this is the msg.sender ', accounts[0]);
      await deployedProduct.methods.rateReview(data.rating, this.props.id).send({
        from: accounts[0]
      });
      Router.pushRoute(`/products/${this.props.address}/reviews`);
      this.setState({ errorMessage: "" });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    };
  }

  render() {
    let styles1 = {
      color: 'red',
    };
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
            onRate={ this.onRate }> {review.averageRating} </Rating> Average Rating: {review.averageRating} <p style={styles1}> <strong> {this.state.errorMessage} </strong></p>
        </Cell>
        <Cell>{review.totalRatings}</Cell>
        <Cell>{review.complete}</Cell>
        <Cell>
          <Link route={`/products/${this.props.address}/${id}`} params={{reviewNumber: `${id}`}}><a color='white'><Button color="blue" >{review.reviewerAddress}</Button></a></Link>
        </Cell>
      </Row>

    );
  }
}

export default RequestRow;