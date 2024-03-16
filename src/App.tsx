import { Route, Routes } from 'react-router-dom'
import './App.css'
import BottomBar from './components/BottomBar'
import Footer from './components/Footer'
import Header from './components/Header'
import LoginProfile from './components/LoginProfile'
import RegisterProfile from './components/RegisterProfile'
import CareerPage from './pages/CareerPage'
import CartPage from './pages/CartPage'
import CatalogPage from './pages/CatalogPage'
import DeliveryPage from './pages/DeliveryPage'
import DiscountsPage from './pages/DiscountsPage'
import HomePage from './pages/HomePage'
import InformationPage from './pages/InformationPage'
import PartnershipPage from './pages/PartnershipPage'
import PasswordRecoveryPage from './pages/PasswordRecoveryPage'
import PaymentPage from './pages/PaymentPage'
import PromotionsPage from './pages/PromotionsPage'
import StoreAddressesPage from './pages/StoreAddressesPage'
import TermsOfUsePage from './pages/TermsOfUsePage'
// import Wishlist from './pages/Wishlist'


function App() {


  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginProfile />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/registration' element={<RegisterProfile />} />
        <Route path='/password-recovery' element={<PasswordRecoveryPage />} />
        <Route path='/information' element={<InformationPage />} />
        <Route path='/career' element={<CareerPage />} />
        <Route path='/partnership' element={<PartnershipPage />} />
        <Route path='/addresses' element={<StoreAddressesPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/delivery' element={<DeliveryPage />} />
        <Route path='/promotions' element={<PromotionsPage />} />
        <Route path='/discounts' element={<DiscountsPage />} />
        <Route path='/agreement' element={<TermsOfUsePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        {/* <Route path='/Wishlist' element={<Wishlist />} /> */}
      </Routes>
      <BottomBar />
      <Footer />
    </div>
  )
}

export default App
