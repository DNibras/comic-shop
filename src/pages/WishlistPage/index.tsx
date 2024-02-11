import React from 'react';

interface WishlistItem {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface WishlistProps {
  wishlist: WishlistItem[];
  onRemoveFromWishlist: (id: number) => void;
}

const WishlistPage: React.FC<WishlistProps> = ({ wishlist, onRemoveFromWishlist }) => {
  const handleBuy = (title: string) => {
    console.log(`Купить ${title}`);
  };

  return (
    <div>
      <h1>Избранные товары</h1>
      {wishlist.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>Цена: {item.price} руб</p>
          <button onClick={() => handleBuy(item.title)}>Купить</button>
          <button onClick={() => onRemoveFromWishlist(item.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
};

export default WishlistPage;
