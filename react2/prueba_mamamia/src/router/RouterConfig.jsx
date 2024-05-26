import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import PizzaDetails from "../components/PizzaDetails/PizzaDetails";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

const RouterConfig = () => {
    return(
    <Routes>        
      <Route path="/"  element={<Home />} />
      <Route path="/pizza/:id"  element={<PizzaDetails />}/>
      <Route path="/carrito" element={<ShoppingCart />}/>
    </Routes>
    )
  };

export default RouterConfig