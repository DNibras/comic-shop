import './style.css';

const PartnershipPage = () => {

  return (
    <div className="partnership">
      <div className="information-partnership">
        <h1>Партнерка</h1>
        <p>Уважаемые клиенты! Мы рады предложить взаимовыгодное сотрудничество по партнерской программе.</p>
        <h2>Суть программы</h2>
        <p>Вы приводите нам нового клиента (который ранее не оформлял заказы на нашем сайте) и получаете до 10% от суммы его покупки. Интересно? Тогда читайте дальше, ведь стать нашим партнером очень просто!</p>
      </div>
      <div className="PartnershipPage-container">
        <h2>Как оформить партнёрку?</h2>
        <ul className='list-design-information'>
          <li>
            <h4>1. Зарегистрируйте новый аккаунт</h4>
            <p>Создайте новый аккаунт на нашем сайте. Это необходимо сделать даже в том случае, если у вас он уже есть.</p>
          </li>
          <li>
            <h4>2. Отправьте заявку</h4>
            <p>
              На почту&nbsp;
              <a className='mail' href="mailto:office@FirstPage.ru">office@FirstPage.ru</a>
              , со своими логином и кратким описанием того, где именно вы планируете размещать рекламу, кто ваша целевая аудитория и т.д.
            </p>
          </li>
          <li>
            <h4>3. Получите подтверждение</h4>
            <p>Вы получите подтверждение в течении нескольких дней. После — найдите в своем профиле реферальную ссылку.</p>
          </li>
          <li>
            <h4>4. Разместите свою реферальную ссылку</h4>
            <p>Опубликуйте ее на своем сайте (блоге, ленте, youtube-ролике, да где угодно!) и получайте вознаграждение.</p>
          </li>
        </ul>
      </div>
      <div className="PartnershipPage-container">
        <h2>Что я получу в итоге?</h2>
        <p>Ну а теперь больше информации о том, за что вы будете получать вознаграждение, как его можно потратить, сколько можно заработать и что нужно делать, чтобы заработать еще больше:</p>
        <div className='cashback-container'>
          <p>Кэшбэк за каждого нового клиента</p>
          <p>10%</p>
        </div>
        <p>Выплачивается за любого нового клиента, перешедшего по вашей реферальной ссылке.</p>
        <p>Ссылку можно делать на сам сайт или на конкретную страницу сайта (например, на конкретный товар или на новость, на что угодно), главное, что в конце ссылки должна быть добавлена конструкция с вашим ref_id.</p>
        <p>Общая сумма кэшбэка уменьшается в случае получения клиентом дополнительных скидок (по промоакциям и т.п.). В этом случае — сумма скидки вычитается из кэшбэка. Например, если клиент прочитал на вашем сайте (или на каком-то другом) о промокоде на 5%, то за такого клиента ваш кэшбэк составит разницу (10%-5% = 5%).</p>
      </div>
      <div className="PartnershipPage-container">
        <h2>Как вывести деньги?</h2>
        <ul className='list-information'>
          <li>В данный момент есть два способа:</li>
          <li>1) Вы можете тратить деньги на нашем сайте, делая заказы. Данная опция доступна после обработки 3 реферальных заказов от различных пользователей, при сумме на вашем счете более 1000 рублей.</li>
          <li>2) Вывод средств на расчетный счет. Данная опция становится доступной после обработки 5 реферальных заказов с вашей ссылкой. Сумма выводимых средств не может быть меньше 3000 рублей. Срок обработки заявок на вывод средств — в пределах 10 рабочих дней. Чтобы вывести деньги вам необходимо выставить счет от ЮрЛица, ИП или самозанятого по нашим реквизитам.</li>
        </ul>
        <button className="download-requisites">Скачать реквизиты</button>
      </div>
      <div className="PartnershipPage-container">
        <h2>Распространённые вопросы</h2>
        <ul className='list-questions'>
          <li>
            <h4>-Как получить больше клиентов?</h4>
            <p>Наиболее оптимальный способ — это не простая реклама, а добавление ссылок в статьи на конкретный товар или группу товаров. Кроме того, совместное проведение промоакций (оговариваются индивидуально в каждом случае) также могут стать отличным подспорьем для создания базы "собственных" клиентов.</p>
          </li>
          <li>
            <h4>-Сколько я буду получать в итоге?</h4>
            <p>Этот вопрос зависит только от вас. Если ваш проект напрямую связан с нашей тематикой (графические романы, комиксы), то это означает, что конверсия будет максимальной. Можно ожидать, что до 5% людей, перешедших по вашей ссылке, оформят заказ. Средняя величина заказа также сильно зависит от конкретного хобби.</p>
          </li>
        </ul>
      </div>
      <div className="PartnershipPage-container">
        <h2>Чего нельзя делать и что за это будет</h2>
        <ul className='list-warnings'>
          <li>Нельзя создавать фиктивные заказы с целью побыстрее "разлочить" вывод средств.</li>
          <li>Нельзя использовать ботов для оформления заказов, хотя бы потому, что боты обычно не платят за созданные заказы, а вы — получаете деньги только с уже оплаченных заказов!</li>
          <li>Нельзя размещать ссылки на ресурсах, противоречащих законодательству РФ, а также на ресурсах порнографического содержания.</li>
          <li>Запрещено вводить пользователя в заблуждение обещанием несуществующих бонусов, призов или другими поощрениями за оформленный заказ.</li>
        </ul>
        <p>Любые нарушения будут караться приостановкой действия партнерского аккаунта, вплоть до полного удаления такового без какого-либо возмещения.</p>
        <p>
          Если вас не напугали наши условия, срочно регистрируйтесь на сайте и отправляйте запрос на&nbsp;
          <a className='mail' href="mailto:office@FirstPage.ru">office@FirstPage.ru</a>
        </p>
      </div>
    </div>
  )
}

export default PartnershipPage
