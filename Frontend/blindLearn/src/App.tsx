import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import PrivateRoutes from './Utils/PrivateRoutes'
import PublicRoutes from './Utils/PublicRoute'
import Categorias from './Pages/Categorias/Categorias'
import Tema1 from './Pages/Temas/Tema1'
import Tema2 from './Pages/Temas/Tema2'

function App() {
  return (
    <>
      <div className="App">
        <Router>
            <Routes>
              <Route element={<PrivateRoutes />} >
                  <Route element={<Home/>} path="/" />
                  <Route element={<Categorias/>} path="/categorias/" />
                  <Route element={<Tema1/>} path="/temas/1" />
                  <Route element={<Tema2/>} path="/temas/2" />
              </Route>

              <Route element={<PublicRoutes />} >
                <Route element={<Login />} path="/login" />
              </Route>
            </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
