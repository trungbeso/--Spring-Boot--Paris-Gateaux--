import React from 'react'
import {assets} from "../assets/assets.js";
import {Link} from "react-router-dom";

const Menubar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link to={'/'}>
          <img src={assets.logo} alt="logo" width={52} height={52}/>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-6">
            <li className="nav-item">
              <Link className="nav-link" to="/" >Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/explore">Explore</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
        </ul>
          <div className="d-flex align-items-center gap-3">
            <Link to={`/cart`}>
              <div className="position-relative">
                <img src={assets.cart} alt="cart" height={38} width={38}/>
                <span
                    className="posotion-abstolute top-0 start-100 translate-middle badge rounded-pill bg-danger">5</span>
              </div>
            </Link>
            <button className="btn btn-outline-primary">
              login
            </button>
            <button className="btn btn-outline-success">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menubar
