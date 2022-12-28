import React from 'react';
import './SingleItem.scss';

const SingleItem = (props) => {
     
        const { product } = props;
        const { name, img, price, stock, brand, discount } = product;
      
      
      
          return (
              <div class="cards">
              <img src={img}/>
              <div className='card'>
              <div class="card-body">
                <h5> {name}</h5>
                <p>Brand: {brand}.</p>
                <p>Stock: {stock}</p>
                <p>Price: {price}</p>
                <p>Discount: {discount}</p>
              </div>
             
              <button>Bye Now</button>
             
              </div>
            </div>
          );
      };

export default SingleItem;