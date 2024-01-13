import PromoCarousel from "../../components/PromoCarousel"
import Products from "../../components/ProductList"
import SectionWelcoming from "../../components/SectionWelcoming"

function HomePage() {


  return (
    <div>
      <SectionWelcoming />
      <PromoCarousel />
      <Products />
    </div>
  )
}

export default HomePage
