import './style.css'

const RegisterProfile = () => {

  return (
    <div className="register-profile-container">
      <form className="register-profile-form">
        <h1>Регистрация профиля</h1>
        <div className="email-container">
          <label htmlFor="email">Эл. почта*</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Почта"
            className='register-input'
          />
        </div>
        <div className="password-container">
          <label htmlFor="password">Пароль*</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
            className='register-input'
          />
          <input
            type="password"
            id="confirmPassword"
            placeholder="Подтвердите пароль"
            className='register-input'
          />
        </div>
        <div className="fullName-container">
          <label htmlFor="fullName">ФИО*</label>
          <input
            type="text" 
            id="fullName" 
            placeholder="ФИО" 
            className='register-input'
          />
        </div>
        <div className="phone-container">
          <label htmlFor="phone">Телефон*</label>
          <input 
            type="tel" 
            id="phone" 
            placeholder="Телефон" 
            className='register-input'
          />
        </div>
        <div className="birthday-container">
          <label htmlFor="birthday">Дата рождения</label>
          <input 
            type="date" 
            id="birthday" 
            className='register-input'
          />
        </div>
        <div className="agree-container">
          <input
            type="checkbox" 
            id="agree" 
            className="agree-input"
          />
          <label htmlFor="agree">Я согласен с условиями пользовательского соглашения</label>
        </div>
        <button className="register-button" type="submit">Зарегистрироваться</button>
      </form>
      <p>* - поля, обязательные к заполнению</p>
    </div>
  )
}

export default RegisterProfile
