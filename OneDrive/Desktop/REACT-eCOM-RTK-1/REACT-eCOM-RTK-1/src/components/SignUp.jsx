import React from 'react'

const SignUp = () => {
  return (
   <>
    {/* signup-modal */}
  <div className="modal fade " id="signup" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content glass">
          

          
        <div className="modal-header ">

          <h1 className="modal-title fs-2 text-light  " id="staticBackdropLabel">Sign Up</h1>
          <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close" />

        </div>

        <div className="modal-body">

        <form    >

        <div className="form-floating mb-3">
<input type="text" className="form-control" id="floatingFirstName" placeholder="first name" required/>
<label className='text-secondary' htmlFor="floatingFirstName">First Name</label>
</div>
        <div className="form-floating mb-3">
 
  
  <input type="text" className="form-control" id="floatingLastName" placeholder="Last Name" required/>
  <label className='text-secondary' htmlFor="floatingLastName">Last Name</label>

</div>



 <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" required/>
  <label className='text-secondary' htmlFor="floatingEmail">Email address</label>
  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
 
</div>
<div className="form-floating mb-3 has-validation">
  <input type="email" className="form-control" id="floatingReEmail" placeholder="name@example.com" required/>
  <label className='text-secondary' htmlFor="floatingReEmail">Re-Enter Email address</label>
 
 
</div>

<div className="form-floating mb-3 has-validation">
  <input type="password" className="form-control" id="floatingPasswordSignUp" placeholder="Password" required />
  <label  className='text-secondary' htmlFor="floatingPasswordSignUp">Password</label>
  
</div>

<div className="form-floating mb-3 has-validation">
  <input type="password" className="form-control" id="floatingRePassword" placeholder="Password" required />
  <label  className='text-secondary' htmlFor="floatingRePassword">Re-Enter Password</label>
  
</div>

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="keepmeloggedin" />
    <label className="form-check-label" htmlFor="keepmeloggedin">Keep me logged in</label>
   
  </div>
  <div className='d-flex justify-content-center align-items-center flex-column'>
  <button  type="submit" className="btn btn-primary">Sign up</button>
  <div type="button" className="form-text text-decoration-underline text-light" data-bs-toggle="modal" data-bs-target="#login">or login</div>
  </div>
</form>
        </div>


      </div>
    </div>
  </div>
   </>
  )
}

export default SignUp