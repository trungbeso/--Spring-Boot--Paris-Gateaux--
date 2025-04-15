import React, { useContext } from "react";
import "./PlaceOrder.css";
import { assets } from "../assets/assets.js";
import { StoreContext } from "../context/index.js";
import { calculateCartTotal } from "../util/CartUtil.js";

const PlaceOrder = () => {
  const { foodList, quantities } = useContext(StoreContext);

  const cartItems = foodList.filter(
    (food) => food.id && quantities[food.id] > 0
  );
  //calculation
  const { subTotal, shipping, tax, total } = calculateCartTotal(
    cartItems,
    quantities
  );

  function formatCurrency(amount) {
    if (typeof amount !== "number") {
      return amount;
    }
    return amount.toLocaleString("vi-VN");
  }

  return (
    <div className="container mt-3">
      <div className="py-5 text-center">
        <img
          src={assets.logo}
          alt="logo"
          className="d-block-mx-auto"
          width={120}
          height={120}
        />
      </div>
      <main>
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {cartItems.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {cartItems?.map((item) => (
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-body-secondary">
                      Số lượng: {quantities[item.id]}
                    </small>
                  </div>
                  <span className="text-body-secondary">
                    {formatCurrency(item.price * quantities[item.id])}
                  </span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <span>Shipping</span>
                </div>
                <span className="text-body-secondary">
                  {subTotal === 0 ? 0.0 : formatCurrency(shipping)}đ
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between ">
                <div>
                  <span>Tax</span>
                </div>
                <span className="text-body-secondary">
                  {formatCurrency(tax)}đ
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <strong>Total</strong>
                <strong>{formatCurrency(total)}đ</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="0374766666"
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select className="form-select" id="country" required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select className="form-select" id="state" required>
                    <option value="">Choose...</option>
                    <option>Hà Nội</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="zip"
                    placeholder="3453466"
                    required
                  />
                </div>
              </div>
              <hr className="my-4" />
              <button
                className="w-100 btn btn-primary btn-lg"
                type="submit"
                disabled={cartItems.length === 0}
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlaceOrder;
