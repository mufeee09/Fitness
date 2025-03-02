import React from 'react';
import './Products.css'; // Import the new CSS file

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="products-title">Our Products</h2>
        <div className="product-cards">
          <div className="product-card">
            <h3 className="product-card-title">Product 1</h3>
            <p className="product-card-price">$19.99</p>
            <p className="product-card-description">Description of product 1.</p>
            <button className="product-card-button">Buy Now</button>
          </div>
          <div className="product-card">
            <h3 className="product-card-title">Product 2</h3>
            <p className="product-card-price">$29.99</p>
            <p className="product-card-description">Description of product 2.</p>
            <button className="product-card-button">Buy Now</button>
          </div>
          <div className="product-card">
            <h3 className="product-card-title">Product 3</h3>
            <p className="product-card-price">$49.99</p>
            <p className="product-card-description">Description of product 3.</p>
            <button className="product-card-button">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;