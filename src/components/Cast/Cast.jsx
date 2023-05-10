import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FetchCredits from 'Services/FetchCredits';

function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    FetchCredits(movieId).then(res => {
      setActors(res.cast);
    });
  }, [movieId]);
  console.log(actors);
  return (
    <div>
      {actors.map(actor => {
        return (
          <ul>
            <li key={actor.id}>
              <h3>{actor.name}</h3>
              <img
                className="moviesImg"
                src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
                alt="actor"
              />
              <p>Character: {actor.character}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Cast;
