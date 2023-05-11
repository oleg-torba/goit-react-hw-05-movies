import FetchVideo from 'Services/FetchVideos';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    FetchVideo(searchQuery).then(res => {
      setMovies(res.results);
    });
  }, [searchQuery]);
  const handleChange = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: e.target.value });
  };

  return (
    <>
      <input type="text" onChange={handleChange} value={searchQuery} />
      <div>
        {movies.map(item => {
          return (
            <li key={item.id}>
              <Link to={`${item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </div>
    </>
  );
};
export default Movies;
