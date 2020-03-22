import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import ecommerceReviews from '../../ethereum/deployProduct';
import { Link } from '../../routes';
import CreateReview from '../../components/createReview';

class showProduct extends Component {

	static async getInitialProps(props) {
        const deployedProduct = ecommerceReviews(props.query.address);
        console.log('address ', props.query.address, 'props.query.reviewNumber', props.query.reviewNumber);
        const summary = await deployedProduct.methods.getProductSummary().call();
        // const { fromNotifications } = this.props.match.params;
        // console.log(fromNotifications);
        return { 
        	address: props.query.address,
        	reviewNumber: props.query.reviewNumber,
            rewardValue: summary[0],
            totalReviews: summary[1],
            productOwner: summary[2]
        };
    }

    renderProductSummary () {
    	const {
    		rewardValue,
    		totalReviews,
    		productOwner
    	} = this.props;

    	const items = [
    	{
    		header: productOwner,
    		meta: '',
    		description: 'The product owner distributes rewards for helpful review ',
    		style: { overflowWrap: 'break-word' }
    	},
    	{
    		header: rewardValue,
    		meta: '',
    		description: 'This is the maximum amount of cryptos distributed for writing helpful reviews '
    	},
    	{
    		header: totalReviews,
    		meta: '',
    		description: 'The number of reviews that are competing for rewards '
      }
      ];

      return <Card.Group items={items} />;
  }
	render () {
		return (
			<Layout>
			    <h3>Products Page</h3>
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