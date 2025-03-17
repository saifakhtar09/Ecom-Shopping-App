import React from 'react'
import { Link } from 'react-router-dom'
import { clearFilters } from '../features/products/productsSlice';
import { useDispatch } from 'react-redux';

const NotFound = ({imgUrl,heading,subTitle,buttonText}) => {
    const dispatch  = useDispatch();
  return (
    <>
      <div className="container-fluid">
        <div className="container text-center ">
          <div className="d-flex  justify-content-center align-items-center ">
          <img style={{maxWidth:'350px'}} className='w-100' src={imgUrl} alt="emptyimage"/>
          </div>
          <h3>{heading}</h3>
          <p>
           {subTitle}
          </p>
          <Link to={"/"}>
            <button onClick={()=>dispatch(clearFilters())} className="btn btn-primary">{buttonText}</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound