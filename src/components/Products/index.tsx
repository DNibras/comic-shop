import ProductList from "../ProductList"

const Products = () => {
  
  return (
    <section className="product-list">
      <h3>Рекомендуемые товары</h3>
      <div className="product-list-container">
        <ProductList />
      </div>
    </section>
  )
}

export default Products