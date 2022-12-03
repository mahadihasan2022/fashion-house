import React, { useEffect, useState } from 'react';
import Item from '../../Components/Item/Item';
import './jacket.scss';

const Jacket = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
      fetch(`http://localhost:5000/products/variants/Jacket`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
        <div className="Pagination-container">
        <h1>Jacket</h1>
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

export default Jacket;