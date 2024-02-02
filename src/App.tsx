import Header from './components/Header'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import LoginProfile from './pages/LoginProfile'
import BottomBar from './components/BottomBar'
import Catalog from './pages/Catalog'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'


function App() {


  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginProfile />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Wishlist' element={<Wishlist />} />
      </Routes>
      <BottomBar />
      <Footer />
    </div>
  )
}

export default App
