import { useState } from "react";

export const getCartItems = (): CartItem[] => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    return JSON.parse(storedCart);
  } else {
    return [];
  }
}

export const addToCart = (item: ProductModel) => {
  const cart = getCartItems();
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      title: item.title, 
      price: item.price, 
      image: item.image, 
      quantity: 1 
    });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const decreaseQuantity = (id: number) => {
  const cart = getCartItems();
  const existingItem = cart.find(cartItem => cartItem.id === id);
  if (!existingItem) {
    return;
  }
  if (existingItem.quantity <= 1) {
    removeFromCart(id);
    return;
  }
  existingItem.quantity -= 1;

  localStorage.setItem('cart', JSON.stringify(cart));
}

export const increaseQuantity = (id: number) => {
  const cart = getCartItems();
  const existingItem = cart.find(cartItem => cartItem.id === id);
  if (!existingItem) {
    return;
  }
  existingItem.quantity += 1;

  localStorage.setItem('cart', JSON.stringify(cart));
}

export const removeFromCart = (id: number) => {
  const cart = getCartItems();
  const newCart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(newCart));
}

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>(getCartItems());
  const withStateUpdate = <TFunc>(
    func: TFunc,
  ) => {
    return (...args: Parameters<TFunc>) => {
      func(...args);
      setCart(getCartItems());
    };
  }

  return {
    cart,
    addToCart: withStateUpdate(addToCart),
    removeFromCart: withStateUpdate(removeFromCart),
    decreaseQuantity: withStateUpdate(decreaseQuantity),
    increaseQuantity: withStateUpdate(increaseQuantity),
  };
}
