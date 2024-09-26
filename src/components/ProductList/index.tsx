import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../storage/cart";
import "./style.css";

const ProductList = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const { addToCart } = useCart();

  const onAddToCart = (product: ProductModel) => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!event.defaultPrevented) {
        event.preventDefault();
        addToCart(product);
      }
    };
  };

  // const onAddToWishList = (product: ProductModel) => {
  //   return (event: React.MouseEvent<HTMLButtonElement>) => {
  //     if (!event.defaultPrevented) {
  //       event.preventDefault();
  //       onAddToWishList(product);
  //     }
  //   };
  // };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json() as Promise<ProductModel[]>)
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="ProductList">
      {products.map((product) => (
        <div className="ProductList-item" key={product.id}>
          <Link to={`/product/${product.id}`} className="add-wishlist-link">
            <div className="ProductList-container">
              <div className="add-wishlist">&#x2764;</div>
              <div className="ProductList-img-box">
                <img src={product.image} alt="Товар" />
              </div>
              <h4>{product.title}</h4>
              <p>{product.price}р.</p>
              <button className="add-cart" onClick={onAddToCart(product)}>
                Добавить в корзину
              </button>
            </div>
          </Link>  
        </div>
      ))}+
    </div>
  );
};

export default ProductList;
