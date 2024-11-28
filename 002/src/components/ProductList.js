import React, {  useState } from 'react'
import { useFetch } from '../hooks/useFetch';

export const ProductList = () => {
  const [url,setUrl]=useState('http://localhost:8000/product');
  const { data : product, loading ,error}=useFetch(url);


  return (
    <section>
    <div className="filter">
      <button onClick={()=>{setUrl('http://localhost:8000/product')}}>All</button>
      <button onClick={()=>{setUrl('http://localhost:8000/product?In_Stock=true')}}> In-Stock</button>
    </div>

    {loading && <p>Loading products...</p>}

    {error && <p>{error}</p>}

    {product && product.map((Product)=>(
      <div className="card" key={Product.id}>
          <p className='id'>{Product.id}</p>
          <p className='name'>{Product.name}</p>
          <p className='info'>
          <span>${Product.price}</span>
          <span className={Product.In_Stock?'instock':'unavailable'}>{Product.In_Stock?'Instock':'Unavailable'}</span>
          </p>
      </div>
    ))}
     
    </section>
  );
}
