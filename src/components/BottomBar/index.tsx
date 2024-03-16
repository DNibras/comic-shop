import { Link } from 'react-router-dom'
import account from '../../assets/images/account.png'
import cart from '../../assets/images/cart.png'
import catalog from '../../assets/images/catalog.png'
import home from '../../assets/images/home.png'
import wishlist from '../../assets/images/wishlist.png'
import './style.css'


const BottomBar = () => {

  return (
    <nav className="bottom-bar">
      <ul className="bottom-bar-list">
        <li>
          <Link to={"/"} className="bottom-bar-link">
            <img className="icon-bottom-bar" src={home} alt="" />
            <div className="bottom-bar-text">Главная</div>
          </Link>
        </li>
        <li>
          <Link to={"/catalog"} className="bottom-bar-link">
            <img className="icon-bottom-bar" src={catalog} alt="" />
            <div className="bottom-bar-text">Каталог</div>
          </Link>
        </li>
        <li>
          <Link to={"/cart"} className="bottom-bar-link">
            <img className="icon-bottom-bar" src={cart} alt="" />
            <div className="bottom-bar-text">Корзина</div>
          </Link>
        </li>
        <li>
          <Link to={"/wishlist"} className="bottom-bar-link">
            <img className="icon-bottom-bar" src={wishlist} alt="" />
            <div className="bottom-bar-text">Избранное</div>
          </Link>
        </li>
        <li>
          <Link to={"/login"} className="bottom-bar-link">
            <img className="icon-bottom-bar" src={account} alt="" />
            <div className="bottom-bar-text">Профиль</div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default BottomBar