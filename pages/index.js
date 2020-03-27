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
    
    let styles1 = {
      margin: 'auto',
      marginleft: 'auto',
      marginright: 'auto',
      width: '500px',
      height: 'auto',
      backgroundColor: 'powderblue',
    };
    let styles2 = {
      margin: 'auto',
      marginleft: 'auto',
      marginright: 'auto',
      width: '500px',
      height: 'auto',
    };

    return (
    <Layout>
      
      <div className="box" style={styles1}>
        <hr/>
        <div> <strong>Step 1. </strong> Add extension metamask (crypto wallet) and login with your tokens </div>
        <div> <strong>Step 2. </strong> We are performing transactions on Rinkeby Test Network. Select it. </div>
        <div> <strong>Step 3. </strong> Copy the address and send email to Naga.Vemprala@gmail.com to get some ether with address and this website name in subject </div>
        <hr/>
      </div>
      

      <div>
        <h3 style={styles2}> Available Products for Writing Reviews & Earn Rewards </h3>
        <hr/>
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
