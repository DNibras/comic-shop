import { useEffect, useState  } from "react";
import { Link } from 'react-router-dom';
import './style.css';

interface Genre {
  id: number;
  name: string;
}

const Catalog = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://api.example.com/genres')
      .then(response => response.json())
      .then(data => {
        setGenres(data);
      })
      .catch(error => {
        console.error('Произошла ошибка при получении списка жанров:', error);
      });
  }, []);

  const handleGenreClick = (genreId: string) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter(id => id !== genreId)); // Удаление жанра из выбранных, если он уже выбран
    } else {
      setSelectedGenres([...selectedGenres, genreId]); // Добавление жанра в выбранные, если он еще не выбран
    }
  };

  const handleCombineGenres = () => {
    // Отправить запрос на сервер с выбранными жанрами для получения комбинированных продуктов
    fetch(`https://api.example.com/products?genres=${selectedGenres.join(',')}`)
      .then(response => response.json())
      .then(combinedProducts => {
        // Обработать полученные комбинированные продукты
        console.log(combinedProducts);
      })
      .catch(error => {
        console.error('Произошла ошибка при получении комбинированных продуктов:', error);
      });
  };

  return (
    <div>
      <h2>Навигация по жанрам комиксов:</h2>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>
            <button onClick={() => handleGenreClick(genre.id)}>{genre.name}</button>
          </li>
        ))}
      </ul>
      <button onClick={handleCombineGenres}>Комбинировать выбранные жанры</button>
    </div>
  );
}

export default Catalog