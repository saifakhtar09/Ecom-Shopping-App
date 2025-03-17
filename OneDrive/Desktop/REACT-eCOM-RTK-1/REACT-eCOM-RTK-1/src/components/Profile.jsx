import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const Profile = () => {
  return (
    <>
   
    <div className="container-fluid ps-lg-0 ">
      <div className="row ">
        <div className="col-3 d-none d-lg-block  ">
          {/* <div  style={{maxHeight:"100vh"}} className="sidebar overflow-y-scroll "> */}
         <Sidebar />
        </div>

        <div className="col-12 col-lg-9">
          <div className="d-flex flex-column gap-2 ">
            <div style={{height:"50vh"}} className="profile-container px-1 d-flex justify-content-center align-items-center">


                <div  className='w-100 profile-card  overflow-x-hidden px-3 py-4 bg-light position-relative d-flex gap-4 align-items-center'>
                    <div style={{maxWidth:"200px",minWidth:"115px"}} className="w-100 rounded-circle overflow-hidden border border-primary profile-img-wrapper">
                        <img className='object-fit-cover w-100' src="https://www.nykaa.com/assets/mobile/images/my_profile/default_avatar.svg" alt="profile-img" />
                        
                    </div>

                        <div className="profile-content">
                            <h3 className='p-0 m-0 profile-heading'>"" S A</h3>
                            <span className='d-block text-secondary'> <span className='fw-bold '>Email-</span> saifakhtar299@gmail.com</span>
                            <span className='d-block text-secondary'> <span className='fw-bold '>DOB-</span> 20/10/2000</span>
                        </div>
                    <div className="position-absolute top-0 mt-2 me-3 end-0">
                    <i class="fa-solid fa-pencil"></i> Edit
                    </div>
                </div>


            </div>


            <div className="container mt-2">
              <div className="d-flex justify-content-between mb-2">
                  <h3 className='profile-heading'>  <i className='fa-solid fa-home'></i>  <span>MY ADDRESSES</span></h3>
                  <h3 className='profile-heading text-secondary fw-light text-end'>  <i className='fa-solid fa-pencil'></i>  <span>Add new address</span></h3>
              </div>
              <div className="row g-3">
                <div className="col-12 col-lg-6">
                  <div className="card text-black px-2 py-3">
                    <div className="card-heading ">
                      No address
                    </div>
                    <div className="card-body ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ut necessitatibus eligendi! Assumenda placeat, qui laborum quis tempora in esse mollitia? Delectus placeat, beatae illum doloribus unde eveniet ex veniam!
                    </div>
                    <div className="card-footer">
                      lorevdjvfjdf d cedhcjh
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="card text-black px-2 py-3">
                    <div className="card-heading ">
                      No address
                    </div>
                    <div className="card-body ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ut necessitatibus eligendi! Assumenda placeat, qui laborum quis tempora in esse mollitia? Delectus placeat, beatae illum doloribus unde eveniet ex veniam!
                    </div>
                    <div className="card-footer">
                      lorevdjvfjdf d cedhcjh
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    
    </>
  )
}

export default Profile