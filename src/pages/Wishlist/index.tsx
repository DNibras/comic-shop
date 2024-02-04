// import React from 'react';

// interface WishlistItem {
//   title: string;
//   image: string;
//   price: number;
// }

// interface WishlistPageProps {
//   wishlist: WishlistItem[];
// }

// const Wishlist: React.FC<WishlistPageProps> = ({ wishlist }) => {
//   return (
//     <div>
//       <h1>Избранные товары</h1>
//       {wishlist.map((item, index) => (
//         <div key={index}>
//           <img src={item.image} alt={item.title} />
//           <h3>{item.title}</h3>
//           <p>Цена: {item.price} руб</p>
//           <button onClick={() => console.log(`Купить ${item.title}`)}>Купить</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Wishlist;