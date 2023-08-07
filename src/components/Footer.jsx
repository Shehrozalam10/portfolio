import React from 'react'

const Footer = () => {
    const year=new Date().getFullYear();

  return (
    <>
    <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
            <div className="first mt-5">
                {/* <h4>
                    shehroz alam
                </h4> */}
                
                <p>
                    <i className="fa-brands fa-facebook mx-3"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>

                </p>
                <p> © {year} shehroz alam all rights reserved</p>
                <p>made with ❤️ by shehroz alam</p>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer