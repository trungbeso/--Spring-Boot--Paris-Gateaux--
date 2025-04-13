import {useContext} from "react";
import FoodItem from "./FoodItem";
import {StoreContext} from '../context'


const FoodDisplay = ({category, searchText}) => {
    const {foodList} = useContext(StoreContext);

    const filterFoods = foodList?.filter(food => (
       ( category === 'All' || food.category === category) &&
       (food.name.trim().toLowerCase().includes(searchText.trim().toLowerCase()))
    ));

    return (
        <div className='container'>
            <div className="row">
                {filterFoods?.map((food) => (
                    <FoodItem key={food.id}
                              name ={food.name}
                              description={food.description}
                              imageUrl={food.imageUrl}
                              price={food.price}
                              id={food.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default FoodDisplay;
