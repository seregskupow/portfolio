import React from 'react'
import Img from '../img/travolta.png'

export default function NotFound() {
    return (
        <section>
 <div className="notfound-content container mt-5 parallax">
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 col-lg-6 my-auto order-2 order-md-0 order-lg-0">
          <img
              src={Img}
              style={{ height: "520px" }}
              className="img-fluid rounded travolta"
              alt=""
            />
          </div>
          <div className="col-10 col-sm-8 col-md-6 col-lg-6 mx-auto d-flex justify-content-center">
           
             <div className="text">
                <h1 className="text-uppercase" >404</h1>
                <p>You just activated a nuclear warhead, my friend...</p>
                <p className="text-right">John Travolta</p>
            </div>
          </div>
        </div>
      </div>
        </section>
    )
}
