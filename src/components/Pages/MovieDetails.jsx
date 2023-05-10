import { useEffect, useRef, useState, Suspense } from 'react';
import FetchDetails from 'Services/FetchDetails';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const sendRequest = async () => {
      const fetch = await FetchDetails(movieId);
      setMovie(fetch);
    };
    sendRequest();
  }, [movieId]);
  const { title, vote_average, overview, poster_path } = movie;

  console.log(movie.genres);
  return (
    <>
      <Link to={backLinkRef.current}>Go back</Link>
      <div className="mainBlock">
        <img
          className="moviesImg"
          src={'https://image.tmdb.org/t/p/w500' + poster_path}
          alt="poster"
        />

        <div>
          <h2>{title}</h2>
          <p>{vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
    </>
  );
};

export default MovieDetails;
