import React, { Component } from 'react';
import { Button, Table, Rating } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import ecommerceReviews from '../../../ethereum/deployProduct';
import { Link } from '../../../routes';
import RequestRow from '../../../components/RequestRow';

class showReviews extends Component {

	static async getInitialProps(props) {
        const { address } = props.query;
        console.log('Right address is not fetched ', address);
        const deployedProduct = ecommerceReviews(address);
        const reviewsCount = await deployedProduct.methods.getReviewsCount().call();

        const reviews = await Promise.all(Array(parseInt(reviewsCount)).fill().map((element, index) => {
            return deployedProduct.methods.reviews(index).call();
        })
        );
        return { address, reviews, reviewsCount};
    }

    renderRows() {
        console.log(this.props.reviews);
        return this.props.reviews.map((review, index) => {
            return (
                <RequestRow
                key={index}
                id={index}
                review={review}
                address={this.props.address}
                />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <h3>Reviews</h3>
        <Link route={`/products/${this.props.address}/reviews/new`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>
              Add Review
            </Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>Id</HeaderCell>
              <HeaderCell>review</HeaderCell>
              <HeaderCell>average rating</HeaderCell>
              <HeaderCell>total ratings</HeaderCell>
              <HeaderCell>Rewards Issued</HeaderCell>
              <HeaderCell>Reviewer Address</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
        <div>Found {this.props.reviewsCount} reviews.</div>
      </Layout>
    );
  }
}

export default showReviews;