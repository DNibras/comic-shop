import './style.css';
import dc from './images/dc.png';
import marvel from './images/marvel.jpg';
import bubble from './images/bubble.png';
import idwPublishing from './images/idwPublishing.png';
import imageComics from './images/imageComics.png';
import mirageStudios from './images/mirageStudios.png';
import darkHorse from './images/darkHorse.png';

const SectionWelcoming = () => {

  return (
    <section className="welcoming">
      <h2>Добро пожаловать в First Page</h2>
      <p>Откройте для себя лучшие товары мира комиксов</p>
      <nav className="brands">
        <a href="#" className="link-brands"><img className="brands-img" src={dc} alt="" /></a>
        <a href="#" className="link-brands"><img className="brands-img" src={marvel} alt="" /></a>
        <a href="#" className="link-brands"><img className="brands-img" src={bubble} alt="" /></a>
        <a href="#" className="link-brands"><img className="brands-img" src={idwPublishing} alt="" /></a>
        <a href="#" className="link-brands"><img className="brands-img" src={imageComics} alt="" /></a>
        <a href="#" className="link-brands"><img className="brands-img" src={mirageStudios} alt="" /></a>
        <a href="#" className="link-brands"><img className="brands-img" src={darkHorse} alt="" /></a>
      </nav>
    </section>
  )
}

export default SectionWelcoming