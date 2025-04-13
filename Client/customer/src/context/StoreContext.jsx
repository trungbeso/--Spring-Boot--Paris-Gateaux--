import {createContext, useEffect} from "react";
import {useState}  from "react";
import {fetchFoodList} from '../service/foodService'


export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [foodList, setFoodList] = useState([]);
    const [quantities, setQuantities] = useState({});

    const increaseQuantity = (foodId) => {
        setQuantities((prev) => ({...prev, [foodId] : (prev[foodId] || 0) + 1}));

    }

    const decreaseQuantity = (foodId) => {
        setQuantities((prev) => ({...prev, [foodId] : (prev[foodId] > 0) ? prev[foodId] - 1 : 0}));
    }

    const contextValue = {
        foodList,
        quantities,
        increaseQuantity,
        decreaseQuantity
    };

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchFoodList();
                setFoodList(data);
            } catch (error) {
                console.log("error when fetch data",error);
            }
        }
        loadData();
    }, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}