import React from 'react'
import GlobalApi from '../Services/GlobalApi'
import { useEffect } from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { useState } from 'react';
import { HiChevronRight ,HiChevronLeft} from 'react-icons/hi2';
import { useRef } from 'react';

const screenWidth = window.innerWidth


function Slider() {
const [movieList , setMovieList] = useState([])
const elementRef = useRef();

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }
   
  return (
    <div>
         <HiChevronLeft  className='hidden md:block text-white text-[30px] absolute mx-9 mt-[150px] cursor-pointer '
                          onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-9 mt-[150px] cursor-pointer right-0'
                           onClick={()=>sliderRight(elementRef.current)}/>


    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
        {movieList.map((item,index)=>(
            <img src={IMAGE_BASE_URL + item.backdrop_path} 
            className='min-w-full md:h-[310px]  object-left-top mr-5 rounded-md
            hover:border-[4px] border-gray-400 transition all duration-100 ease-in-out'
            ></img>
        ))}
    </div>
    </div>
  )
}

export default Slider