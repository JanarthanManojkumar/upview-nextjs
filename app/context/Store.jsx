'use client';
import React, { createContext, useEffect, useState } from 'react';
import Apifetch from '../components/Apifetch';

export const AppContext = createContext();

const StoreProvider = ({ children }) => {
   
    const [page, setPage] = useState(null);
    const [cartData,setCartData]=useState([]);

    const handleCartData = (productId) => {
        const selectedProduct = page.products.find((product) => product.id === productId);
        const isProductInCart = cartData.some((product) => product.id === selectedProduct.id);
    
        if (isProductInCart) {
            const updatedCartData = cartData.map((product) =>
                product.id === selectedProduct.id ? { ...product, quantity: product.quantity + 1 } : product
            );
            setCartData(updatedCartData);
        } else {
            setCartData([...cartData, { ...selectedProduct, quantity: 1 }]);
        }
    };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const pagedata = await Apifetch();
                setPage(pagedata);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{ page , handleCartData ,cartData }}>
            <div>{children}</div>
        </AppContext.Provider>
    );
};

export default StoreProvider;
