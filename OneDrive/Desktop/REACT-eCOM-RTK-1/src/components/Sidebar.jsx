import React, { useState } from 'react'
import { Link , NavLink} from 'react-router-dom'

// hint useLocation will use in future instead of NavLink
const Sidebar = ({activeTab}) => {

    const[activeTabs,setActiveTabs] = useState("orders");

    const handleActiveTabs = (val)=>{
      
            setActiveTabs(val)
          
        }
      

  return (
   <>
   <div  style={{ backgroundColor: "#eaeaea", minHeight: "100vh" }}
            className="sidebar pt-4 pe-3 ">
           
            <ul className="list-unstyled">
            <Link to={'/orders'}  className="text-decoration-none ">
              <li className={`${activeTabs==="orders"?"list-active":""} rounded-end-pill ps-4  py-2`} onClick={()=>handleActiveTabs("orders")}>
                
                  <div className="d-flex justify-content-between">
                    <span>
                      <i className="fa-solid fa-bag-shopping me-3"></i>
                      View Orders
                    </span>
                    <span className="me-4"> 3</span>
                  </div>
               
              </li>
              </Link>

              <Link to={'/profile'} className="text-decoration-none ">
              <li className={`${activeTabs==="profile"?"list-active":""} rounded-end-pill ps-4  py-2`} onClick={()=>handleActiveTabs("profile")}>
                
                  <div className="d-flex justify-content-between">
                    <span>
                      <i className="fa-solid fa-user me-3"></i>
                      Personal details
                    </span>
                    <span className="me-4"> 3</span>
                  </div>
             
              </li>
              </Link>


              <Link className="text-decoration-none">
              <li className={`${activeTabs==="changePass"?"list-active":""} rounded-end-pill ps-4  py-2`} onClick={()=>handleActiveTabs("changePass")}>
              
                  <div className="d-flex justify-content-between">
                    <span>
                      <i className="fa-solid fa-lock me-3"></i>
                      change password
                    </span>
                    <span className="me-4"> 3</span>
                  </div>
              
              </li>
              </Link>

              <Link to={'/cart'} className="text-decoration-none ">
              <li className={`${activeTabs==="cart"?"list-active":""} rounded-end-pill ps-4  py-2`} onClick={()=>handleActiveTabs("cart")}>
              
                  <div className="d-flex justify-content-between">
                    <span>
                      <i className="fa-solid fa-cart-shopping  me-3"></i>
                     My cart
                    </span>
                    <span className="me-4"> 3</span>
                  </div>
     
              </li>
              </Link>


              <Link to={'/wishlist'} className="text-decoration-none ">
              <li className={`${activeTabs==="wishlist"?"list-active":""} rounded-end-pill ps-4  py-2`} onClick={()=>handleActiveTabs("wishlist")}>
                
                  <div className="d-flex justify-content-between">
                    <span>
                      <i className="fa-solid fa-heart  me-3"></i>
                    My wishlist
                    </span>
                    <span className="me-4"> 3</span>
                  </div>
       
              </li>
              </Link>


              <Link className="text-decoration-none ">
              <li className={`${activeTabs==="logout"?"list-active":""} rounded-end-pill ps-4  py-2`} onClick={()=>handleActiveTabs("logout")}>
               
                  <div className="d-flex justify-content-between">
                    <span>
                      <i className="fa-solid fa-right-from-bracket me-3"></i>
                      Logout
                    </span>
                    <span className="me-4"> 3</span>
                  </div>
          
              </li>
              </Link>

            </ul>

          </div>
      
   

   </>
  )
}

export default Sidebar