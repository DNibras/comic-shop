import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import NavBar from "./NavBar";
import ProductSideMenu from "./ProductSideMenu";
import Search from "./Search";
import "./style.css";

const Header = () => {
  return (
    <>
      <header>
        <Link to={"/"}>
          <img src={logo} alt="логотип" className="img-logo" />
        </Link>
        <Search />
        <NavBar />
      </header>
      <ProductSideMenu />
    </>
  );
};

export default Header;
