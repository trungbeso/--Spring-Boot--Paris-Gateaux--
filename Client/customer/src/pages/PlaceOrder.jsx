import React from 'react';
import './PlaceOrder.css'

const PlaceOrder = () => {
    return (
        <div className='container mt-3'>
            <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
                <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
                        id="bd-theme"
                        type="button"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"

                        aria-label="Toggle theme (auto)">
                    <svg className="bi my-1 theme-icon-active" aria-hidden="true">
                        <use href="#circle-half"></use>
                    </svg>
                    <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
                    <li>
                        <button type="button" className="dropdown-item d-flex align-items-center"
                                data-bs-theme-value="light" aria-pressed="false">
                            <svg className="bi me-2 opacity-50" aria-hidden="true">
                                <use href="#sun-fill"></use>
                            </svg>
                            Light
                            <svg className="bi ms-auto d-none" aria-hidden="true">
                                <use href="#check2"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" className="dropdown-item d-flex align-items-center"
                                data-bs-theme-value="dark" aria-pressed="false">
                            <svg className="bi me-2 opacity-50" aria-hidden="true">
                                <use href="#moon-stars-fill"></use>
                            </svg>
                            Dark
                            <svg className="bi ms-auto d-none" aria-hidden="true">
                                <use href="#check2"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" className="dropdown-item d-flex align-items-center active"
                                data-bs-theme-value="auto" aria-pressed="true">
                            <svg className="bi me-2 opacity-50" aria-hidden="true">
                                <use href="#circle-half"></use>
                            </svg>
                            Auto
                            <svg className="bi ms-auto d-none" aria-hidden="true">
                                <use href="#check2"></use>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="container">
                <main>
                    <div className="row g-5">
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-primary">Your cart</span>
                                <span className="badge bg-primary rounded-pill">3</span>
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Product name</h6>
                                        <small className="text-body-secondary">Brief description</small>
                                    </div>
                                    <span className="text-body-secondary">$12</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Second product</h6>
                                        <small className="text-body-secondary">Brief description</small>
                                    </div>
                                    <span className="text-body-secondary">$8</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Third item</h6>
                                        <small className="text-body-secondary">Brief description</small>
                                    </div>
                                    <span className="text-body-secondary">$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                                    <div className="text-success">
                                        <h6 className="my-0">Promo code</h6>
                                        <small>EXAMPLECODE</small>
                                    </div>
                                    <span className="text-success">−$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong>$20</strong>
                                </li>
                            </ul>

                            <form className="card p-2">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Promo code"/>
                                    <button type="submit" className="btn btn-secondary">Redeem</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <h4 className="mb-3">Billing address</h4>
                            <form className="needs-validation" noValidate>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="firstName" className="form-label">First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder=""
                                               value="" required/>
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <label htmlFor="lastName" className="form-label">Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder=""
                                               value="" required/>
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text">@</span>
                                            <input type="text" className="form-control" id="username"
                                                   placeholder="Username" required/>

                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label">Email <span
                                            className="text-body-secondary">(Optional)</span></label>
                                        <input type="email" className="form-control" id="email"
                                               placeholder="you@example.com"/>
                                        <div className="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="address"
                                               placeholder="1234 Main St" required/>
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="address2" className="form-label">Address 2 <span
                                            className="text-body-secondary">(Optional)</span></label>
                                        <input type="text" className="form-control" id="address2"
                                               placeholder="Apartment or suite"/>
                                    </div>

                                    <div className="col-md-5">
                                        <label htmlFor="country" className="form-label">Country</label>
                                        <select className="form-select" id="country" required>
                                            <option value="">Choose...</option>
                                            <option>United States</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <select className="form-select" id="state" required>
                                            <option value="">Choose...</option>
                                            <option>California</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="zip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="zip" placeholder="" required/>
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4"/>
                                <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PlaceOrder;
