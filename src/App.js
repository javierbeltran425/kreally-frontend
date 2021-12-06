import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'primereact/resources/themes/lara-light-indigo/theme.css'    //theme
import 'primereact/resources/primereact.min.css'                    //core css
import 'primeicons/primeicons.css'                                  //icons

/**
 * Views imports
 */
import LandingPage from "./pages/LandingPage";
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/products' element={<ProductsPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
