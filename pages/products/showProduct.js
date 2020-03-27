import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import ecommerceReviews from '../../ethereum/deployProduct';
import { Link } from '../../routes';
import CreateReview from '../../components/createReview';

class showProduct extends Component {

    static async getInitialProps(props) {
        const deployedProduct = ecommerceReviews(props.query.address);
        console.log('There are four possible parameters from this class 1) address 2) product Num 3) Name 4) review number');
        console.log('1.',props.query.address,'2.',props.query.productNumber,'3.',props.query.productName,'4.',props.query.reviewNumber);
        const summary = await deployedProduct.methods.getProductSummary().call();
        console.log('props.query.productName ', props.query.productName);
        return { 
            address: props.query.address,
            reviewNumber: props.query.reviewNumber,
            productName: props.query.productName, 
            rewardValue: summary[0],
            totalReviews: summary[1],
            productOwner: summary[2]
        };
    }

    renderProductSummary () {
        const {
            rewardValue,
            totalReviews,
            productOwner,
            productName
        } = this.props;

        const items = [
        {
            header: `${this.props.productName} created by ${this.props.productOwner}`,
            meta: '',
            style: { overflowWrap: 'break-word' }
        },
        {
            header: `Total rewards available: ${this.props.rewardValue}` ,
            meta: '',
            style: { overflowWrap: 'break-word' }
        },
        {
            header: `Total Reviews: ${this.props.totalReviews}`,
            meta: '',
            style: { overflowWrap: 'break-word' }
      }
      ];

      return <Card.Group items={items} />;
  }
    render () {
        return (
            <Layout>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>{this.renderProductSummary()}</Grid.Column>
                    <Grid.Column width={6}>
                      <CreateReview address={this.props.address} reviewNumber={this.props.reviewNumber}/>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column>
                      <Link route={`/products/${this.props.address}/reviews`}>
                        <a>
                          <Button primary>View Reviews</Button>
                        </a>
                      </Link>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
            </Layout> 
            );
    }
} 

export default showProduct;