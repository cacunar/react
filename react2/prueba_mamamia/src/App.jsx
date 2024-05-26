import './App.css'
import RouterConfig from './router/RouterConfig'
import PizzaProvider from './context/PizzaContext'

function App() {

  return (
    <>
    <PizzaProvider>
      < RouterConfig />
    </PizzaProvider>
    </>
  )
}

export default App
