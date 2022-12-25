import './ProductList.css';
import { productsArray } from '../component/function/productsStore';
import ProductCard from '../component/ProductCard/ProductCard'
import Category from '../component/category/category';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/footer/footer';
import { React } from 'react';

// import KratomSoda from '../component/image/SoftDrinkTom.png'; 


function ProductList() {
  return (
    <>
      <Navbar/>
      <div className='contenerProductList'>
        <Category/>
        <div className='boxProductList'>
          
          {productsArray.map((product, idx) => (
            <div className='PDProductList' key={idx}>
                <ProductCard product={product}/>
            </div>
          ))}

        </div>
      </div>
      <Footer/>
    </>
    
)
}

export default ProductList;
