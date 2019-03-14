import React, { Component } from 'react';

const DATA = {
  name: 'shenlong',
  year: 1991
}

const ProductContext = React.createContext(DATA);

class ProductProvider extends Component {
  render() {
    return(
      <ProductContext.Provider value={DATA}>
          {this.props.children}
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }
