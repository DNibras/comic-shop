import './style.css';

const LoginProfile = () => {


  return (
    <section className="login-profile">
      <form method="GET" action="" name="">
        <section className="entrance">
            <h1>Войдите в аккаунт</h1>
            <input
              className="main-input"
              type="text"
              name=""
              placeholder="Почта или номер или номер телефона"
            />
            <input
              className="main-input"
              type="text"
              name=""
              placeholder="Пароль"
            />
            <button className="login">Войти</button>
            <a href="">Забыли пароль?</a>
        </section>
      </form>
    </section>
  )
}

export default LoginProfile
