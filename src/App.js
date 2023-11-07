import './App.css';
import React, { Component,useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import ProductDetail from './ProductDetail';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      products: [
        { name: 'Товар 1', isSelected: false },
        { name: 'Товар 2', isSelected: false },
        { name: 'Товар 3', isSelected: false },
      ],
    };
  }


  
  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  handleProductSelect = (index) => {
    const products = [...this.state.products];
    products[index].isSelected = !products[index].isSelected;
    this.setState({ products });
  };

  render() {
    const selectedCount = this.state.products.filter((product) => product.isSelected).length;

    return (

      <Router>
     


      
      <div>
        <Header
          isLoggedIn={this.state.isLoggedIn}
          onLoginClick={this.handleLoginClick}
          onLogoutClick={this.handleLogoutClick}
        />
     
     
      <Routes>
        <Route path="/" element={<Body products={this.state.products} onProductSelect={this.handleProductSelect} />} />
        <Route path="/product/:id" element={<ProductDetail   />} />
      </Routes>
        
      </div>
    

    </Router>
    );
  }
}


export default App;