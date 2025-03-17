import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';

const Orders = () => {
  return (
    <div className="container-fluid ps-lg-0 ">
      <div className="row">
        <div className="col-3 d-none d-lg-block  ">
          {/* <div  style={{maxHeight:"100vh"}} className="sidebar overflow-y-scroll "> */}
          <Sidebar />

        </div>

        <div className="col-12 col-lg-9">
          <div className="orders-container">
            <h1>Orders history</h1>
            <div>3 Orders</div>
<ul className='list-unstyled order-detail-list'>

<li className="  bg-grey mb-3  p-4">
                
                <div className="d-flex align-items-center gap-2 mb-1">
                <span className=' ship-status '></span>
                <h6 className='m-0'> Dispatched</h6>
                </div>
             
              <div className="row   g-4">
                <div className="col-12 col-lg-8">
                  <ul className="list-unstyled d-flex flex-column gap-1">
                    <li className="card px-3 py-2">
                      <div className="d-flex  align-items-center gap-3">
                        <figure
                          className="m-0 p-1 bg-grey"
                          style={{ maxWidth: "110px" }}
                        >
                          <img
                            className="img-fluid object-fit-contain"
                            src="/images/sample-image.jpg"
                            alt="product_img"
                          />
                        </figure>
                        <div>
                          <h6>Arrives Tommorrow</h6>
                          <div>7am - 7pm</div>
                        </div>
                      </div>
                    </li>

                    <li className="card px-3 py-2">
                      <div className="d-flex  align-items-center gap-3">
                        <figure
                          className="m-0 p-1 bg-grey"
                          style={{ maxWidth: "110px" }}
                        >
                          <img
                            className="img-fluid object-fit-contain"
                            src="/images/sample-image.jpg"
                            alt="product_img"
                          />
                        </figure>
                        <div>
                          <h6>Arrives Tommorrow</h6>
                          <div>7am - 7pm</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="d-flex gap-1 flex-column justify-content-center ">
                    <button className="btn btn-primary py-2  ">
                      Track Order
                    </button>
                    <button className="btn btn-outline-info py-2  ">
                      View Order details
                    </button>
                    <div className="d-flex flex-row flex-lg-column flex-wrap justify-content-evenly ">
                    <button className="btn text-info py-2 ">
                      Get Invoice
                    </button>
                    <button className="btn text-info py-2  ">
                      Edit Order
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className=" bg-grey mb-3 p-4">
                
                <div className="d-flex align-items-center gap-2 mb-1">
                <span className=' ship-status '></span>
                <h6 className='m-0'> Dispatched</h6>
                </div>
             
              <div className="row   g-4">
                <div className="col-12 col-lg-8">
                  <ul className="list-unstyled d-flex flex-column gap-1">
                    <li className="card px-3 py-2">
                      <div className="d-flex  align-items-center gap-3">
                        <figure
                          className="m-0 p-1 bg-grey"
                          style={{ maxWidth: "110px" }}
                        >
                          <img
                            className="img-fluid object-fit-contain"
                            src="/images/sample-image.jpg"
                            alt="product_img"
                          />
                        </figure>
                        <div>
                          <h6>Arrives Tommorrow</h6>
                          <div>7am - 7pm</div>
                        </div>
                      </div>
                    </li>

                    <li className="card px-3 py-2">
                      <div className="d-flex  align-items-center gap-3">
                        <figure
                          className="m-0 p-1 bg-grey"
                          style={{ maxWidth: "110px" }}
                        >
                          <img
                            className="img-fluid object-fit-contain"
                            src="/images/sample-image.jpg"
                            alt="product_img"
                          />
                        </figure>
                        <div>
                          <h6>Arrives Tommorrow</h6>
                          <div>7am - 7pm</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="d-flex gap-1 flex-column justify-content-center ">
                    <button className="btn btn-primary py-2  ">
                      Track Order
                    </button>
                    <button className="btn btn-outline-info py-2  ">
                      View Order details
                    </button>
                    <div className="d-flex flex-row flex-lg-column flex-wrap justify-content-evenly ">
                    <button className="btn text-info py-2 ">
                      Get Invoice
                    </button>
                    <button className="btn text-info py-2  ">
                      Edit Order
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className=" bg-grey mb-3 p-4">
                
                <div className="d-flex align-items-center gap-2 mb-1">
                <span className=' ship-status '></span>
                <h6 className='m-0'> Dispatched</h6>
                </div>
             
              <div className="row   g-4">
                <div className="col-12 col-lg-8">
                  <ul className="list-unstyled d-flex flex-column gap-1">
                    <li className="card px-3 py-2">
                      <div className="d-flex  align-items-center gap-3">
                        <figure
                          className="m-0 p-1 bg-grey"
                          style={{ maxWidth: "110px" }}
                        >
                          <img
                            className="img-fluid object-fit-contain"
                            src="/images/sample-image.jpg"
                            alt="product_img"
                          />
                        </figure>
                        <div>
                          <h6>Arrives Tommorrow</h6>
                          <div>7am - 7pm</div>
                        </div>
                      </div>
                    </li>

                    <li className="card px-3 py-2">
                      <div className="d-flex  align-items-center gap-3">
                        <figure
                          className="m-0 p-1 bg-grey"
                          style={{ maxWidth: "110px" }}
                        >
                          <img
                            className="img-fluid object-fit-contain"
                            src="/images/sample-image.jpg"
                            alt="product_img"
                          />
                        </figure>
                        <div>
                          <h6>Arrives Tommorrow</h6>
                          <div>7am - 7pm</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="d-flex gap-1 flex-column justify-content-center ">
                    <button className="btn btn-primary py-2  ">
                      Track Order
                    </button>
                    <button className="btn btn-outline-info py-2  ">
                      View Order details
                    </button>
                    <div className="d-flex flex-row flex-lg-column flex-wrap justify-content-evenly ">
                    <button className="btn text-info py-2 ">
                      Get Invoice
                    </button>
                    <button className="btn text-info py-2  ">
                      Edit Order
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="  bg-grey mb-3 p-4">
                
                <div className="d-flex align-items-center gap-2 mb-1">
                <span className=' ship-status '></span>
                <h6 className='m-0'> Dispatched</h6>
                </div>
             
              <div className="row   g-4">
                <div className="col-12 col-lg-8">
                  <ul className="list-unstyled d-flex flex-column gap-1">
                    <li className="card px-3 py-2">
                      <div className="d-flex  align-items-center gap-3">
                        <figure
                          className="m-0 p-1 bg-grey"
                          style={{ maxWidth: "110px" }}
                        >
                          <img
                            className="img-fluid object-fit-contain"
                            src="/images/sample-image.jpg"
                            alt="product_img"
                          />
                        </figure>
                        <div>
                          <h6>Arrives Tommorrow</h6>
                          <div>7am - 7pm</div>
                        </div>
                      </div>
                    </li>

                    <li className="card px-3 py-2">
                      <div className="d-flex  align-items-center gap-3">
                        <figure
                          className="m-0 p-1 bg-grey"
                          style={{ maxWidth: "110px" }}
                        >
                          <img
                            className="img-fluid object-fit-contain"
                            src="/images/sample-image.jpg"
                            alt="product_img"
                          />
                        </figure>
                        <div>
                          <h6>Arrives Tommorrow</h6>
                          <div>7am - 7pm</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="d-flex gap-1 flex-column justify-content-center ">
                    <button className="btn btn-primary py-2  ">
                      Track Order
                    </button>
                    <button className="btn btn-outline-info py-2  ">
                      View Order details
                    </button>
                    <div className="d-flex flex-row flex-lg-column flex-wrap justify-content-evenly ">
                    <button className="btn text-info py-2 ">
                      Get Invoice
                    </button>
                    <button className="btn text-info py-2  ">
                      Edit Order
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className=" bg-grey mb-3  p-4">
                
                <div className="d-flex align-items-center gap-2 mb-1">
                <span className=' ship-status '></span>
                <h6 className='m-0'> Dispatched</h6>
                </div>
             
              <div className="row   g-4">
                <div className="col-12 col-lg-8">
                  <ul className="list-unstyled d-flex flex-column gap-1">
                    <li className="card px-3 py-2">
                      <div className="d-flex  align-items-center gap-3">
                        <figure
                          className="m-0 p-1 bg-grey"
                          style={{ maxWidth: "110px" }}
                        >
                          <img
                            className="img-fluid object-fit-contain"
                            src="/images/sample-image.jpg"
                            alt="product_img"
                          />
                        </figure>
                        <div>
                          <h6>Arrives Tommorrow</h6>
                          <div>7am - 7pm</div>
                        </div>
                      </div>
                    </li>

                    <li className="card px-3 py-2">
                      <div className="d-flex  align-items-center gap-3">
                        <figure
                          className="m-0 p-1 bg-grey"
                          style={{ maxWidth: "110px" }}
                        >
                          <img
                            className="img-fluid object-fit-contain"
                            src="/images/sample-image.jpg"
                            alt="product_img"
                          />
                        </figure>
                        <div>
                          <h6>Arrives Tommorrow</h6>
                          <div>7am - 7pm</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="d-flex gap-1 flex-column justify-content-center ">
                    <button className="btn btn-primary py-2  ">
                      Track Order
                    </button>
                    <button className="btn btn-outline-info py-2  ">
                      View Order details
                    </button>
                    <div className="d-flex flex-row flex-lg-column flex-wrap justify-content-evenly ">
                    <button className="btn text-info py-2 ">
                      Get Invoice
                    </button>
                    <button className="btn text-info py-2  ">
                      Edit Order
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className=" bg-grey  p-4">
                
                <div className="d-flex align-items-center gap-2 mb-1">
                <span className=' ship-status '></span>
                <h6 className='m-0'> Dispatched</h6>
                </div>
             
              <div className="row   g-4">
                <div className="col-12 col-lg-8">
                  <ul className="list-unstyled d-flex flex-column gap-1">
                    <li className="card px-3 py-2">
                      <div className="d-flex  align-items-center gap-3">
                        <figure
                          className="m-0 p-1 bg-grey"
                          style={{ maxWidth: "110px" }}
                        >
                          <img
                            className="img-fluid object-fit-contain"
                            src="/images/sample-image.jpg"
                            alt="product_img"
                          />
                        </figure>
                        <div>
                          <h6>Arrives Tommorrow</h6>
                          <div>7am - 7pm</div>
                        </div>
                      </div>
                    </li>

                    <li className="card px-3 py-2">
                      <div className="d-flex  align-items-center gap-3">
                        <figure
                          className="m-0 p-1 bg-grey"
                          style={{ maxWidth: "110px" }}
                        >
                          <img
                            className="img-fluid object-fit-contain"
                            src="/images/sample-image.jpg"
                            alt="product_img"
                          />
                        </figure>
                        <div>
                          <h6>Arrives Tommorrow</h6>
                          <div>7am - 7pm</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="d-flex gap-1 flex-column justify-content-center ">
                    <button className="btn btn-primary py-2  ">
                      Track Order
                    </button>
                    <button className="btn btn-outline-info py-2  ">
                      View Order details
                    </button>
                    <div className="d-flex flex-row flex-lg-column flex-wrap justify-content-evenly ">
                    <button className="btn text-info py-2 ">
                      Get Invoice
                    </button>
                    <button className="btn text-info py-2  ">
                      Edit Order
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
</ul>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders