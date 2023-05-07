import { useEffect, useState } from "react"
import { FetchPopular } from "Services/FetchPopular"

import { Link } from "react-router-dom"


const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        try {
          const fetch = FetchPopular()
          fetch.then(response =>{
            response.map(movie=>(
                setMovies(prevMovie => prevMovie.concat(movie))
            ))
          })
        
           

        } catch (error) {
          console.log(error)  
        }
    }, [])
    console.log(movies)
    return (
        <div>
         {movies.map((item)=>{
        console.log(item)
      return (
      <Link> <li>
      {item.title}
  </li></Link>
     )  
    })}
        </div>
    )
}

export default Home