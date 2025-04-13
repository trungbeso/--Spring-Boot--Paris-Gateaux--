import React from "react";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import { addFood } from "../../service/foodService";

const AddFood = () => {
  const [image, setImage] = React.useState(false);
  const [data, setData] = React.useState({
    name: "",
    description: "",
    category: "Bánh Gato Hộp Đặc Biệt",
    price: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.prevenDefault();
    if (!image) {
      toast.error("Please select an image");
      return;
    }
    const formData = new FormData();
    formData.append("food", JSON.stringify(data));
    formData.append("file", image);

    try {
      await addFood(formData, image);
      toast.success("Food added successfully");
      setData({
        name: "",
        description: "",
        category: "Bánh Gato Hộp Đặc Biệt",
        price: "",
      });
      setImage(null);
    } catch (err) {
      console.error(err);
      toast.error("Failed to add food");
    }
  }

  return (
    <div className="mx-2 mt-2">
      <div className="row">
        <div className="card col-md-4">
          <div className="card-body">
            <h2 className="mb-4">Add Food</h2>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img
                    src={image ? URL.createObjectURL(image) : assets.upload}
                    alt="image"
                    width={98}
                  />
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter food name"
                  id="name"
                  required
                  name="name"
                  onChange={onChangeHandler}
                  value={data.name}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  placeholder="Enter food description"
                  id="message"
                  rows="5"
                  required
                  name="description"
                  onChange={onChangeHandler}
                  value={data.description}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  className="form-select"
                  id="category"
                  required
                  name="category"
                  onChange={onChangeHandler}
                  value={data.category}
                >
                  <option value="gateaux">Bánh Gato Hộp Đặc Biệt</option>
                  <option value="bread">Bánh Mỳ</option>
                  <option value="drink">Đồ Uống</option>
                  <option value="milkTea">Trà Sữa</option>
                  <option value="milkShake">Sữa lắc</option>
                  <option value="euBread">Bánh Mỳ Kiểu Âu</option>
                  <option value="jpBread">Bánh Mỳ Kiểu Nhật</option>
                  <option value="dkBread">Bánh Mỳ Kiểu Đan Mạch</option>
                  <option value="whiteBread">Bánh Gối</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  required
                  name="price"
                  onChange={onChangeHandler}
                  placeholder="Enter food price"
                  value={data.price}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
