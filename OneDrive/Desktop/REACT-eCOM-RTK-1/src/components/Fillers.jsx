import React from 'react'

const Fillers = () => {
  return (
   <>
    
  <section className="py-3">
    <div className="container-lg">
      <div className="row">
        <div className="col-md-12">
          <div className="banner-blocks">
            <div className="banner-ad d-flex align-items-center large bg-info block-1" style={{background: 'url("images/banner-ad-1.jpg") no-repeat', backgroundSize: 'cover'}}>
              <div className="banner-content p-5">
                <div className="content-wrapper text-light">
                  <h3 className="banner-title text-light">Items on SALE</h3>
                  <p>Discounts up to 30%</p>
                  <a href="#" className="btn-link text-white">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="banner-ad bg-success-subtle block-2" style={{background: 'url("images/banner-ad-2.jpg") no-repeat', backgroundSize: 'cover'}}>
              <div className="banner-content align-items-center p-5">
                <div className="content-wrapper text-light">
                  <h3 className="banner-title text-light">Combo offers</h3>
                  <p>Discounts up to 50%</p>
                  <a href="#" className="btn-link text-white">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="banner-ad bg-danger block-3" style={{background: 'url("images/banner-ad-3.jpg") no-repeat', backgroundSize: 'cover'}}>
              <div className="banner-content align-items-center p-5">
                <div className="content-wrapper text-light">
                  <h3 className="banner-title text-light">Discount Coupons</h3>
                  <p>Discounts up to 40%</p>
                  <a href="#" className="btn-link text-white">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
          {/* / Banner Blocks */}
        </div>
      </div>
    </div>
  </section>



  <section>
    <div className="container-lg">
      <div className="bg-secondary text-light py-5 my-5" style={{background: 'url("images/banner-newsletter.jpg") no-repeat', backgroundSize: 'cover'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 p-3">
              <div className="section-header">
                <h2 className="section-title display-5 text-light">Get 25% Discount on your first purchase</h2>
              </div>
              <p>Just Sign Up &amp; Register it now to become member.</p>
            </div>
            <div className="col-md-5 p-3">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label d-none">Name</label>
                  <input type="text" className="form-control form-control-md rounded-0" name="name" id="name" placeholder="Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label d-none">Email</label>
                  <input type="email" className="form-control form-control-md rounded-0" name="email" id="email" placeholder="Email Address" />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-dark btn-md rounded-0">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   </>
  )
}

export default Fillers