'use client'
import React, { useContext } from 'react';
import { AppContext } from '../context/Store';
import Link from 'next/link'
import StarRating from './StarRating';

export default function Hero() {
  const { page , handleCartData } = useContext(AppContext);

  return (
    <>
      <div className="my-5">
        <div>
          <h1 className="text-2xl font-bold">Best Sellers</h1>
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center'>
          {page &&
            page.products.map((product) => (
              <div key={product.id} className='bg-gray-100 sm:w-[320px] w-[450px] p-4 text-start mx-4 hover:scale-105 duration-300'>
                <Link href={`/${product.id}`}>
                <div>
                  <div>
                    <img src={product.image} alt={product.name} className='object-contain w-32 h-40 mx-auto mb-2' />
                  </div>
                </div>
                
                <div className='flex justify-between'>
                  <h2 className='text-lg font-semibold'>{product.name}</h2>
                  <div>
                    <p className={`text-base font-semibold mb-2 ${product.price > 100 ? 'text-red-800' : 'text-black'}`}>${product.price}</p>
                  </div>
                </div>
                
                <p className='text-[13px] text-gray-600'>{product.description}</p>
                <StarRating rating={product.rating} size='2xl'/>
                </Link>
                <button onClick={()=>{handleCartData(product.id)}} className='px-4 py-2 text-gray-400 transition duration-300 ease-in-out bg-white border border-gray-300 rounded-full hover:bg-green-500 hover:text-white'>
                  Add to Cart
                </button>
                
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
