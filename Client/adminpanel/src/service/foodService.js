import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:8080/api/foods/create";

export const addFood = async (data, image) => {
  const formData = new FormData();
  formData.append("food", JSON.stringify(data));
  formData.append("file", image);

  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 200) {
      toast.success("Food added successfully");
      return response.data;
    }
  } catch (err) {
    console.error(err);
    toast.error("Failed to add food");
  }
};
