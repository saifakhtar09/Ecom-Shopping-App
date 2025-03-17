import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, fetchProducts } from "../features/products/productsSlice";
import {
  addToCart,
  removeFromCart,
} from "../features/cart/cartSlice";
import "react-loading-skeleton/dist/skeleton.css";
import ProductSkeleton from "../Loader/ProductSkeleton";
import NotFound from "./NotFound";

import {
  addToWishList,
  removeFromWishList,
} from "../features/wishlist/wishListSlice";

import { Link } from "react-router-dom";



const ProductList = () => {
  const dispatch = useDispatch();
  const { filteredItems, loading, error } = useSelector(
    (state) => state.products
  );
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishList = useSelector((state) => state.wishlist.wishListItems);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [viewAll, setViewAll] = useState(false);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const displayedItems = viewAll
  ? filteredItems
  : filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


  const handleViewAll = () => {
    dispatch(clearFilters());
    setCurrentPage(1)
    setViewAll(true);
  };

  const handlePageChange = (page) => {
    setViewAll(false);
    setCurrentPage(page);
   
  };

  const handlePrevPage = (e)=>{
    setViewAll(false);

   if(currentPage>1){
    setCurrentPage(currentPage-1) 
   }
   
  }
  const handleNextPage = (e)=>{
    setViewAll(false);
  
if(currentPage < totalPages){
  setCurrentPage(currentPage+1) 
}
    
   }
 
   
  const isInCart = (itemId) => {
    if (cartItems.length > 0) {
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === itemId) {
          return true;
        }
      }
      return false;
    }
  };

  const isInWishList = (itemId) => {
    if (wishList.length > 0) {
      for (let i = 0; i < wishList.length; i++) {
        if (wishList[i].id === itemId) {
          return true;
        }
      }
      return false;
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) {
    return (
      <div className="container-fluid ">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header d-flex flex-wrap justify-content-between my-4">
                <h2 className="section-title">Best selling products</h2>
                <div className="d-flex align-items-center">
                  <button onClick={handleViewAll} className="btn btn-primary rounded-1">
                    View All
                 </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="col-12 col-lg-3">
                <ProductSkeleton />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <NotFound
        imgUrl={"images/404.jpg"}
        heading={"Response Not Found"}
        subTitle={"Resource not found (404)."}
        buttonText={"Back To Home"}
      />
    );
  }

  return (
    <>
      <section className="pb-5">
        <div className="container-lg">

          <div className="row  my-5 ">
            <div className="col-md-12">
              <div className="section-header d-flex flex-wrap justify-content-between my-4">
                <h2 className="section-title">Best selling products</h2>
                <div className="d-flex align-items-center">
                <button onClick={handleViewAll} className="btn btn-primary rounded-1">
                    View All
                 </button>
                </div>
              </div>
            </div>
          </div>

         {/* product */}
          <div className="row my-5  ">
            <div className="col-md-12">
              {!filteredItems?.length > 0 ? (
                <NotFound
                  imgUrl={"images/emptyCart.png"}
                  heading={"Product Not Found"}
                  subTitle={
                    "The product you are searching for is not here,kindly reset/clear your filters"
                  }
                  buttonText={"Back"}
                />
              ) : (
                <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                  {displayedItems.map((item) => {
                    return (
                      <div key={item.id} className="col">
                        <div className="product-item">
                          <Link to= {`/product/${item.id}`}>
                          
                          <figure>
                            <img
                              src={item.image}
                              alt="Product Thumbnail"
                              className="tab-image"
                            />
                          </figure>
                          </Link>
                          <div className="d-flex flex-column text-center">
                            <h3 className="fs-6 fw-normal">{item.title}</h3>
                            <h3 className="fs-6 fw-normal">{item.category}</h3>
                            <h3 className="fs-6 fw-normal">
                              {item.rating.rate}
                            </h3>

                            <div>
                              <span className="rating">
                                <svg
                                  width={18}
                                  height={18}
                                  className="text-warning"
                                >
                                  <use xlinkHref="#star-full" />
                                </svg>
                                <svg
                                  width={18}
                                  height={18}
                                  className="text-warning"
                                >
                                  <use xlinkHref="#star-full" />
                                </svg>
                                <svg
                                  width={18}
                                  height={18}
                                  className="text-warning"
                                >
                                  <use xlinkHref="#star-full" />
                                </svg>
                                <svg
                                  width={18}
                                  height={18}
                                  className="text-warning"
                                >
                                  <use xlinkHref="#star-full" />
                                </svg>
                                <svg
                                  width={18}
                                  height={18}
                                  className="text-warning"
                                >
                                  <use xlinkHref="#star-half" />
                                </svg>
                              </span>
                              <span>(222)</span>
                            </div>
                            <div className="d-flex justify-content-center align-items-center gap-2">
                              <del>$24.00</del>
                              <span className="text-dark fw-semibold">
                                {item.price.toFixed(2)}
                              </span>
                              <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
                                10% OFF
                              </span>
                            </div>
                            <div className="button-area p-3 pt-0">
                              <div className="row g-1 mt-2">
                                {!isInCart(item.id) ? (
                                  <div
                                    onClick={() => dispatch(addToCart(item))}
                                    className="col-6"
                                  >
                                    <button className="btn btn-primary rounded-1 p-2 fs-7 btn-cart">
                                      <svg width={18} height={18}>
                                        <use xlinkHref="#cart" />
                                      </svg>{" "}
                                      Add to Cart
                                    </button>
                                  </div>
                                ) : (
                                  <div
                                    onClick={() =>
                                      dispatch(removeFromCart(item))
                                    }
                                    className="col-6"
                                  >
                                    <button className="btn btn-danger rounded-1 p-2 fs-7 btn-cart">
                                      <svg width={18} height={18}>
                                        <use xlinkHref="#cart" />
                                      </svg>{" "}
                                      Remove
                                    </button>
                                  </div>
                                )}
                                <div className="col-6">
                                  {!isInWishList(item.id) ? (
                                    <button
                                      onClick={() =>
                                        dispatch(addToWishList(item))
                                      }
                                      className="btn btn-primary rounded-1 p-2 fs-7 btn-cart "
                                    >
                                      Add to
                                      <svg
                                        className="mx-2"
                                        width={16}
                                        height={16}
                                      >
                                        <use xlinkHref="#heart" />
                                      </svg>
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() =>
                                        dispatch(removeFromWishList(item))
                                      }
                                      className="btn  btn-danger  rounded-1 p-2 fs-7 btn-cart "
                                    >
                                      Remove
                                      <svg
                                        className="mx-2"
                                        width={16}
                                        height={16}
                                      >
                                        <use xlinkHref="#heart" />
                                      </svg>
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
             {/* product end */}



        {/* pagination */}
              <div className="row my-5 py-5">
              <div className="col-12">
              <div
                  className=" justify-content-between d-flex align-items-center"
                >
              
              <ul className="pagination my-0">
  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
    <button className="page-link cursor-pointer" onClick={handlePrevPage} disabled={currentPage === 1}>
      Previous
    </button>
  </li>

  {Array.from({ length: totalPages }, (_, index) => (
    <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
      <button className="page-link cursor-pointer" onClick={() => handlePageChange(index + 1)}>
        {index + 1}
      </button>
    </li>
  ))}

  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
    <button className="page-link cursor-pointer" onClick={handleNextPage} disabled={currentPage === totalPages}>
      Next
    </button>
  </li>
</ul>


            
                              
                  <button  onClick={handleViewAll} className="btn btn-primary rounded-1">
                    View All
                  </button>
               
                </div>
              </div>
                
               
                
              </div>
              {/* pagination end */}

              
        </div>
      </section>
    </>
  );
};

export default ProductList;
