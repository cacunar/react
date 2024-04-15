import { useState } from "react";
import MiApi from "./components/MiApi/MiApi";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Buscador de Superhéroes</h1>
        <p>Encuentra información sobre tus superhéroes favoritos.</p>
      </header>
      <main className="main-content">
        <MiApi/>
      </main>
      <footer className="footer">
        <p>© 2024 Buscador de Superhéroes. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
