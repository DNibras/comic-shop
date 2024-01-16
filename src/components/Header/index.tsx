import NavBar from "./NavBar"
import Search from "./SearchForm"
import './style.css'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Link to={"/"}><img src="./img/logo.png" className="img-logo" /></Link>
      <Search />
      <NavBar />
    </header>
  )
}

export default Header
