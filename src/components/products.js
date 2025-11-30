import React from 'react';

function Products() {
  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      <div className="product-list">
        <div className="product-card">
          <img src="/product1.png" alt="Product 1" />
          <h3>SmartFlow</h3>
          <p>Workflow automation powered by AI.</p>
          <button>View Details</button>
        </div>
        <div className="product-card">
          <img src="/product2.png" alt="Product 2" />
          <h3>DataPulse</h3>
          <p>Real-time analytics dashboard for enterprises.</p>
          <button>View Details</button>
        </div>
      </div>
    </section>
  );
}

export default Products;
