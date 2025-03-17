import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilters,
  setCategoryFilter,
  setPriceFilter,
  setRatingFilter,
  setSearchFilter,
} from "../features/products/productsSlice";

const Offcanvas = () => {
  const { category, priceRange, rating, searchQuery } = useSelector(
    (state) => state.products.filters
  );
  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    dispatch(setCategoryFilter(e.target.value));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchFilter(e.target.value));
  };

  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasNavbar"
      >
        <div className="offcanvas-header justify-content-between align-items-center">
          <h4 className="fw-normal text-uppercase fs-5">Menu</h4>
          <div>
            <button
              className="btn btn-primary  me-3"
              onClick={() => dispatch(clearFilters())}
            >
              Clear Filters
            </button>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
        </div>

        <div className="offcanvas-body">
          <div className="d-flex justify-content-between align-items-center fs-5 fw-semibold">
            <div>
              <form id="search-form" className="text-center">
                <input
                  value={searchQuery}
                  onChange={handleSearchChange}
                  type="text"
                  className="form-control border-0 bg-transparent"
                  placeholder="Search for more than 20,000 products"
                />
              </form>
            </div>
            <div className="text-black ">Filter</div>
            <i
              className="fa-solid fa-sliders"
              data-bs-toggle="collapse"
              data-bs-target="#filters"
              aria-expanded="false"
              aria-controls="filters"
            ></i>
          </div>

          <div className="collapse" id="filters">
            <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
              <li className="nav-item border-dashed active py-3">
                <h6>Price</h6>
                <MultiRangeSlider
                  className="px-4 py-3 shadow-none"
                  minValue={priceRange.minValue}
                  maxValue={priceRange.maxValue}
                  min={0}
                  max={3000}
                  ruler={false}
                  label={false}
                  onChange={(e) =>
                    dispatch(
                      setPriceFilter({
                        minValue: e.minValue,
                        maxValue: e.maxValue,
                      })
                    )                    
                  }
                  
                />
              </li>

              <li className="nav-item border-dashed active py-3">
                <h6>Customer Rating</h6>
                <MultiRangeSlider
                  className="px-4 py-3 shadow-none"
                  minValue={rating.minRatingValue}
                  maxValue={rating.maxRatingValue}
                  min={0}
                  max={5}
                  step={0.1}
                  ruler={false}
                  label={false}
                  onChange={(e) => 
                    {dispatch(
                      setRatingFilter({
                        minRatingValue: e.minValue,
                        maxRatingValue: e.maxValue,
                      })
                    );console.log(118)
                      }               
                  }
                  
                />
              </li>

              <li className=" nav-item border-dashed active py-3  d-flex justify-content-between align-items-center fs-5 fw-semibold">
                <h5 className="text-black">Category </h5>
                <i
                  className="fa-solid fa-sliders"
                  data-bs-toggle="collapse"
                  data-bs-target="#category"
                  aria-expanded="false"
                  aria-controls="category"
                ></i>
              </li>

              <div className="collapse" id="category">
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
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offcanvas;
