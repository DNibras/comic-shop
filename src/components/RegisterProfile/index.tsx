import './style.css'

const RegisterProfile = () => {

  return (
    <form className="register-profile-container">
      <h1>Регистрация профиля</h1>
      <div className="email-container">
        <label htmlFor="email">Эл. почта*</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Почта"
        />
      </div>
      <div className="password-container">
        <label htmlFor="password">Пароль*</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Пароль"
        />
        <input 
          type="password" 
          id="confirmPassword" 
          placeholder="Подтвердите пароль"
          className="confirm-password-input"
        />
      </div>
      <div className="fullName-container">
        <label htmlFor="fullName">ФИО*</label>
        <input type="text" id="fullName" placeholder="ФИО" />
      </div>
      <div className="phone-container">
        <label htmlFor="phone">Телефон*</label>
        <input type="tel" id="phone" placeholder="Телефон" />
      </div>
      <div className="birthday-container">
        <label htmlFor="birthday">Дата рождения</label>
        <input type="date" id="birthday" />
      </div>
      <button className="register-button" type="submit">Зарегистрироваться</button>
    </form>
  )
}

export default RegisterProfile
