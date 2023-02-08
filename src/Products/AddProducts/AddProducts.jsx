import React, { useState } from 'react';
import Navbar from '../../Header/NavBar/Navbar';

const AddProducts = () => {

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

    const fromSubmitHandler = () => {
        alert("Promotion Hot Add Success");
        fetch(`http://localhost:5000/newProducts`, {
          method: "POST",
          body: JSON.stringify({
            name,
            brand,
            stock,
            price,
            img,
            category,
            subCategory,
            color,
            variants,
            size,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      };
    
    return (
        <div>
        <Navbar />
        <div
          style={{ paddingTop: "40px", paddingLeft: "30px" }}
          className="addPromotion"
        >
          <form onSubmit={fromSubmitHandler}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "36px",
                fontWeight: "bold",
                fontStyle: "italic",
                paddingTop: "20px",
              }}
            >
              Add New Products
            </h1>
            <div class="form-group">
              <label for="exampleInputName"> Name</label>
              <br />
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Product Name "
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1"> Image</label>
              <br />
              <input
                onChange={(e) => setImg(e.target.value)}
                type="text"
                placeholder="Image Link"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputBrand">Brand</label>
              <br />
              <input
                onChange={(e) => setBrand(e.target.value)}
                type="text"
                placeholder="Brand Name"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputStock">Stock</label>
              <br />
              <input
                onChange={(e) => setStock(e.target.value)}
                type="text"
                placeholder="Stock Amount"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPrice">Price</label>
              <br />
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="Price Amount "
                required
              />
            </div>
       
            <div class="form-group">
              <label for="exampleInputCategory">Category</label>
              <br />
              <input
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Category Collections"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputSubCategory">Sub-Category</label>
              <br />
              <input
                onChange={(e) => setSubCategory(e.target.value)}
                type="text"
                placeholder="Sub-Category"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputColor">Color</label>
              <br />
              <input
                onChange={(e) => setColor(e.target.value)}
                type="text"
                placeholder="Insert Color"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputSize">Size</label>
              <br />
              <input
                onChange={(e) => setSize(e.target.value)}
                type="text"
                placeholder="Size"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputVariants">Variants</label>
              <br />
              <input
                onChange={(e) => setVariants(e.target.value)}
                type="text"
                placeholder="Variants Type"
                required
              />
            </div>
            <div className="btn-btn">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default AddProducts;