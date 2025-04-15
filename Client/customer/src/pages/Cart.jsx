import './Cart.css'
import {useContext} from "react";
import {StoreContext} from "../context/index.js";
import {Link, useNavigate} from "react-router-dom";
import { calculateCartTotal } from "../util/CartUtil.js";

const Cart = () => {
    const navigate = useNavigate();
    const {foodList, increaseQuantity, decreaseQuantity, quantities, removeFromCart} = useContext(StoreContext);
    //cart items
    const cartItems = foodList.filter(food => food.id && quantities[food.id] > 0);
    
    //calculation
    const { subTotal, shipping, tax, total } = calculateCartTotal(
        cartItems,
        quantities
      );

    function formatCurrency(amount) {
        if (typeof amount !== 'number') {
            return amount;
        }
        return amount.toLocaleString('vi-VN');
    }

    return (
        <div className="container py-5">
            <h1 className="mb-5">Your Shopping Cart</h1>
            <div className="row">
                <div className="col-lg-8">
                    {
                        cartItems.length === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            <div className="card mb-4">
                                <div className="card-body">
                                    {cartItems?.map((item) => (
                                        <div key={item.id} className="row cart-item mb-3">
                                            <div className="col-md-3">
                                                <img src={item.imageUrl} alt="Product"
                                                     className="img-fluid rounded"
                                                     width={100}/>
                                            </div>
                                            <div className="col-md-5">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="text-muted">Category: {item.category}</p>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="input-group">
                                                    <button className="btn btn-outline-secondary btn-sm"
                                                            type="button"
                                                            onClick={() => decreaseQuantity(item.id)}>-
                                                    </button>
                                                    <input style={{"maxWidth": "100px"}}
                                                           type="text"
                                                           className="form-control  form-control-sm text-center quantity-input"
                                                           value={quantities[item.id]}
                                                           readOnly
                                                    />
                                                    <button className="btn btn-outline-secondary btn-sm"
                                                            type="button"
                                                            onClick={() => increaseQuantity(item.id)}>+
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-2 text-end">
                                                <p className="fw-bold">{formatCurrency(item.price * quantities[item.id])}đ</p>
                                                <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(item.id)}>
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </div>
                                            <hr/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    }
                    <div className="text-start mb-4">
                        <Link to={"/"} className="btn btn-outline-primary">
                            <i className="bi bi-arrow-left me-2"></i>Continue Shopping
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card cart-summary">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Order Summary</h5>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Subtotal</span>
                                <span>{formatCurrency(subTotal)}đ</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Shipping</span>
                                <span>{formatCurrency(shipping)}đ</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Tax</span>
                                <span>{formatCurrency(tax)}đ</span>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-between mb-4">
                                <strong>Total</strong>
                                <strong>{formatCurrency(total)}đ</strong>
                            </div>
                            <button className="btn btn-primary w-100"
                                    disabled={cartItems.length === 0} onClick={() => navigate('/order')}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title mb-3">Apply Promo Code</h5>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter promo code"/>
                                <button className="btn btn-outline-secondary" type="button">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
