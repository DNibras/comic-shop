import './style.css'
import orders from '../images/orders.png'
import basket from '../images/basket.png'
import favorites from '../images/favorites.png'
import account from '../images/account.png'

const NavBar = () => {

  return (
    <nav className="header-nav-bar">
      <ul className="nav-bar-list">
        <li>
          <a href="#">
            <img className="icon-header" src={orders} alt="" />
            <div className="link-text">Заказы</div>
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
          <a href="#">
            <img className="icon-header" src={account} alt="" />
            <div className="link-text">Войти</div>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
