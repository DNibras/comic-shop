import './style.css'
import catalog from '../../../assets/images/catalog.png'
import cart from '../../../assets/images/cart.png'
import wishlist from '../../../assets/images/wishlist.png'
import account from '../../../assets/images/account.png'
import { Link } from 'react-router-dom'


const NavBar = () => {

  return (
    <nav className="header-nav-bar">
      <ul className="nav-bar-list">
        <li>
          <Link to={"/catalog"} className="header-nav-bar-link">
            <img className="icon-header" src={catalog} alt="" />
            <div className="link-text">Каталог</div>
          </Link>
        </li>
        <li>
          <Link to={"/cart"} className="header-nav-bar-link">
            <img className="icon-header" src={cart} alt="" />
            <div className="link-text">Корзина</div>
          </Link>
        </li>
        <li>
          <Link to={"/wishlist"} className="header-nav-bar-link">
            <img className="icon-header" src={wishlist} alt="" />
            <div className="link-text">Избраное</div>
          </Link>
        </li>
        <li>
          <Link to={"/login"} className="header-nav-bar-link">
            <img className="icon-header" src={account} alt="" />
            <div className="link-text">Профиль</div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
