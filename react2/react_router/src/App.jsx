import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navigation from './components/Navigation/Navigation'
import Contactpage from './views/Contactpage/Contactpage'
import Homepage from './views/Homepage/Homepage'
import Notfound from './views/Notfound'

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route 
          path="/home"
          element={<Homepage />}
        />
        <Route 
          path="/contacto"
          element={<Contactpage />}
        />
        <Route 
          path="*"
          element={<Notfound />}
        />
      </Routes>
    </div>
  )
}

export default App
