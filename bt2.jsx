// import { Header } from 'antd/es/layout/layout'
import React from 'react'
import Banner from './components/banner'
import ProductList from './components/productList'
import Product from './components/product'


export default function bt2() {
  return (
    <div>
      {/* <Header/> */}
      <ProductList/>
      <Banner/>
      <Product/>
    </div>
  )
}
