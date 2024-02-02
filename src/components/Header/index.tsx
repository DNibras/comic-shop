import NavBar from "./NavBar"
import Search from "./SearchForm"
import './style.css'
import { Link } from "react-router-dom"
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header>
      <Link to={"/"}><img src={logo} alt="логотип" className="img-logo" /></Link>
      <Search />
      <NavBar />
    </header>
  )
}

export default Header
