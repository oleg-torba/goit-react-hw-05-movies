import { useEffect, useState } from 'react';
import { FetchPopular } from 'Services/FetchPopular';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    try {
      const fetch = FetchPopular();
      fetch.then(response => {
        setMovies(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      <div>
        {movies.map(item => {
          return (
            <li key={item.id}>
              <Link to={`movies/${item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Home;
