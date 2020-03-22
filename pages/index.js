import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import ecommerce from '../ethereum/ecommerce';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

class ecommerceIndex extends Component {

  static async getInitialProps() {
    const deployedProducts = await ecommerce.methods.getDeployedProducts().call();
    return { deployedProducts };
  }

  renderProducts() {
    const items = this.props.deployedProducts.map(address => {
    	console.log(address)
    return {
        header: address[1], 
        description: (
        	<Link route={`/products/${address[0]}`}>
              <a>View all the reviews for {address[0]} </a>
            </Link>
        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;

  }

  render () { 
    
    return (
    <Layout>
      <div>
        <h3> Available Products for Writing Reviews & Earn Rewards </h3>
        <Link route="/products/newProduct">
          <a>
            <Button
                floated="right"
                content="Add New Product for Rewards"
                icon="add"
                primary
            />
          </a>
        </Link>
        {this.renderProducts()}
        
      </div>
    </Layout>
    );
  }
}

export default ecommerceIndex;
