import React from 'react'

const BottomFillers = () => {
  return (
    <>
              <section className="pb-4 my-4">
    <div className="container-lg">
      <div className="bg-warning pt-5 rounded-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4">
              <h2 className="mt-5">Download Organic App</h2>
              <p>Online Orders made easy, fast and reliable</p>
              <div className="d-flex gap-2 flex-wrap mb-5">
                <a href="#" title="App store"><img src="images/img-app-store.png" alt="app-store" /></a>
                <a href="#" title="Google Play"><img src="images/img-google-play.png" alt="google-play" /></a>
              </div>
            </div>
            <div className="col-md-5">
              <img src="images/banner-onlineapp.png" alt="phone" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section className="py-5">
    <div className="container-lg">
      <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
        <div className="col">
          <div className="card mb-3 border border-dark-subtle p-3">
            <div className="text-dark mb-3">
              <svg width={32} height={32}><use xlinkHref="#package" /></svg>
            </div>
            <div className="card-body p-0">
              <h5>Free delivery</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3 border border-dark-subtle p-3">
            <div className="text-dark mb-3">
              <svg width={32} height={32}><use xlinkHref="#secure" /></svg>
            </div>
            <div className="card-body p-0">
              <h5>100% secure payment</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3 border border-dark-subtle p-3">
            <div className="text-dark mb-3">
              <svg width={32} height={32}><use xlinkHref="#quality" /></svg>
            </div>
            <div className="card-body p-0">
              <h5>Quality guarantee</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3 border border-dark-subtle p-3">
            <div className="text-dark mb-3">
              <svg width={32} height={32}><use xlinkHref="#savings" /></svg>
            </div>
            <div className="card-body p-0">
              <h5>guaranteed savings</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3 border border-dark-subtle p-3">
            <div className="text-dark mb-3">
              <svg width={32} height={32}><use xlinkHref="#offers" /></svg>
            </div>
            <div className="card-body p-0">
              <h5>Daily offers</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}

export default BottomFillers