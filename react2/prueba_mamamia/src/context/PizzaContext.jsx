import React, { createContext, useState, useEffect } from 'react';

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/pizzas.json')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error fetching pizzas:', error));
  }, []);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  const removeFromCart = (pizza) => {
    const index = cart.findIndex(p => p.id === pizza.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  return (
    <PizzaContext.Provider value={{ pizzas, cart, addToCart, removeFromCart}}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider
