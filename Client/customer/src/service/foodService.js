import axios from "axios";
import {toast} from "react-toastify";

const API_URL = "http://localhost:8080/api/foods";

export const fetchFoodList = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        toast.error("Failed to get food list!");
        console.log("error", error);
    }
}