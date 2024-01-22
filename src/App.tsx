import Header from './components/Header'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import LoginProfile from './components/LoginProfile'


function App() {


  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginProfile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
