import './style.css'
import vk from './images/vk.png';
import youtube from './images/youtube.png';
import telegram from './images/telegram.png';
import mastercard from './images/mastercard.png';
import visa from './images/visa.png';


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
            <a href="">office@FirstPage.ru</a>
          </p>
        </li>
        <li>
          ООО «Фабрика Продукта» <br />
          г. Москва, ул. Безымянная д. 1
        </li>
      </ul>
      <ul>
        <h2>О компании</h2>
        <li><a href="">Информация</a></li>
        <li><a href="">Карьера</a></li>
        <li><a href="">Партнерка</a></li>
        <li><a href="">Адреса магазинов</a></li>
        <li><a href="">Блог</a></li>
        <li><a href="">Контакты</a></li>
      </ul>
      <ul>
        <h2>Покупателям</h2>
        <li><a href="">Оплата</a></li>
        <li><a href="">Доставка</a></li>
        <li><a href="">Акции</a></li>
        <li><a href="">Скидки</a></li>
        <li><a href="">Пользовательское соглашение</a></li>
      </ul>
      <ul>
        <h2>Мы в социальных сетях</h2>
        <a href=""><img className="social-network-img" src={vk} alt="" /></a>
        <a href=""><img className="social-network-img" src={youtube} alt="" /></a>
        <a href=""><img className="social-network-img" src={telegram} alt="" /></a>
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
