import React from "react";

import {
  MDBBtn,
 
  MDBCardImage,
  MDBCol,

  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import { removeFromWishList } from "../features/wishlist/wishListSlice";
import NotFound from "./NotFound";
import { Link } from "react-router-dom";


const WishList = () => {
const dispatch = useDispatch();

  const {wishListItems,totalCount,totalPrice} = useSelector((state)=>state.wishlist)
 const cartItems = useSelector((state) => state.cart.cartItems);

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

  return (


<>

     {/* Single Page Header start */}
     <div className="container-fluid page-header py-5" style={{ backgroundImage: "url('/images/banner-1.jpg')" }}>
      <h1 className="text-center text-white display-6">Shop Detail</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item"> <Link to={"/"}>Home</Link></li>
       
        <li className="breadcrumb-item active text-white">WishList</li>
      </ol>
    </div>
    {/* Single Page Header End */}
      
    {wishListItems.length ===0?
      <NotFound imgUrl={'images/emptyCart.png'} heading={"Your WishList has no items"} subTitle={"No products or items has been added to wishlist kindly go to shop page"} buttonText={"Shop Now"} />:
      <div className="container-fluid">
        <div className="container">
        <MDBRow className="g-0">
        
        <MDBCol lg="12">
        <div className="p-5">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
             WishList
            </MDBTypography>
            <MDBTypography className="mb-0 text-muted">
            {totalCount} items
            </MDBTypography>
          </div>

          <hr className="my-4" />

          <div>
            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
            {wishListItems.map((item)=>
              <>
              <MDBCol key={item.id} className="my-2" md="2" lg="2" xl="2">
                <MDBCardImage
                  src={item.image}
                  
                  className="rounded-2 p-lg-3 w-75"
                  alt="Cotton T-shirt"
                />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
                <MDBTypography tag="h6" className="text-muted">
                {item.title}
                </MDBTypography>
                <MDBTypography tag="h6" className="text-black mb-0">
                {item.category}
                </MDBTypography>
              </MDBCol>
             
              <MDBCol md="3" lg="2" xl="2" className="text-end">
                <MDBTypography tag="h6" className="mb-0">
                ${item.price}
                </MDBTypography>
              </MDBCol>
              <MDBCol
                md="3"
                lg="3"
                xl="3"
                className="d-flex align-items-center"
              >
                {!isInCart(item.id)?
                <button onClick={()=>dispatch(addToCart(item))} className="btn btn-primary">Add to cart</button>:
                <button onClick={()=>dispatch(removeFromCart(item))} className="btn btn-danger">Remove From Cart</button>
              }
               
                
              </MDBCol>

              <MDBCol md="1" lg="1" xl="1" className="text-end">
           
                  <MDBIcon className='text-danger' onClick={()=>dispatch(removeFromWishList(item))} fas icon="times" />
                
              </MDBCol>
              </>
              )}
            </MDBRow>

            <hr className="my-4" />
          </div>
        </div>
      </MDBCol>
        
        
      </MDBRow>
        </div>
    </div>
    }
    
    
  
    </>
  );
};

export default WishList;
