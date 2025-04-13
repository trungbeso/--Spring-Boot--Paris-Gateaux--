import {Link} from "react-router-dom";
import {useContext} from "react";
import {StoreContext} from '../context/index'


const FoodItem = ({name, description, imageUrl, price, id}) => {
    const {quantities, increaseQuantity, decreaseQuantity} =useContext(StoreContext);

    const increasedPrice = price * 1.2;
    return (
        <div key={id}
             className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mt-4'>
            <div className="card" style={{'maxWidth': '320px'}}>
                <Link to={`/food/${id}`}>
                    <img
                        src={imageUrl}
                        className="card-img-top " alt="Product Image" width={300} height={300}/>
                </Link>
                <div className="card-body">
                    <Link to={`/food/${id}`}>
                        <h5 className="card-title">{name}</h5>
                    </Link>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-between  align-items-center">
                        <span className="text-decoration-line-through">{increasedPrice}đ </span>
                        <span>&nbsp;- {price}đ</span>
                        <div>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-fill text-warning"></i>
                            <i className="bi bi-star-half text-warning"></i>
                            <small className="text-muted">(4.5)</small>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light">
                    <Link to={`/food/${id}`} className="btn btn-primary btn-sm">View Detail</Link>
                    {quantities[id] > 0 ? (
                        <div className="d-flex align-items-center gap-2">
                            <button className='btn btn-danger btn-sm' onClick={() => decreaseQuantity(id)}>
                                <i className='bi bi-dash-circle'></i>
                            </button>
                            <span className='fw-bold'>{quantities[id]}</span>
                            <button className='btn btn-success btn-sm' onClick={() => increaseQuantity(id)}>
                                <i className="bi bi-plus-circle"></i>
                            </button>
                        </div>
                    ) : (
                        <button className="btn btn-primary btn-sm" onClick={() => increaseQuantity(id)}>
                            <i className="bi bi-plus-circle"></i>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
