import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";

export const CarDetails = () => {

    const { id } = useParams();
    const [carDetails,isLoading]=useFetch(`/car/carDetails/${id}`)
   

    const handleAddToCart = async()=>{
      try {
        const response = await axiosInstance({
          method:"POST",
          url:"/cart/add-to-cart",
          data: {carId:id}
        })
        toast.success('product added to cart')
      } catch (error) {
        console.log(error); 
        toast.error(error?.response?.data?.message ||  'error adding product to cart') 
      }
    }


    return (
        <div className="flex ">
            <div className="w-4/12">
              <img src={carDetails?.image} alt="car-image" />
            </div>
            <div className="w-10/12">
              <h2 className="text-3xl">{carDetails?.title}</h2>
              <p>{carDetails?.description}</p>
              <button className="btn btn-success" onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
    );
};
