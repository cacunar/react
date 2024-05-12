import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { PhotosProvider } from "./context/PhotoContext";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <PhotosProvider>
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
    </div>
    </PhotosProvider>
  );
};
export default App;
