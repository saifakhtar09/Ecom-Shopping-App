import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../features/cart/cartSlice';
import NotFound from '../NotFound';
import './checkout.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice, totalCount } = useSelector((state) => state.cart)

  const [ paymentStatus,setPaymentStatus] = useState(null);
const [countDown , setCountDown] = useState(5);

  const [formData, setFormData] = useState({
    cardHolder: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentStatus(true);
    dispatch(clearCart());
  };

  

  useEffect(() => {
    if (paymentStatus && countDown > 0) {

      // timer contains TimerId
      const timer = setTimeout(() => {
        setCountDown((prev) => prev - 1);
        console.log(`Page will redirect in ${countDown}`);
      }, 1000);

      //note:=-------
      // React allows you to define a cleanup function by returning a function from useEffect. This cleanup function is called when:
      // The component is unmounted, or
      // The useEffect dependencies change (like paymentStatus or countDown in this case).
      // By returning () => clearTimeout(timer), you're telling React to clear the timer whenever the effect is cleaned up, which happens when the component re-renders or unmounts.  
      //note:=-------

      return () => clearTimeout(timer); 
      
    } else if (paymentStatus && countDown === 0) {
      console.log("Redirecting...");
      navigate("/");
    }

  }, [paymentStatus, countDown, navigate]);

  return (
    <>
 
  <div className="container-fluid my-5 py-5">
  <div className="container ">

  <div className="row">
    <div className="col-12">

    <div className="card shadow-lg p-4 border border-outline-primary border-primary mx-auto" style={{ maxWidth: '50rem' ,backgroundColor:"#d5ffaf"}}>


      <h2 style={{color:"#305423"}} className="text-center mt-4  ">{paymentStatus?"Success":"Payment Details"}</h2>

      {!paymentStatus?
      <form className='mb-3' onSubmit={handleSubmit}>
      {/* Card Holder */}
      <div className="mb-4">
        <label htmlFor="cardHolder" className="form-label">Card Holder Name</label>
        <input
          type="text"
          id="cardHolder"
          name="cardHolder"
          className="form-control"
          placeholder="Card Holder Name"
          value={formData.cardHolder}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Card Number */}
      <div className="mb-4">
        <label htmlFor="cardNumber" className="form-label">Card Number</label>
        <input
          type="number"
          id="cardNumber"
          name="cardNumber"
          className="form-control"
          placeholder="Card Number"
          maxLength="19"
          value={formData.cardNumber}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Expiry Date */}
      <div className="row mb-4">
        <div className="col-md-6">
          <label htmlFor="expiry" className="form-label">Expiry Date (MM/YY)</label>
          <input
            type="number"
            
            id="expiry"
            name="expiry"
            className="form-control"
            placeholder="MM/YY"
            maxLength="5"
            value={formData.expiry}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* CVV */}
        <div className="col-md-6">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            className="form-control"
            placeholder="CVV"
            maxLength="3"
            value={formData.cvv}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      
        <div className="d-flex justify-content-center align-items-center">
        {/* Submit Button */}
      <button  type='submit'  className="btn btn-primary px-5   py-3 mt-3">Pay Now</button>
        </div>
      
    </form>:
    <>
    <img className='img-fluid w-50 mx-auto zoom-image' src='/images/greentick.png'/>
    <span className='text-center fs-5'>Redirecting to Home page in {countDown} </span>
    </>
    
      }

    </div>
      </div></div>  
 
  </div>
  </div>


  
    </>
  )
}

export default Checkout







