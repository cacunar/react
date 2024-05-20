import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavigBar from "./components/Navbar";
import RouterConfig from "./router/RouterConfig";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavigBar />
        <RouterConfig />
      </BrowserRouter>
    </>
  );
}
