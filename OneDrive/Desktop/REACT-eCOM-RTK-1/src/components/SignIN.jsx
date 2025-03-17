import React from 'react'
import { logIn } from "../features/auth/authSlice";
import { useDispatch } from 'react-redux';

const SignIN = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(logIn());
        // e.target.setAttribute("data-bs-dismiss", "modal");
        // Clear the form inputs
  e.target.reset();
  const modal = bootstrap.Modal.getInstance(document.getElementById("login"));
  modal.hide();
            
          
    }
  return (
   <>
   {/* Login-modal */}
    <div className="modal fade " id="login" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content glass">
          

          
        <div className="modal-header ">

          <h1 className="modal-title fs-2 text-light  " id="staticBackdropLabel">Login</h1>
          <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close" />

        </div>

        <div className="modal-body">

        <form onSubmit={handleSubmit}  >

 <div className="form-floating mb-3 has-validation">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
  <label className='text-secondary' htmlFor="floatingInput">Email address</label>
  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
 
</div>

<div className="form-floating mb-3 has-validation">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
  <label  className='text-secondary' htmlFor="floatingPassword">Password</label>
  
</div>

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="rememberme"  />
    <label className="form-check-label" htmlFor="rememberme">Remember me</label>
   
  </div>
  <div className='d-flex justify-content-center align-items-center flex-column'>
  <button  type="submit" className="btn btn-primary ">Login</button>
  <div type="button" className="form-text text-decoration-underline text-light" data-bs-toggle="modal" data-bs-target="#signup">or SignUp</div>
  </div>
</form>
        </div>


      </div>
    </div>
  </div>

  


   </>
  )
}

export default SignIN