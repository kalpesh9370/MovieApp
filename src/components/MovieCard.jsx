

import React from 'react'
import { useNavigate } from 'react-router-dom';



const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import MovieDetails from './MovieDetails';


function MovieCard({movie}) {

  const navigate = useNavigate();

  const handleClick=()=>{
    navigate('/movieDetails', { state: { movie } });  }
 

  // console.log(movie);

  return (
     <img src={IMAGE_BASE_URL + movie.poster_path} 
        className='w-[110px] md:w-[200px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in'
        onClick={handleClick}  
        />
  )
}

export default MovieCard