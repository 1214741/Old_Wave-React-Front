import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from '../components/headers/Header';
import Home from '../views/home/Home';
import ShoppingCart from '../views/shopping/ShoppingCart';
import Products from '../views/products/Products';

const AppRouter = () => {
    return (

        <>
            <Header />
            <li><Link to="/products">Barra de Busqueda</Link></li>

            <div className="container-fluid">
                <Routes>
                    {/*
                    <Route path="shop" element={<ShopScreen>} />
                    <Route path="product/:Id" element={<ProductScreen/>} />
                    */}

                    <Route path="shopping-cart" element={<ShoppingCart />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />

                </Routes>
            </div>
        </>

    )
}

export default AppRouter;