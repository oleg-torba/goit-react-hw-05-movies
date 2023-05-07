import { Link } from "react-router-dom"

const MovieList = ({movies}) => {
   return (
    <><h2>Trending today</h2>
    {movies.map((item)=>{
        console.log(item)
      return (
      <Link> <li>
      {item.title}
  </li></Link>
     )  
    })}
    
    </>
   )
} 

export default MovieList