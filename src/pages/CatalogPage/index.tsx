import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

interface Genre {
  id: number;
  name: string;
}

const CatalogPage = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json() as Promise<string[]>)
      .then(data => setGenres(data.map((name, index) => ({ id: index, name }))))
  }, []);

  return (
    <div className="CatalogPage">
      <h2>Жанры</h2>
      <ul className="genre-navigation">
        {genres.map(genre => (
          <li key={genre.id}>
            <Link to={`/catalog/${genre.name}`}>{genre.name}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default CatalogPage