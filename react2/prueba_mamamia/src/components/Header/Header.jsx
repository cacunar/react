import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PizzaContext } from '../../context/PizzaContext';
import './Header.css';

const Header = () => {
  const { cart } = useContext(PizzaContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, pizza) => sum + pizza.price, 0);

  const handleCartClick = () => {
    navigate('/carrito');
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="header-title">
          <span role="img" aria-label="pizza">🍕</span> Pizzería Mamma Mia!
        </Link>
        <div className="header-cart" onClick={handleCartClick}>
          <span role="img" aria-label="cart">🛒</span> ${total.toLocaleString()}
        </div>
      </div>
    </header>
  );
};

export default Header;
