'use client'
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/Store';
import { HiOutlineShoppingCart } from 'react-icons/hi2';

export default function Navbar() {
  const { page, cartData } = useContext(AppContext);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className='w-full h-[50px] flex justify-between items-center'>
      <div>
        {page && (
          <img
            className='object-contain w-[150px] h-[80px]'
            src={page.logo}
            alt='Logo'
          />
        )}
      </div>

      <div className='relative cursor-pointer'>
        <div className='flex h-[40px] items-center'>
          <div className='relative flex items-center h-full my-5'>
          <HiOutlineShoppingCart size={25} onClick={toggleCart} />
          <p className='absolute top-0 left-0 text-sm bg-red-600 rounded-full'>0</p>
          </div>
          <h1>Cart</h1>
        </div>
        


        {showCart && (
          <div className='fixed right-0 w-full px-2 py-2 bg-white border shadow-md md:right-0 top-7 md:absolute md:w-80'>
            
            {cartData && cartData.map((product) => (
              <div key={product.id} className='flex items-center py-2 border-b'>
                <img src={product.image} alt={product.name} className='object-contain w-16 h-16' />
                <div className='ml-2 w-[75%]'>
                  <div className='flex justify-between gap-10'>
                    <p className='font-semibold text-[12px]'>{product.name}</p>
                    <p className='text-sm text-gray-500'>Price: ${product.price}</p>
                  </div>
                  <p className='text-xs text-gray-500'>{product.description}</p>
                </div>
              </div>
            ))}
            <div className='flex flex-col items-end justify-end p-2'>
                <h1>Total:</h1>
                <button className='px-4 py-2 mt-2 text-gray-400 transition duration-300 ease-in-out bg-white border border-gray-300 rounded-full hover:bg-green-500 hover:text-white'>Checkout</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
