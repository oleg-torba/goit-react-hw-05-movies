import { useEffect, useState } from "react";
import { FetchDetails } from "Services/FetchDetails";
import { useParams } from "react-router-dom"


const MovieDetails = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState([])
  

    useEffect(()=>{
        const fetch = FetchDetails(movieId)
        fetch.then(setMovie)
    }, [movieId])
   console.log(movieId)
  return (
    <p>Details</p>
  )
  
}

export default MovieDetails