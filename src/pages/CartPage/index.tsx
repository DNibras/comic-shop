import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../storage/cart";
import "./style.css";

const CartPage = () => {
  const { cart, removeFromCart, decreaseQuantity, increaseQuantity } =
    useCart();

  const calculateTotalSum = useMemo(
    () =>
      cart
        .reduce((sum, comic) => sum + comic.price * comic.quantity, 0)
        .toFixed(2),
    [cart]
  );

  return (
    <div className="cartPage">
      {cart.map((comic) => (
        <div className="cartPage-item" key={comic.id}>
          <div className="cartPage-item-container-img">
            <Link to={`/product/${comic.id}`}><img src={comic.image} alt={comic.title} /></Link>
          </div>
          <span>{comic.title}</span>
          <div className="cartPage-container">
            <div className="cartPage-container-quantity">
              <button
                className="cartPageButton"
                onClick={() => decreaseQuantity(comic.id)}
              >
                &#8722;
              </button>
              <span className="cartPage-item-quantity"> : {comic.quantity} </span>
              <button
                className="cartPageButton"
                onClick={() => increaseQuantity(comic.id)}
              >
                &#43;
              </button>
            </div>
            <span className="cartPage-price">
              {(comic.price * comic.quantity).toFixed(2)} Руб.
            </span>
            <button
              className="cartPageButton delete"
              onClick={() => removeFromCart(comic.id)}
            >
              &#10006;
            </button>
          </div>
        </div>
      ))}
      <div className="cartPage-total">
        <span>Итого: {calculateTotalSum} Руб.</span>
        <button className="cartPageButton-total">Оплатить</button>
      </div>
    </div>
  );
};

export default CartPage;
