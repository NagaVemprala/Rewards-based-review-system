import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import ecommerce from '../ethereum/ecommerce';
import { Card, Button, Table } from 'semantic-ui-react';
import Layout from '../components/Layout';
import RequestProduct from '../components/RequestProduct';
import { Link } from '../routes';

class ecommerceIndex extends Component {

  static async getInitialProps() {

    const productsCount = await ecommerce.methods.getProductsCount().call();
    const deployedProducts = await Promise.all(Array(parseInt(productsCount)).fill().map((element, index) => {
            return ecommerce.methods.deployedProducts(index).call();
    }));
    return { deployedProducts};
  }

  renderProducts() {
    return this.props.deployedProducts.map((product, index) => {
            return (
                <RequestProduct
                key={index}
                id={index}
                product={product}
                />
                );
    });
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

    const { Header, Row, HeaderCell, Body } = Table;
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
        <h3 style={styles2}> Available Products to write reviews & earn rewards </h3>
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
        <Table>
          <Header>
            <Row>
              <HeaderCell>Id</HeaderCell>
              <HeaderCell>Product Name</HeaderCell>
              <HeaderCell>Product Address</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderProducts()}</Body>
        </Table>
        
      </div>
    </Layout>
    );
  }
}

export default ecommerceIndex;
