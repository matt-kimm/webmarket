import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CatalogPage from './pages/CatalogPage';
import Footer from './components/Footer';
import ProductPlacementForm from './pages/ProductPlacementForm';
import './css/main.css';
//<Route path="/" element={<HomePage />} />

class App extends React.Component {
    render() {
      return (
        <Router>
          <div className="App">
              <div className="content">
                <Routes>
                  <Route path="/" element={<ProductPlacementForm />} />
                  <Route path="/p" element={<CatalogPage />} />
                  <Route path='/product/:id' element={<ProductPage />} />
                </Routes>
                <Footer />
              </div>
          </div>
        </Router> 
      )

    }
}
  export default App
