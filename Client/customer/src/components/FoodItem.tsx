

const FoodItem = ({name, description, key, imageUrl, price}) => {
    return (
        <div key={key}
             className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mt-4'>
            <div className="card" style={{'maxWidth': '320px'}}>
                <img
                    src={imageUrl}
                    className="card-img-top " alt="Product Image" width={300} height={300}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="h5 mb-0">{price}đ</span>
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
                    <button className="btn btn-primary btn-sm">View Detail</button>
                    <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
