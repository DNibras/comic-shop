import Carousel from "../../components/Carousel"
import Products from "../../components/Products"
import SectionWelcoming from "../../components/SectionWelcoming"
import './style.css'

function HomePage() {


  return (
    <div>
      <SectionWelcoming />
      <Carousel />
      <Products />
    </div>
  )
}

export default HomePage
