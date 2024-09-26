import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useCart } from "../../storage/cart";
import "./style.css";

const ProductPage = () => {
  const { id } = useParams();
  const {
    isLoading,
    data: product,
    status
  } = useFetch<ProductModel>(`https://fakestoreapi.com/products/${id}`);
  const { addToCart } = useCart();

  if (isLoading) {
    return <div className="ProductPage_loading">Загрузка...</div>;
  }

  if (status === 404) {
    return <div className="ProductPage_loading">Товар не найден</div>;
  }

  if (!product) {
    return <div className="ProductPage_loading">Ошибка загрузки</div>;
  }

  return (
    <div className="ProductPage">
      <div className="ProductPage-container">
        <div className="ProductPage-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="ProductPage-box">
          <div className="ProductPage-container-description">
            <h2 className="ProductPage-title">{product.title}</h2>
            <p className="ProductPage-description">{product.description}</p>
            <p className="ProductPage-rate">Рейтинг: {product.rating.rate}</p>
            <p className="ProductPage-count">В наличии: {product.rating.count} шт.</p>
          </div>          
          <div className="ProductPage-price-container">
            <p className="ProductPage-price">Цена: {product.price} руб.</p>
            <Link to={`/cart`}><button className="ProductPage-button" onClick={() => addToCart(product)}>Купить</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
