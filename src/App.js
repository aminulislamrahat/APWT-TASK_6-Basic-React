import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Login from './components/Login';
import Signup from './components/Signup';
import PageNotFound from './components/PageNotFound';




//import {Button} from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Header /> 
        
          <Routes>
            <Route path="/products" element={<ProductsList />} /> 
           
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<UpdateProduct />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="*" element={<PageNotFound />}/>
            <Route path="/" />

          </Routes>
       
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
