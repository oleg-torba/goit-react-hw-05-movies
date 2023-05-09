import {  Route, Routes } from "react-router-dom";
import Movies from "./Pages/Movies";
import Home from "./Pages/Home";

import { Layout } from "./Layout/Layout";

import MovieDetails from "./Pages/MovieDetails";

export const App = ()=> {
 
  return (
   
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="movies" element={<Movies/>}/>
    <Route path="movies/:movieId" element={<MovieDetails />}/>
    </Route>
    </Routes>
  
  )
}
