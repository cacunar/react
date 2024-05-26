import React, { useContext } from 'react';
import { PizzaContext } from '../../context/PizzaContext';
import Header from '../Header/Header';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const { cart, addToCart, removeFromCart } = useContext(PizzaContext);

  const handleIncrease = (pizza) => {
    addToCart(pizza);
  };

  const handleDecrease = (pizza) => {
    removeFromCart(pizza);
  };

  const total = cart.reduce((sum, pizza) => sum + pizza.price, 0);

  const groupedCart = cart.reduce((acc, pizza) => {
    const found = acc.find(item => item.id === pizza.id);
    if (found) {
      found.quantity++;
    } else {
      acc.push({ ...pizza, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <>
      <Header />
      <div className="shopping-cart-container">
        <div className="shopping-cart-content">
          <h2>Detalles del pedido:</h2>
          <ul className="shopping-cart-list">
            {groupedCart.map((pizza) => (
              <li key={pizza.id} className="shopping-cart-item">
                <img src={pizza.img} alt={pizza.name} className="shopping-cart-image" />
                <span>{pizza.name}</span>
                <span className="shopping-cart-price">${(pizza.price * pizza.quantity).toLocaleString()}</span>
                <div className="shopping-cart-quantity">
                  <button onClick={() => handleDecrease(pizza)} className="btn btn-danger">-</button>
                  <span>{pizza.quantity}</span>
                  <button onClick={() => handleIncrease(pizza)} className="btn btn-info">+</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toLocaleString()}</h3>
          <button className="btn btn-success">Ir a Pagar</button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
