import {createContext, useEffect} from "react";
import {useState}  from "react";
import {fetchFoodList} from '../service/foodService'


export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [foodList, setFoodList] = useState([]);

    const contextValue = {
        foodList
    };

    useEffect(() => {
        // @ts-ignore
        async function loadData() {
            const data = await fetchFoodList();
            setFoodList(data);
        }
        loadData();
    }, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}