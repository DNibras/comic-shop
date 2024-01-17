import Carousel from "../../components/Carousel"
import Products from "../../components/ProductList"
import SectionWelcoming from "../../components/SectionWelcoming"

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
