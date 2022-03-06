import React from 'react';
import { useSelector } from 'react-redux';  
import Product from "./Product";

function Menu() {

  const productData=useSelector(state=>state.counter.products)

  return(
    <div className='container'>
      <h1 className='text-center text-success'>Menu</h1>
    <div className='row my-3' > 
       {
        productData.map((ele,i)=>(
        <Product key={i} data={ele}/>
           ))
      }
    </div>

  </div>

  )
}

export default Menu;