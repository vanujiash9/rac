import React from "react";
import Product from "./product"; // Đảm Bảo Component

function ProductList() {
  const productList = [
    {
      id: 1,
      name: "Sony WH-1000XM4",
      imgURL:
        "https://bizweb.dktcdn.net/100/361/676/products/sony-mdr-mv1.jpg?v=1704783627643",
      price: "2.050.000",
    },
    {
      id: 2,
      name: "HBose QuietComfort 35 II",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQSm0KLHzRcGUoP9btdW4fKfMIYJGYGoNBUA&s",
      price: "950.000",
    },
    {
      id: 3,
      name: "Sennheiser HD 800 S",
      imgURL:
        "https://a.allegroimg.com/s512/11bd5e/cbadb64b4f10b106434de2700325/Sony-MDR-MV1",
      price: "1.050.000",
    },
    {
      id: 4,
      name: "Beyerdynamic DT 990 Pro",
      imgURL:
        "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g435/swatches/g435-gaming-headset-gallery-2-1-blue.png?v=1",
      price: "680.000",
    },
    {
      id: 5,
      name: "AKG N60NC",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMr4HMdS7-i75NXMyf71UTplLz5GRlCnaDDw&s",
      price: "1.850.000",
    },
    {
      id: 6,
      name: "Jabra Elite 85h",
      imgURL:
        "https://product.hstatic.net/1000333506/product/-g733-lightspeed-wireless-white-66666_142abc4187744aa7b7fe009d7486696c_0e12e52342544a99b6f266b665a5e6a0.png",
      price: "900.000",
    },
    {
      id: 7,
      name: "Headphone",
      imgURL:
        "https://songphuong.vn/Content/uploads/2023/02/Tai-nghe-Gaming-Logitech-G335-songphuong.vn-08.jpg",
      price: "650.000",
    },
    {
      id: 8,
      name: "Headphone",
      imgURL:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/og-airpods-max-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1603996970000",
      price: "900.000",
    },
  ];

  return (
    <div>
      <h3 className="text-center border-b-2 pb-2 mb-4 font-mono text-xl">
        OUR PRODUCT
      </h3>
      <div className="mb-4">
        <h6 className="text-center font-mono text-sm text-gray-600">
          incididunt ut labore et dolore magna aliqua. UT enim ad minim veniam,
          quis nostrud exercitation
        </h6>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {productList.map((product, index) => (
          <Product key={index} item={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
