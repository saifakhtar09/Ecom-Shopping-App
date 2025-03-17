import React, { useState } from 'react'


import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decreaseCount, increaseCount, removeFromCart } from '../features/cart/cartSlice';
import NotFound from './NotFound';
import { Link } from 'react-router-dom';



const CartComponent = () => {

  const { cartItems, totalPrice, totalCount } = useSelector((state) => state.cart)
  const dispatch = useDispatch(); 
  
  return (
    <>

         {/* Single Page Header start */}
    <div className="container-fluid page-header py-5" style={{ backgroundImage: "url('/images/banner-1.jpg')" }}>
      <h1 className="text-center text-white display-6">Shop Detail</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item"> <Link to={"/"}>Home</Link></li>
       
        <li className="breadcrumb-item active text-white">cart</li>
      </ol>
    </div>
    {/* Single Page Header End */}
      {
        cartItems.length === 0
          ? <NotFound imgUrl={'images/emptyCart.png'} heading={'Nothing in Cart'} subTitle={"Go to shop page"} buttonText={"Shop Now"} /> :
         <div className="container-fluid mb-5 py-5" style={{backgroundColor:"#eee"}}>
          <div className="container">    
          <div className="row">
            <div className="col-10 mx-auto">
            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                    <MDBCardBody className="p-0">
                      <MDBRow className="g-0">
                        <MDBCol lg="8">
                          <div className="p-5">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                              <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                                Shopping Cart
                              </MDBTypography>
                              <MDBTypography className="mb-0 text-muted">
                                {totalCount} items
                              </MDBTypography>
                            </div>

                            <hr className="my-4" />
                            
                            {cartItems.map((items) => {
                              return (
                                <div key={items.id} >
                                  <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                                    <MDBCol md="2" lg="2" xl="2">
                                      <MDBCardImage
                                        src={items.image}
                                        fluid className="rounded-3" alt="Cotton T-shirt" />
                                    </MDBCol>
                                    <MDBCol md="3" lg="3" xl="3">
                                      <MDBTypography tag="h6" className="text-muted">
                                        {items.title}
                                      </MDBTypography>
                                      <MDBTypography tag="h6" className="text-black mb-0">
                                        {items.category}
                                      </MDBTypography>
                                    </MDBCol>
                                    <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">

                                      <button className='btn btn-primary' onClick={() => dispatch(decreaseCount(items.id))}>-</button>
                                      <MDBInput className='text-center' type="text" min="0" size="sm" value={items.count} />
                                      <button className='btn btn-primary' onClick={() => dispatch(increaseCount(items.id))}>+</button>

                                    </MDBCol>
                                    <MDBCol md="3" lg="2" xl="2" className="text-end">
                                      <MDBTypography tag="h6" className="mb-0">
                                        {items.price.toFixed(2)}
                                      </MDBTypography>
                                    </MDBCol>
                                    <MDBCol md="1" lg="1" xl="1" className="text-center">

                                      <MDBIcon onClick={() => dispatch(removeFromCart(items))} className='text-danger' fas icon="times" />

                                    </MDBCol>
                                  </MDBRow>

                                  <hr className="my-4" />

                                </div>
                              )
                            })}




                          </div>
                        </MDBCol>
                        {/* sidebar */}
                        <MDBCol lg="4" className="bg-grey">
                          <div className="p-5">
                            <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                              Summary
                            </MDBTypography>

                            <hr className="my-4" />

                            <div className="d-flex justify-content-between mb-4">
                              <MDBTypography tag="h5" className="text-uppercase">
                                items {totalCount}
                              </MDBTypography>
                              <MDBTypography tag="h5">€ {totalPrice.toFixed(2)}</MDBTypography>
                            </div>

                            {/* <MDBTypography tag="h5" className="text-uppercase mb-3">
                              Shipping
                            </MDBTypography>

                            <div className="mb-4 pb-2">
                              <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                                <option value="1">Standard-Delivery- €0.00</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                              </select>
                            </div> */}
                              {/* 
                            <MDBTypography tag="h5" className="text-uppercase mb-3">
                              Give code
                            </MDBTypography>

                            <div className="mb-5">
                              <MDBInput size="lg" label="Enter your code" />
                            </div> */}

                            <hr className="my-4" />

                            <div className="d-flex justify-content-between mb-5">
                              <MDBTypography tag="h5" className="text-uppercase">
                                Total price
                              </MDBTypography>
                              <MDBTypography tag="h5">€ {totalPrice.toFixed(2)}</MDBTypography>
                            </div>
                            <Link to="checkout">
                            <button  className="btn btn-success btn-lg">
                                    Checkout
                                </button>
                            </Link>
                               
                           
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
            </div>
           
          </div>
         
          </div>
         </div>
      }
    </>
  )

}

export default CartComponent




