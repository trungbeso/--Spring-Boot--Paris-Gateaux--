import {useContext, useState} from 'react'
import {assets} from "../assets/assets.js";
import {Link} from "react-router-dom";
import {StoreContext} from "../context/index.js";
import './Menubar.css'

const Menubar = () => {
  const [active, setActive] = useState('home');
  const {quantities} = useContext(StoreContext);
  const uniqueItemFromCart = Object.values(quantities).filter(qty => qty > 0).length;

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
              <Link className={active === 'home' ? 'nav-link fw-bold active' : 'nav-link'} to="/" onClick={() => setActive('home')}>Home</Link>
            </li>

            <li className="nav-item">
              <Link className={active === 'explore' ? 'nav-link fw-bold active' : 'nav-link'} to="/explore" onClick={() => setActive('explore')}>Explore</Link>
            </li>

            <li className="nav-item">
              <Link className={active === 'contact-us' ? 'nav-link fw-bold active' : 'nav-link'} to="/contact" onClick={() => setActive('contact-us')}>Contact Us</Link>
            </li>
        </ul>
          <div className="d-flex align-items-center gap-3">
            <Link to={`/cart`}>
              <div className="position-relative">
                <img src={assets.cart} alt="cart" height={38} width={38}/>
                <span
                    className="posotion-abstolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {uniqueItemFromCart}
                </span>
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
