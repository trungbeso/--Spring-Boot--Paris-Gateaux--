import FoodDisplay from "../components/FoodDisplay";
import {useState} from "react";


const ExploreFood = () => {
    const [category, setCategory] = useState('All');
    const [searchText, setSearchText] = useState('');




    return (
        <>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group mb-3">
                                <select onChange={(e) => setCategory(e.target.value)}
                                        className="form-select mt-2"
                                        style={{'maxWidth': '150px'}}>
                                    <option value="All">Tất Cả </option>
                                    <option value="GATO">Bánh Gato</option>
                                    <option value="PREMIUM_GATO">Bánh Gato Cao Cấp</option>
                                    <option value="JP_BREAD">Bánh Mỳ Phong Cách Nhật Bản</option>
                                    <option value="FR_BREAD">Bánh Mỳ Phong Cách Pháp</option>
                                    <option value="RS_BREAD">Bánh Mỳ Phong Cách Nga</option>
                                    <option value="MOJITO">Mojito Thanh Nhiệt</option>
                                    <option value="MILK_TEA">Trà Sữa</option>
                                </select>
                                <input type="text"
                                       className='form-control mt-2'
                                       placeholder='Hôm nay ăn gì? . . .'
                                       onChange={(e) => setSearchText(e.target.value)}
                                       value={searchText}/>
                                <button className='btn - btn-primary mt-2' type='submit'>
                                    <i className='bi bi-search'></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <FoodDisplay category={category} searchText={searchText} />
        </>

    );
};

export default ExploreFood;
