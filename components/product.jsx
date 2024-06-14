import React from "react";

function Product({ item }) {
  return (
    <div className="flex flex-col items-center m-6">
      <div className="flex flex-col justify-center items-center border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
        <img className="h-56 w-56 object-cover rounded-md mb-4" src={item.imgURL} alt={item.name} />
        <h2 className="font-bold text-lg text-gray-800">{item.name}</h2>
        <h3 className="text-sm text-gray-600 mt-2">
          Giá: <strong className="text-red-500">{item.price} VNĐ</strong>
        </h3>
      </div>
    </div>
  );
}

export default Product;
