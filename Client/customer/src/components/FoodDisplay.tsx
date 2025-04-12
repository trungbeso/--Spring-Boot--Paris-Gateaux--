import {useContext} from "react";
import {StoreContext} from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = () => {
    const {foodList} = useContext(StoreContext);

    return (
        <div className='container'>
            <div className="row">
                {foodList?.map((food) => (
                    <FoodItem key={food.id}
                              name ={food.name}
                              description={food.description}
                              imageUrl={food.imageUrl}
                              price={food.price} />
                ))}
            </div>
        </div>
    );
};

export default FoodDisplay;
