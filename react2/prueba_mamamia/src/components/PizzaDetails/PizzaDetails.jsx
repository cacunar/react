import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzaContext } from '../../context/PizzaContext';
import Header from '../Header/Header';
import './PizzaDetails.css';

const PizzaDetails = () => {
  const { id } = useParams();
  const { pizzas, addToCart } = useContext(PizzaContext);
  const pizza = pizzas.find(p => p.id === id);

  if (!pizza) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <div className="pizza-details-container">
        <div className="pizza-details-content">
          <img src={pizza.img} alt={pizza.name} className="pizza-details-image" />
          <div className="pizza-details-info">
            <h2>{pizza.name}</h2>
            <p>{pizza.desc}</p>
            <p><strong>Ingredientes:</strong></p>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>🍕 {ingredient}</li>
              ))}
            </ul>
            <p className="pizza-details-price"><strong>Precio:</strong> ${pizza.price.toLocaleString()}</p>
            <button onClick={() => addToCart(pizza)} className="btn btn-danger">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaDetails;
