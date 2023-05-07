import { FetchVideo } from "Services/FetchVideos"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import MovieList from "components/MovieList/MovieList";
import { Link } from "react-router-dom";



const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputValue, setInputValue] = useState('');
    const searchQuery = searchParams.get('query');
console.log(movies)
    useEffect(()=>{
        setInputValue(searchQuery)
        FetchVideo(searchQuery).then(res=>{
         setMovies(res.results)
           
        })
    },[searchQuery])
     const handleChange = e => {
       setSearchParams({query: e.target.value})
      };
    const formSubmit = e =>{
        e.preventDefault()

  
      
      
    }

   
    return (
        <><form onSubmit={formSubmit}>
            <input type="text" onChange={handleChange} value={searchQuery}/>
        </form><div>
                {movies.map((item) => {
                    return (
                        <Link> <li key={item.id}>
                            {item.title}
                        </li></Link>
                    );
                })}
            </div></>   
    )       
      
                
         
}
export default Movies