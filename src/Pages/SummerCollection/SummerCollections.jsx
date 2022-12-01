import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Item from '../../Components/Item/Item';
import './summerCollection.scss';

const SummerCollections = () => {
    
    const [products, setProducts] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;
  
    useEffect(() => {
      fetch(`http://localhost:5000/products/subCategory/Summer`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(products.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, products]);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % products.length;
      setItemOffset(newOffset);
    };


    return (
        <>
        <div className="Pagination-container">
          <h1>Our Woman Collections</h1>
          <div className="product-container">
            <div className="container">
              {currentItems.map((product) => (
                <Item key={product._id} product={product}></Item>
              ))}
             
            </div>
          </div>
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="page-number"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </>
    );
  };

export default SummerCollections;