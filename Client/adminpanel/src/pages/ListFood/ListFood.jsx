import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import './ListFood.css';
import { deleteFood, getFoodList } from '../../service/foodService';
import { toast } from 'react-toastify';

const ListFood = () => {

  const [listFood, setListFood] = React.useState([]);

  const fetchList = async () => {
    try {
      const data = await getFoodList();
      setListFood(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch food list");
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  const removeFood = async (id) => {
    try {
      const success = await deleteFood(id);
      if (success) {
        toast.success("Food removed successfully");
        fetchList();
      } else {
        toast.error("Failed to remove food");
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  return (
    <div className='py-5 row justify-content-center'>
      <div className="col-11 card">
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listFood.map((item, index) => {
              return (
                <tr key={index}>
                  <td><img src={item.image} alt="image" width={48} height={48} /></td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}.00</td>
                  <td className='text-danger'>
                    <i className='bi bi-x-circle-fill'
                      onClick={() => removeFood(item.id)}></i>
                  </td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Listood