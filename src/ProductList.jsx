import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1000&auto=format&fit=crop",
          description: "Calming scent, helps reduce stress and anxiety.",
          cost: "$18"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1000&auto=format&fit=crop",
          description: "Sweet fragrance, promotes better sleep.",
          cost: "$20"
        }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((categoryObj, index) => (
        <div key={index} className="category-section">
          <h2 className="category-title">{categoryObj.category}</h2>
          <div className="plant-list">
            {categoryObj.plants.map((plant, plantIndex) => (
              <div key={plantIndex} className="product-card">
                <img src={plant.image} alt={plant.name} className="product-image" />
                <h3 className="product-title">{plant.name}</h3>
                <p className="product-description">{plant.description}</p>
                <p className="product-cost">{plant.cost}</p>
                <button
                  className="add-to-cart-btn"
                  disabled={addedToCart[plant.name]}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
