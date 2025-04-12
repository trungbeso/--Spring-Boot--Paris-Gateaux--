import axios from "axios";
import { toast } from "react-toastify";
import { fetchList } from "../pages/ListFood/ListFood";

const API_URL = "http://localhost:8080/api/foods/create";

export const addFood = async (foodData, image) => {
  const formData = new FormData();
    formData.append("food", JSON.stringify(foodData));
    formData.append("file", image);

    try { 
      await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
     });

    } catch (err) {
      console.error(err);
      toast.error("Failed to add food");
    }

}

export const deleteFood = async () => {
  try {
    const response = await axios.delete(`http://localhost:8080/api/foods/${id}`);
    if (response.success) {
      await fetchList();
      toast.success("Food removed successfully");
    } else {
      toast.error("Failed to remove food");
      console.error("Failed to remove food");
    }
  } catch (err) {
    console.error(err);
    toast.error("Failed to fetch food list");
    throw err;
  }
}

export const getFoodList = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/foods");
    toast.success("Food list fetched successfully");
    return response.data;
  } catch (err) {
    console.error(err);
    toast.error("Failed to fetch food list");
    throw err;
  }
}