import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start text-white bg-dark" id="contact">
    <div className="container p-4 pb-0">
      <section className="">
        <div className="row">
  
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Contact Us
            </h6>
            <p>Call : 012345679</p>
            <p>"Sports do not build character. They reveal it." - Heywood Broun.""
            </p>
          </div>


          <hr className="w-100 d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Features</h6>
            <p>
              <a className="text-white">Home</a>
            </p>
            <p>
              <a className="text-white">Advertising</a>
            </p>
            <p>
              <a className="text-white">Pricing</a>
            </p>
            <p>
              <a className="text-white">Contact</a>
            </p>
          </div>


          <hr className="w-100  d-md-none" />


          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold ">
              Information
            </h6>
            <p>
              <a className="text-white ">About Us</a>
            </p>
            <p>
              <a className="text-white">Coaches</a>
            </p>
            <p>
              <a className="text-white">Media</a>
            </p>
            <p>
              <a className="text-white">Careers</a>
            </p>
            <p>
              <a className="text-white">Blog</a>
            </p>
          </div>


          <hr className="w-100 d-md-none" />


          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
 
            <h6 className="text-uppercase mb-4 font-weight-bold">Terms and Conditions</h6>
            <p>Terms of services</p>
            <p>Privacy Policy</p>
            <p>Security</p>
          </div>

        </div>

      </section>


      <hr className="my-3"></hr>

      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">

          <div className="col-md-7 col-lg-8 text-center text-md-start">
          </div>

          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end d-flex align-content-center">
            <a
               className="btn btn-floating  btn-outline-light m-1 text-white"
    
               >
                <i className="fab fa-facebook"></i></a>

            <a
               className="btn btn-outline-light btn-floating m-1 text-white"
        
               >
                <i className="fab fa-twitter"></i></a>

            <a
               className="btn btn-outline-light btn-floating m-1 text-white"
             
               ><i className="fab fa-linkedin"></i></a>

            <a
               className="btn btn-outline-light btn-floating m-1 text-white"
               ><i className="fab fa-instagram"></i></a>
          </div>

        </div>
      </section>

    </div>

  </footer>
  );
}
