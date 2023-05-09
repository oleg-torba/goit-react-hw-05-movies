import { Link } from "react-router-dom"

const MovieList = ({movie}) => {
   const {title, vote_average, overview, genres, poster_path} = movie
   return (
      <><div>
         <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt=""/>
      </div>
      <div>
         
         <h2>{title}</h2>
         <p>{vote_average}</p>
         <h2>Overview</h2>
         <p>{overview}</p>
        </div>

        </>
        
   )
} 

export default MovieList