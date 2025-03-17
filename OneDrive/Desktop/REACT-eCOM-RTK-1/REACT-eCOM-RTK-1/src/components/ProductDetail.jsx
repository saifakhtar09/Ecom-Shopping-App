import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProductDetail } from "../features/products/productsSlice";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import {
    addToWishList,
    removeFromWishList,
  } from "../features/wishlist/wishListSlice";
const ProductDetail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const { productDetail, loading, error } = useSelector(
    (state) => state.products
  );
   const cartItems = useSelector((state) => state.cart.cartItems);
     const wishList = useSelector((state) => state.wishlist.wishListItems);

  useEffect(() => {

    dispatch(fetchProductDetail(id));
    
  }, []);

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
  const isInWishList = (itemId) => {
    if (wishList.length > 0) {
      for (let i = 0; i < wishList.length; i++) {
        if (wishList[i].id === itemId) {
          return true;
        }
      }
      return false;
    }
  };

  if (loading) return <>loading...</>;
  if (error) return <>{error} </>;
  if (!productDetail) return <>Product Not Found</>;

  return (
    <>
      {/* Single Page Header start */}
<div className="container-fluid page-header py-5" style={{ backgroundImage: "url('/images/banner-1.jpg')" }}>
  <h1 className="text-center text-white display-6">Shop Detail</h1>
  <ol className="breadcrumb justify-content-center mb-0">
    <li className="breadcrumb-item"> <Link to={"/"}>Home</Link></li>
    <li className="breadcrumb-item">product</li>
    <li className="breadcrumb-item active text-white">productdetail</li>
  </ol>
</div>
{/* Single Page Header End */}

   
      <div className="container-fluid  mt-5">
        <div className="container">
            
          <div className="row">
            <div className=" mx-auto col-lg-10">
              <div className="row g-4  ">
                <div className="col-lg-6 ">
                  <div
                    className="border rounded p-5"
                    style={{ backgroundColor: "rgb(198 199 200)" }}
                  >
                    <img
                      src={productDetail.image}
                      className="img-fluid rounded"
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h4 className="fw-bold mb-3">{productDetail.title}</h4>
                  <p className="mb-3">Category: {productDetail.category}</p>
                  <h5 className="fw-bold mb-3">$ {productDetail.price}</h5>
                  <div className="d-flex mb-4">
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star" />
                  </div>
                  <p className="mb-4">{productDetail.description}</p>

                  <div className="d-flex align-items-center justify-content-center mt-4 gap-3 flex-wrap">

{!isInCart(productDetail.id)? <button onClick={()=>dispatch(addToCart(productDetail))} className="btn btn-primary rounded-pill px-4 py-2">
                      <svg className="mx-2" width={18} height={18}>
                        <use xlinkHref="#cart" />
                      </svg>{" "}
                      Add to cart
                    </button> :<button onClick={()=>dispatch(removeFromCart(productDetail))} className="btn btn-danger rounded-pill px-4 py-2">
                      <svg className="mx-2" width={18} height={18}>
                        <use xlinkHref="#cart" />
                      </svg>{" "}
                     Remove from cart
                    </button>
                    }
                   

{!isInWishList(productDetail.id)?
  <button onClick={()=>dispatch(addToWishList(productDetail))} className="btn  btn-primary  rounded-pill px-4 py-2">
  {" "}
  <svg className="mx-2" width={18} height={18}>
    <use xlinkHref="#heart" />
  </svg>{" "}
  Add to wishlist
</button>
:
<button  onClick={()=>dispatch(removeFromWishList(productDetail))} className="btn  btn-danger  rounded-pill px-4 py-2">
{" "}
<svg className="mx-2" width={18} height={18}>
  <use xlinkHref="#heart" />
</svg>{" "}
Remove from wishlist
</button>
}
                  
                  </div>
                </div>

                {/* <form action="#">
              <h4 className="mb-5 fw-bold">Leave a Reply</h4>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="border-bottom rounded">
                    <input type="text" className="form-control border-0 me-4" placeholder="Yur Name *" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="border-bottom rounded">
                    <input type="email" className="form-control border-0" placeholder="Your Email *" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="border-bottom rounded my-4">
                    <textarea name id className="form-control border-0" cols={30} rows={8} placeholder="Your Review *" spellCheck="false" defaultValue={""} />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="d-flex justify-content-between py-3 mb-5">
                    <div className="d-flex align-items-center">
                      <p className="mb-0 me-3">Please rate:</p>
                      <div className="d-flex align-items-center" style={{fontSize: 12}}>
                        <i className="fa fa-star text-muted" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                    </div>
                    <a href="#" className="btn border border-secondary text-primary rounded-pill px-4 py-3"> Post Comment</a>
                  </div>
                </div>
              </div>
            </form> */}
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <nav>
                    <div className="nav nav-tabs mb-3">
                      <button
                        className="nav-link active border-white border-bottom-0"
                        type="button"
                        role="tab"
                        id="nav-about-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-about"
                        aria-controls="nav-about"
                        aria-selected="true"
                      >
                        Description
                      </button>
                      <button
                        className="nav-link border-white border-bottom-0"
                        type="button"
                        role="tab"
                        id="nav-mission-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-mission"
                        aria-controls="nav-mission"
                        aria-selected="false"
                      >
                        Reviews
                      </button>
                    </div>
                  </nav>

                  <div className="tab-content mb-5">
                    <div
                      className="tab-pane active"
                      id="nav-about"
                      role="tabpanel"
                      aria-labelledby="nav-about-tab"
                    >
                      <p>{productDetail.description} </p>

                      {/* <div className="px-2">
                    <div className="row g-4">
                      <div className="col-6">
                        <div className="row bg-light align-items-center text-center justify-content-center py-2">
                          <div className="col-6">
                            <p className="mb-0">Weight</p>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">1 kg</p>
                          </div>
                        </div>
                        <div className="row text-center align-items-center justify-content-center py-2">
                          <div className="col-6">
                            <p className="mb-0">Country of Origin</p>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">Agro Farm</p>
                          </div>
                        </div>
                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                          <div className="col-6">
                            <p className="mb-0">Quality</p>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">Organic</p>
                          </div>
                        </div>
                        <div className="row text-center align-items-center justify-content-center py-2">
                          <div className="col-6">
                            <p className="mb-0">Сheck</p>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">Healthy</p>
                          </div>
                        </div>
                        <div className="row bg-light text-center align-items-center justify-content-center py-2">
                          <div className="col-6">
                            <p className="mb-0">Min Weight</p>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">250 Kg</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                   */}
                    </div>

                    {/* <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                  <div className="d-flex">
                    <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{width: 100, height: 100}} alt />
                    <div className>
                      <p className="mb-2" style={{fontSize: 14}}>April 12, 2024</p>
                      <div className="d-flex justify-content-between">
                        <h5>Jason Smith</h5>
                        <div className="d-flex mb-3">
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star" />
                        </div>
                      </div>
                      <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic 
                        words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{width: 100, height: 100}} alt />
                    <div className>
                      <p className="mb-2" style={{fontSize: 14}}>April 12, 2024</p>
                      <div className="d-flex justify-content-between">
                        <h5>Sam Peters</h5>
                        <div className="d-flex mb-3">
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star text-secondary" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                      </div>
                      <p className="text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic 
                        words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                    </div>
                  </div>
                </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4 col-xl-3">
          <div className="row g-4 fruite">
            <div className="col-lg-12">
              <div className="input-group w-100 mx-auto d-flex mb-4">
                <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
              </div>
              <div className="mb-4">
                <h4>Categories</h4>
                <ul className="list-unstyled fruite-categorie">
                  <li>
                    <div className="d-flex justify-content-between fruite-name">
                      <a href="#"><i className="fas fa-apple-alt me-2" />Apples</a>
                      <span>(3)</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between fruite-name">
                      <a href="#"><i className="fas fa-apple-alt me-2" />Oranges</a>
                      <span>(5)</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between fruite-name">
                      <a href="#"><i className="fas fa-apple-alt me-2" />Strawbery</a>
                      <span>(2)</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between fruite-name">
                      <a href="#"><i className="fas fa-apple-alt me-2" />Banana</a>
                      <span>(8)</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between fruite-name">
                      <a href="#"><i className="fas fa-apple-alt me-2" />Pumpkin</a>
                      <span>(5)</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <h4 className="mb-4">Featured products</h4>
              <div className="d-flex align-items-center justify-content-start">
                <div className="rounded" style={{width: 100, height: 100}}>
                  <img src="img/featur-1.jpg" className="img-fluid rounded" alt="Image" />
                </div>
                <div>
                  <h6 className="mb-2">Big Banana</h6>
                  <div className="d-flex mb-2">
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="d-flex mb-2">
                    <h5 className="fw-bold me-2">2.99 $</h5>
                    <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <div className="rounded" style={{width: 100, height: 100}}>
                  <img src="img/featur-2.jpg" className="img-fluid rounded" alt />
                </div>
                <div>
                  <h6 className="mb-2">Big Banana</h6>
                  <div className="d-flex mb-2">
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="d-flex mb-2">
                    <h5 className="fw-bold me-2">2.99 $</h5>
                    <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <div className="rounded" style={{width: 100, height: 100}}>
                  <img src="img/featur-3.jpg" className="img-fluid rounded" alt />
                </div>
                <div>
                  <h6 className="mb-2">Big Banana</h6>
                  <div className="d-flex mb-2">
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="d-flex mb-2">
                    <h5 className="fw-bold me-2">2.99 $</h5>
                    <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <div className="rounded me-4" style={{width: 100, height: 100}}>
                  <img src="img/vegetable-item-4.jpg" className="img-fluid rounded" alt />
                </div>
                <div>
                  <h6 className="mb-2">Big Banana</h6>
                  <div className="d-flex mb-2">
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="d-flex mb-2">
                    <h5 className="fw-bold me-2">2.99 $</h5>
                    <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <div className="rounded me-4" style={{width: 100, height: 100}}>
                  <img src="img/vegetable-item-5.jpg" className="img-fluid rounded" alt />
                </div>
                <div>
                  <h6 className="mb-2">Big Banana</h6>
                  <div className="d-flex mb-2">
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="d-flex mb-2">
                    <h5 className="fw-bold me-2">2.99 $</h5>
                    <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <div className="rounded me-4" style={{width: 100, height: 100}}>
                  <img src="img/vegetable-item-6.jpg" className="img-fluid rounded" alt />
                </div>
                <div>
                  <h6 className="mb-2">Big Banana</h6>
                  <div className="d-flex mb-2">
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="d-flex mb-2">
                    <h5 className="fw-bold me-2">2.99 $</h5>
                    <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center my-4">
                <a href="#" className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">Vew More</a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="position-relative">
                <img src="img/banner-fruits.jpg" className="img-fluid w-100 rounded" alt />
                <div className="position-absolute" style={{top: '50%', right: 10, transform: 'translateY(-50%)'}}>
                  <h3 className="text-secondary fw-bold">Fresh <br /> Fruits <br /> Banner</h3>
                </div>
              </div>
            </div>
          </div>
        </div> */}
          </div>

          {/* <h1 className="fw-bold mb-0">Related products</h1>
      <div className="vesitable">
        <div className="owl-carousel vegetable-carousel justify-content-center">
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
            <div className="p-4 pb-0 rounded-bottom">
              <h4>Parsely</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-1.jpg" className="img-fluid w-100 rounded-top" alt />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
            <div className="p-4 pb-0 rounded-bottom">
              <h4>Parsely</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold">$4.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-3.png" className="img-fluid w-100 rounded-top bg-light" alt />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
            <div className="p-4 pb-0 rounded-bottom">
              <h4>Banana</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-4.jpg" className="img-fluid w-100 rounded-top" alt />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
            <div className="p-4 pb-0 rounded-bottom">
              <h4>Bell Papper</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" alt />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
            <div className="p-4 pb-0 rounded-bottom">
              <h4>Potatoes</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
            <div className="p-4 pb-0 rounded-bottom">
              <h4>Parsely</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" alt />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
            <div className="p-4 pb-0 rounded-bottom">
              <h4>Potatoes</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: 10, right: 10}}>Vegetable</div>
            <div className="p-4 pb-0 rounded-bottom">
              <h4>Parsely</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold">$7.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"><i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
