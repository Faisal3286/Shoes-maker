import React from 'react';
import { Home } from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { NotFound } from './NotFound';
import  {Products } from './Products';
import { ShoesProvider } from './Context';
import TopAppBar from './Header';
import { Cart } from './Cart';
import { Footer } from './Footer';
import { Product } from './Product';
import { AllProducts } from './AllProducts';

function App() {

  return (
    <ShoesProvider>
      <BrowserRouter>
        <TopAppBar></TopAppBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='products' element={<Products/>}>
            <Route path='/' element={<AllProducts/>}></Route>
            <Route path=':item' element={<Product/>}></Route>
          </Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </ShoesProvider>
  );
}

export default App;