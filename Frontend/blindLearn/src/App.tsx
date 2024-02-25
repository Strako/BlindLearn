import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import PrivateRoutes from './Utils/PrivateRoutes'
import PublicRoutes from './Utils/PublicRoute'

function App() {
  return (
    <>
      <div className="App">
        <Router>
            <Routes>
              <Route element={<PrivateRoutes />} >
                  <Route element={<Home/>} path="/" />
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
