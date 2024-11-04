import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { CarCard } from "../../components/user/Cards";
import { useFetch } from "../../hooks/useFetch";
import { CarPageSkelton } from "../../components/owner/Skelton";
export const Car = () => {
    // const [cars, loading,error] = useFetch("/car/all-cars");
// const [cars,setCars] =useFetch([]);
// const fetchCars =async () => {
//     try{
//         const response = await axiosInstance({
//             method:"GET",
//             url:"/car/all-cars",
//         });
//         setCars(response?.data?.data);
//         console.log("response==",response);

//     }
//     catch(error){
//         console.log(error);
//     }
// };
// useEffect(()=>{
//     fetchCars();
// },[]);
//     {
//         return (
//         // loading ? (
//         //     <CarPageSkelton />
//         // ) : (
//             <div>
//                 <div className="grid gap-y-20 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
//                     {cars?.map((value) => (
//                         <CarCard car={value} key={value._id} />
//                     ))}
//                 </div>
//             </div>
//         );


        const [cars, loading,error] = useFetch("/car/all-cars");

    {
        return loading ? (
            <CarPageSkelton />
        ) : (
            <div>
                <div className="grid gap-y-20 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
                    {cars.map((value) => (
                        <CarCard car={value} key={value._id} />
                    ))}
                </div>
            </div>
        );
    }
    
};
