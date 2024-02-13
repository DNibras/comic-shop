import { Link } from 'react-router-dom';
import mastercard from './images/mastercard.png';
import telegram from './images/telegram.png';
import visa from './images/visa.png';
import vk from './images/vk.png';
import youtube from './images/youtube.png';
import './style.css';


const FooterNavBar = () => {

  return (
    <div className="inform">
      <ul>
        <h2>Контакты</h2>
        <li>
          <p>
            Горячая линия:
            <br />
            8 800 666 13 44
          </p>
        </li>
        <li>
          <p>
            Электронная почта:
            <br />
            <a href="mailto:officre@FirstPage.ru">office@FirstPage.ru</a>
          </p>
        </li>
        <li>
          ООО «Фабрика Продукта» <br />
          г. Москва, ул. Безымянная д. 1
        </li>
      </ul>
      <ul>
        <h2>О компании</h2>
        <li><Link to={'/information'}>Информация</Link></li>
        <li><Link to={'/career'}>Карьера</Link></li>
        <li><Link to={'/partnership'}>Партнерка</Link></li>
        <li><Link to={'/addresses'}>Адреса магазинов</Link></li>
        <li><Link to={'/blog'}>Блог</Link></li>
        <li><Link to={'/contacts'}>Контакты</Link></li>
      </ul>
      <ul>
        <h2>Покупателям</h2>
        <li><Link to={'/payment'}>Оплата</Link></li>
        <li><Link to={'/delivery'}>Доставка</Link></li>
        <li><Link to={'/promotions'}>Акции</Link></li>
        <li><Link to={'/discounts'}>Скидки</Link></li>
        <li><Link to={'/agreement'}>Пользовательское соглашение</Link></li>
      </ul>
      <ul>
        <h2>Мы в социальных сетях</h2>
        <a href="https://m.vk.com/"><img className="social-network-img" src={vk} alt="" /></a>
        <a href="https://www.youtube.com/"><img className="social-network-img" src={youtube} alt="" /></a>
        <a href="https://web.telegram.org/"><img className="social-network-img" src={telegram} alt="" /></a>
      </ul>
      <ul className="payment">
        <h2>Принимаем к оплате</h2>
        <img className="payment-img" src={mastercard} alt="" />
        <img className="payment-img" src={visa} alt="" />
      </ul>
    </div>
  )
}

export default FooterNavBar
