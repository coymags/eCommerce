import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import Contactus from "./components/Contactus"
import BottomNav from "./components/BottomNav"
import Notification from "./components/Notification"
import Profile from "./components/Profile"
import Cart from "./components/Cart"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Navbar/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>

        {/*Botton navigation */}
        <BottomNav/>
        
      </BrowserRouter>
    </>
  )
}

export default App
