import React from 'react';

function Product({ item }) {
  return (
    <div className="flex flex-col items-center m-6">
      <div className="flex flex-col justify-center items-center border rounded-lg p-4">
        <img className="h-56" src={item.imgURL} alt="Product" />
        <h2 className="font-black text-lg">{item.name}</h2>
        <h3 className="text-sm">Giá : <strong>{item.price} VNĐ</strong></h3>
      </div>
    </div>
  );
}

export default Product;
