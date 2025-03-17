import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
// import { fetchProducts,filterByPrice, filterByCategory, searchProducts, filterByRating } from "../features/products/productsSlice";
import {
  setCategoryFilter,
  setSearchFilter,
  applySearchSuggestion,
  clearFilters,
} from "../features/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/auth/authSlice";


const Header = () => {
  const dispatch = useDispatch();
  const { totalCount } = useSelector((state) => state.cart);
  const wishlisTotalCount = useSelector((state) => state.wishlist.totalCount);
  
  const { suggestions } = useSelector(
    (state) => state.products
  );

  const { category, searchQuery } = useSelector(
    (state) => state.products.filters
  );

  const isLoggedIn = useSelector((state) => state.auth.isLogged);
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (e) => {
    dispatch(setCategoryFilter(e.target.value));
  };

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
  
    if (inputValue.trim().length === 0) {
      
      dispatch(clearFilters());
    } else {
    
      dispatch(setSearchFilter(inputValue));
    }
  };
  

  return (
    <>
      <header
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        className="sticky-top"
      >
        <div className="container-fluid px-1 position-relative">
          <div className=" d-flex justify-content-between align-items-center py-3 px-2 border-bottom align-items-center">
            <div className="d-block d-lg-none">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <svg width={24} height={24} viewBox="0 0 24 24">
                  <use xlinkHref="#menu" />
                </svg>
              </button>
            </div>

            <div className=" d-flex justify-content-cennter align-items-center">
              <button
                className="navbar-toggler me-3 d-none d-lg-block"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <svg width={24} height={24} viewBox="0 0 24 24">
                  <use xlinkHref="#menu" />
                </svg>
              </button>

              <Link to="/">
                <div className="brand">
                  <img src="images/logo.svg" alt="logo" className="img-fluid" />
                </div>
              </Link>
            </div>

        
              <div className="d-none d-lg-flex search-bar bg-light p-2 rounded-4">
                <select
                  value={category}
                  className="form-select border-0 bg-transparent "
                  onChange={handleCategoryChange}
                >
                  <option value="">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="men's clothing">For Men</option>
                  <option value="women's clothing">Women</option>
                  <option value="jewelery">jewelery</option>
                </select>

                <div>
                  <form
                    id="search-form "
                    className="text-center position-relative"
                  >
                    <input
                      style={{ minWidth: "450px" }}
                      value={searchQuery}
                      onChange={handleSearchChange}
                      type="text"
                      className="form-control w-100 border-0 bg-transparent"
                      placeholder="Search for more than 20,000 products"
                    />
                    {suggestions.length !== 0 ? (
                      <div className="position-absolute top-0 bg-light text-center suggestion-box">
                        <ul
                          style={{ maxHeight: "25vh" }}
                          className="text-start list-unstyled overflow-y-scroll"
                        >
                          {suggestions.map((item) => {
                            return (
                              <li
                                style={{ borderBottom: "0.5px solid grey" }}
                                className="fs-6 px-2"
                                onClick={() =>
                                  dispatch(applySearchSuggestion(item))
                                }
                              >
                                {item.title}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </form>
                </div>

                <div className="ps-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                    />
                  </svg>
                </div>

              </div>
   

            <div className="d-flex justify-content-between align-items-center">
              {isLoggedIn ? (
                <div
                  onClick={() => setIsOpen(true)}
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                  className="dropdown"
                >
                  <div
                    className={`d-flex justify-content-center gap-2 align-items-center me-md-2 px-md-2 ${
                      isOpen ? "show" : "hide"
                    }`}
                  >
                    <div className="rounded-circle overflow-hidden">
                      <img
                        className="profile-img"
                        src="images/banner-1.jpg"
                        alt=""
                      />
                    </div>

                    <div className="d-none d-md-block">Hi, Saif</div>
                  </div>

                  <ul
                    onMouseLeave={() => setIsOpen(false)}
                    style={{
                      transform: "translate(-8.75px,40px)",
                      position: "absolute",
                      margin: "0px",
                      inset: "0px 0px auto auto",
                    }}
                    className={` dropdown-menu ${isOpen ? "show" : "hide"}`}
                  >
                    <li className="px-1">
                      <Link to={"/orders"} className="dropdown-item px-2">
                        <span>
                          <i className="fa-solid fa-bag-shopping me-4"></i>
                          Orders
                        </span>
                      </Link>
                    </li>
                    <li className="px-1">
                      <Link to={"/profile"} className="dropdown-item px-2">
                        <span>
                          <i class="fa-solid fa-user me-4"></i>
                          Profile
                        </span>
                      </Link>
                    </li>
                    <li className="px-1">
                      <Link to={"/cart"} className="dropdown-item px-2">
                        <span>
                          <i class="fa-solid fa-cart-shopping me-4"></i>
                          My cart
                        </span>
                      </Link>
                    </li>
                    <li className="px-1">
                      <Link to={"/wishlist"} className="dropdown-item px-2 ">
                        <span>
                          <i class="fa-solid fa-heart me-4"></i>
                          WishList
                        </span>
                      </Link>
                    </li>
                    <li className="px-1">
                      <Link className="dropdown-item px-2 border-0">
                        <span onClick={() => dispatch(logOut())}>
                          <i class="fa-solid fa-right-from-bracket me-4"></i>
                          Logout
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <div>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#login"
                  >
                    Sign In
                  </button>
                </div>
              )}

              {isLoggedIn ? (
                <ul className="d-none d-md-flex flex-row navbar-nav list-unstyled  gap-1 gap-md-3 justify-content-end  align-items-center mb-0 fw-bold text-uppercase text-dark">
                  <li className="nav-item active ">
                    <Link className="nav-link" to="/wishlist">
                      <button className="btn p-1 position-relative">
                        <i className="fa-solid fa-heart "></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {wishlisTotalCount}
                        </span>
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/cart">
                      <button className="btn p-1 position-relative">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {totalCount}
                        </span>
                      </button>
                    </Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
