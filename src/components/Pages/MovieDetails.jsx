import { useEffect, useState } from "react";
import FetchDetails  from "Services/FetchDetails";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import MovieList from '../MovieList/MovieList'


const MovieDetails = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState([])
  

    useEffect(()=>{
        FetchDetails(movieId).then(res=>{
setMovie(res)
        })
    }, [movieId])

  return (
    <><Link>Go back</Link><MovieList movie={movie} /></>
    
  
  )
  
}

export default MovieDetails