import { useEffect, useState } from 'react';
import { FetchPopular } from 'Services/FetchPopular';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
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
            <Link>
              {' '}
              <li key={item.id}>{item.title}</li>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
