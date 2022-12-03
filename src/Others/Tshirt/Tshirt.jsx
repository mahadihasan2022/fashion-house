import React, { useEffect, useState } from 'react';
import Item from '../../Components/Item/Item';
import './tshirt.scss';

const Tshirt = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
      fetch(`http://localhost:5000/products/variants/T-shirt`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
        <div className="Pagination-container">
        <h1>T-Shirt</h1>
        <div className="product-container">
          <div className="container">
            {products.map((product) => (
              <Item key={product._id} product={product}></Item>
            ))}
           
          </div>
        </div>
        </div>
    );
};

export default Tshirt;