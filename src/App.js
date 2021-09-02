import React from "react";
import './App.css';
import Layout from './components/hoc/layout/Layout'
import {Route} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";

function App() {
  
  return (
    <Layout>
      <Route path='/' component={Home} exact/>
      <Route path='/cart' component={Cart} exact/>
    </Layout>
  );
}

export default App;
