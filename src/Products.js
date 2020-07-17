import React from 'react';
import { Outlet } from 'react-router-dom';

export const Products = ()=>{
    return(
        <div>
            <h1>All Products</h1>
            <Outlet></Outlet>
        </div>
    )
}