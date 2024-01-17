import NavBar from "./NavBar"
import Search from "./SearchForm"
import './style.css'
import { Link } from "react-router-dom"
import logo2 from './images/logo2.png';

const Header = () => {
  return (
    <header>
      <Link to={"/"}><img src={logo2} alt="логотип" className="img-logo" /></Link>
      <Search />
      <NavBar />
    </header>
  )
}

export default Header
