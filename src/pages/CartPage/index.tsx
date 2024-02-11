import { useState } from 'react';
import './style.css';

interface Comic {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const CartPage = () => {
  const [cart, setCart] = useState<Comic[]>([]);

  const addToCart = (comic: Comic) => {
    const existingItem = cart.find(item => item.id === comic.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === comic.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...comic, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const decreaseQuantity = (id: number) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <div className="cart">
      {cart.map((comic) => (
        <div key={comic.id}>
          <span>{comic.title} - {comic.price}Руб. - Количество: {comic.quantity}</span>
          <button onClick={() => removeFromCart(comic.id)}>&#8722;</button>
          <button onClick={() => decreaseQuantity(comic.id)}>&#8722;</button>
          <button onClick={() => addToCart(comic)}>&#43;</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;