import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../../context/PizzaContext';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
  const { pizzas, addToCart } = useContext(PizzaContext);

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="pizza-grid">
          {pizzas.map(pizza => (
            <div key={pizza.id} className="pizza-card">
              <img src={pizza.img} alt={pizza.name} className="pizza-img" />
              <h2>{pizza.name}</h2>
              <p><strong>Ingredientes:</strong></p>
              <ul>
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>🍕 {ingredient}</li>
                ))}
              </ul>
              <p className="price">${pizza.price.toLocaleString()}</p>
              <div className="button-group">
                <Link to={`/pizza/${pizza.id}`} className="btn btn-info">Ver Más 👀</Link>
                <button onClick={() => addToCart(pizza)} className="btn btn-danger">Añadir 🛒</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
