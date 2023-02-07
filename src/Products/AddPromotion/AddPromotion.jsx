import React, { useState } from 'react';
import Navbar from '../../Header/NavBar/Navbar';

const AddPromotion = () => {

    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [variants, setVariants] = useState("");
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [brand, setBrand] = useState("");
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");



    const fromSubmitHandler = () =>{
        alert('Promotion Hot Add Success');
        fetch(`http://localhost:5000/addPromotion`, {
            method: "POST",
            body: JSON.stringify({ name, brand, stock, price, discount, img, category, subCategory, color, variants, size }),
            headers: {
              "Content-Type": "application/json",
            },
        })
          .then((res) => res.json())
          .then((data) => {console.log(data);});
    }

    return (
        <div>
            <Navbar/>
        <div style={{paddingTop:'40px', paddingLeft:'30px' }} className='bookingModal'>
             <form onSubmit={fromSubmitHandler}>
  <div class="form-group">
    <label for="exampleInputEmail1"> Name</label><br />
    <input onChange={e=> setName(e.target.value)} type="text" placeholder='Product Name 'required />
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1"> Image</label><br />
    <input onChange={e=> setImg(e.target.value)} type="text" placeholder='Image Link'required />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Brand</label><br />
    <input onChange={e=> setBrand(e.target.value)} type="text" placeholder='Brand Name'required />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Stock</label><br />
    <input onChange={e=> setStock(e.target.value)} type="text" placeholder='Stock Amount' required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Price</label><br />
    <input onChange={e=> setPrice(e.target.value)} type="text" placeholder='Price Amount 'required />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Discount</label><br />
    <input onChange={e=> setDiscount(e.target.value)} type="text" placeholder='Discount %'required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Category</label><br />
    <input onChange={e=> setCategory(e.target.value)} type="text" placeholder='Category Collections'required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Sub-Category</label><br />
    <input onChange={e=> setSubCategory(e.target.value)} type="text" placeholder='Sub-Category'required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Color</label><br />
    <input onChange={e=> setColor(e.target.value)} type="text" placeholder='Insert Color'required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Size</label><br />
    <input onChange={e=> setSize(e.target.value)} type="text" placeholder='Size'required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Variants</label><br />
    <input onChange={e=> setVariants(e.target.value)} type="text" placeholder='Variants Type'required/>
  </div>
 <div className='btn-btn'>
 <button type="submit" class="btn btn-primary">Submit</button>
 </div>
</form>
        </div>
      </div>
    );
};

export default AddPromotion;