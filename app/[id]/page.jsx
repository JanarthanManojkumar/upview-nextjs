'use client'
import Apifetch from '@/app/components/Apifetch';
import React, { useEffect, useState,useContext } from 'react';
import { FaTruck, FaEnvelope } from 'react-icons/fa';
import { AppContext } from '../context/Store';
import StarRating from '../components/StarRating';

export default function Preview({ params }) {
    
    const { page } = useContext(AppContext);
    const [counter, setCounter] = useState(1);
  
    const product = page?.products.find((product) => product.id === params.id);

  const colors = {
    color1:
      'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/pdp/product-carousel/black/alt/black-01-studiopro.jpg.large.2x.jpg',
    color2:
      'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/plp/plp-studiopro-deepbrown.jpg.large.2x.jpg',
    color3:
      'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/plp/plp-studiopro-navy.jpg.large.2x.jpg',
    color4:
      'https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/plp/plp-studiopro-sandstone.jpg.large.2x.jpg',
  };

  const [image, setImage] = useState(colors.color1);

  const handleOnClick = (color) => {
    setImage(color);
  };
  return (
    <div className='w-full h-screen mt-5'>
      <div className='flex items-center justify-center w-full h-full p-2 '>
        
        <div className='w-[50%] h-full flex flex-col p-1'>
          <div className='flex items-center justify-center py-2 bg-gray-200'>
            <img src={image} className='object-contain w-[500px] h-[500px]' alt='' />
          </div>
          
          <div className='flex justify-between w-full h-[150px] py-3 '>
            
            <div className='h-full p-3 bg-gray-200 '>
                <img src={colors.color1} className='object-contain w-[120px] h-full  bg-gray-200' alt="" />
                </div>

                <div className='w-[20%] bg-gray-200 p-3'>
                <img src={colors.color2} className='object-contain w-[120px] h-full  bg-gray-200' alt="" />
                </div>

                <div className='w-[20%] bg-gray-200 p-3'>
                <img src={colors.color3}  className='object-contain w-[120px] h-full  bg-gray-200' alt="" />
                </div>

                <div className='w-[20%] bg-gray-200 p-3'>
                <img src={colors.color4}  className='object-contain w-[120px] h-full  bg-gray-200' alt="" />
                </div>
        </div>
     </div>

        <div className='w-[50%] h-full px-9'>
          <div className='flex flex-col justify-between h-full pb-8 '>
            <div>
              <h1 className='text-2xl text-bold'>{product?.name}</h1>
              <p>{product?.description}</p>
              <StarRating rating={product?.rating} size='3xl'/>
              <hr className='my-4 border'></hr>
            </div>

            <div>
              <h1 className='text-2xl text-bold'>{`$${product?.price} or $99.00/month`}</h1>
              <p>Suggested payments with 6-month special financing</p>
              <hr className='my-4 border'></hr>
            </div>

            <div>
              <p className='text-2xl'>Choose a color</p>
              <div className='mt-2 flex w-[40%] justify-between p-2'>
                <button className='p-5 duration-100 bg-red-500 rounded-full hover:scale-105' onClick={() => handleOnClick(colors.color1)}></button>
                <button className='p-5 duration-100 bg-green-500 rounded-full hover:scale-105' onClick={() => handleOnClick(colors.color2)}></button>
                <button className='p-5 duration-100 bg-blue-500 rounded-full hover:scale-105' onClick={() => handleOnClick(colors.color3)}></button>
                <button className='p-5 duration-100 bg-yellow-500 rounded-full hover:scale-105' onClick={() => handleOnClick(colors.color4)}></button>
             </div>
              <hr className='my-4 border'></hr>
            </div>

            <div className='flex w-[50%] justify-between'>
              <div className='flex items-center'>
                <button
                  className='px-3 bg-gray-200 rounded-l-full'
                  onClick={() => {
                    setCounter((counter) => (counter > 0 ? counter - 1 : counter));
                  }}
                >
                  -
                </button>
                <p className='px-3 bg-gray-200'>{counter}</p>
                <button
                  className='px-3 bg-gray-200 rounded-r-full'
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                >
                  +
                </button>
              </div>

              <div>
                <p>Only 12 items left </p>
                <p>Don't miss it</p>
              </div>
            </div>

            <div>
              <div className='w-[60%] flex justify-between'>
               
                  <button className='px-8 py-2 text-white bg-green-800 rounded-full'>
                    Buy Now
                  </button>
                
                <button className='px-8 py-2 rounded-full'>Add to cart</button>
              </div>
              <hr className='my-4 border'></hr>
            </div>

            <div>
              <div className='flex mx-2 my-4'>
                <div className='flex items-start justify-start w-10 pl-2'>
                  <FaTruck size={25} />
                </div>
                <div>
                  <h1>Free Delivery</h1>
                  <p>
                    <a href=''>Enter Your postal code for delivery availability</a>
                  </p>
                </div>
              </div>
              <div className='flex mx-2 my-4'>
                <div className='flex items-start justify-start w-10 pl-2'>
                  <FaEnvelope size={25} />
                </div>
                <div>
                  <h1>Return the Delivery</h1>
                  <p>
                    <a href=''>Free 30-days delivery return Details</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
