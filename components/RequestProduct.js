import React, { Component } from 'react';
import { Table, Button, Rating, Segment, Label, Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import ecommerce from '../ethereum/ecommerce';
import { Link, Router } from '../routes';

class RequestProduct extends Component {
  state = {
    errorMessage: ''
  };

  render() {
    let styles1 = {
      color: 'red',
    };
    const { Row, Cell } = Table;
    const { id, product } = this.props;
    console.log(product.productName);
    
    return (

      <Row>
        <Cell><Link route={`/products/${product.productOwner}/${id}/${product.productName}`}><a>{id}</a></Link></Cell>
        <Cell>
          <Segment padded color='grey'> {product.productName} </Segment>
        </Cell>
        <Cell>{product.productOwner}</Cell>
      </Row>

    );
  }
}

export default RequestProduct;