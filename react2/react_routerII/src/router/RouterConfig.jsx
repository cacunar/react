import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Pokemones from "../pages/Pokemones/Pokemones";
import NoPage from "../pages/NoPage/NoPage";
import PokemonDetails from "../pages/PokemonesDetails/PokemonesDetails";

const RouterConfig = () => {
    return(
    <Routes>        
      <Route path="/"  element={<Home />} />
      <Route path="/pokemones"  element={<Pokemones />}/>
      <Route path="/pokemones/:name" element={<PokemonDetails />}/>
      <Route path="/notfound" element={<NoPage />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
    )
  };

export default RouterConfig