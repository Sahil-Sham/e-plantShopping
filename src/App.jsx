import React, { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Where Greenery Meets Serenity</p>
            <button className="get-started-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
          <AboutUs />
        </div>
      ) : (
        <div className="product-list-container">
          {/* Product List Component will be rendered here */}
          <h2>Welcome to Paradise Nursery Products!</h2>
        </div>
      )}
    </div>
  );
}

export default App;
