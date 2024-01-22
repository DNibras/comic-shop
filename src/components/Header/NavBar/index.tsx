import './style.css'
import catalog from '../images/catalog.png'
import basket from '../images/basket.png'
import favorites from '../images/favorites.png'
import account from '../images/account.png'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav className="header-nav-bar">
      <ul className="nav-bar-list">
        <li>
          <a href="#">
            <img className="icon-header" src={catalog} alt="" />
            <div className="link-text">Каталог</div>
          </a>
        </li>
        <li>
          <a href="#">
            <img className="icon-header" src={basket} alt="" />
            <div className="link-text">Корзина</div>
          </a>
        </li>
        <li>
          <a href="#">
            <img className="icon-header" src={favorites} alt="" />
            <div className="link-text">Избраное</div>
          </a>
        </li>
        <li>
          <Link to={`/login`}>
            <img className="icon-header" src={account} alt="" />
            <div className="link-text">Войти</div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
