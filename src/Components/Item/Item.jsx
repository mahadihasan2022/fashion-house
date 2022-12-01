import React from 'react';
import './item.scss';

const Item = (props) => {

    
  const { product } = props;
  const { name, img, price, stock, brand } = product;



    return (
        <div class="cards">
        <img src={img}/>
        <div className='card'>
        <div class="card-body">
          <h5> {name}</h5>
          <p>Brand: {brand}.</p>
          <p>Stock: {stock}</p>
          <p>Price: {price}</p>
        </div>
       
        <button>Bye Now</button>
       
        </div>
      </div>
    );
};

export default Item;