import React from 'react';
import Product from './product';

function ProductList() {
  const productList = [
    {
      id: 1,
      name: 'Headphone',
      imgURL: 'https://bizweb.dktcdn.net/100/361/676/products/sony-mdr-mv1.jpg?v=1704783627643',
      price: '650.000'
    },
    {
      id: 2,
      name: 'Headphone',
      imgURL: 'https://bizweb.dktcdn.net/100/361/676/products/sony-mdr-mv1.jpg?v=1704783627643',
      price: '650.000'
    },
    {
      id: 3,
      name: 'Headphone',
      imgURL: 'https://bizweb.dktcdn.net/100/361/676/products/sony-mdr-mv1.jpg?v=1704783627643',
      price: '650.000'
    },
    {
      id: 4,
      name: 'Headphone',
      imgURL: 'https://bizweb.dktcdn.net/100/361/676/products/sony-mdr-mv1.jpg?v=1704783627643',
      price: '650.000'
    },
    {
      id: 5,
      name: 'Headphone',
      imgURL: 'https://bizweb.dktcdn.net/100/361/676/products/sony-mdr-mv1.jpg?v=1704783627643',
      price: '650.000'
    },
    {
      id: 6,
      name: 'Headphone',
      imgURL: 'https://bizweb.dktcdn.net/100/361/676/products/sony-mdr-mv1.jpg?v=1704783627643',
      price: '650.000'
    },
    {
      id: 7,
      name: 'Headphone',
      imgURL: 'https://bizweb.dktcdn.net/100/361/676/products/sony-mdr-mv1.jpg?v=1704783627643',
      price: '650.000'
    },
    {
      id: 8,
      name: 'Headphone',
      imgURL: 'https://bizweb.dktcdn.net/100/361/676/products/sony-mdr-mv1.jpg?v=1704783627643',
      price: '650.000'
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-semibold uppercase text-center mt-2">
        Our Products
      </h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit at autem
        quis ex voluptatem libero fugiat excepturi maxime nulla, distinctio quo
        non deleniti perspiciatis itaque, quibusdam voluptates, voluptas
        temporibus debitis.
      </p>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-4 gap-20">
          {productList.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
