import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchFoodDetails} from "../service/foodService.js";

const FoodDetails = () => {
    const {id} = useParams();
    const [data, setData] = useState({
        id: "",
        imageUrl: "",
        name: "",
        description: "",
        price: 0,
        category: ""
    });


    useEffect(() => {
        // @ts-ignore
        const loadFoodDetails = async () => {
            const foodData = await fetchFoodDetails(id);
            setData(foodData)
        };
        loadFoodDetails();
    }, [id])

    const increasedPrice = data.price * 1.2;

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="card-img-top mb-5 mb-md-0"
                             src={data.imageUrl}
                             alt="..."/>
                    </div>
                    <div className="col-md-6">
                        <div className="fs-5 fw-semibold mb-1">Category:
                        <span className='badge text-bg-warning text-white'>{data.category}</span>
                        </div>
                        <h1 className="display-5 fw-bolder">{data.name}</h1>
                        <div className="fs-5 mb-2">
                            <span className="text-decoration-line-through">{increasedPrice}đ </span>
                            <span>&nbsp;- {data.price}đ</span>
                        </div>
                        <p className="lead">{data.description}</p>
                        <div className="d-flex">

                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodDetails;
