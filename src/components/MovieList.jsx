// import React, { useEffect } from 'react'
// import GlobalApi from '../Services/GlobalApi'
// import { useState } from 'react'
// // import { useEffect } from 'react'
// import MovieCard from './MovieCard'
// import { HiChevronRight ,HiChevronLeft} from 'react-icons/hi2';
// import { useRef } from 'react';

// // const screenWidth = window.innerWidth;

// function MovieList({genreId}) {


//     const elementRef = useRef();

//     const [movieList,setMovieList] = useState([])
//     useEffect(()=>{
//         getMovieByGenereId();
//     },[genreId])

//     const getMovieByGenereId=()=>{
//         GlobalApi.getMovieByGenreId(genreId).then(resp=>{
//             console.log(resp.data.results)
//             setMovieList(resp.data.results)
//        })
 
//     }

//     const sliderRight=(element)=>{
//         element.scrollLeft+=500
//     }
//     const sliderLeft=(element)=>{
//         element.scrollLeft-=500
//     }

//   return (
//     <div>
//          <HiChevronLeft  className='hidden md:block text-white text-[30px] absolute mx-9 mt-[150px] cursor-pointer '
//                           onClick={()=>sliderLeft(elementRef.current)}/>
//         <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-9 mt-[150px] cursor-pointer right-0'
//                            onClick={()=>sliderRight(elementRef.current)}/>

//     <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-3 pb-10'>
        
//           {movieList.map((item, index) => (
//                     <MovieCard key={item.id} movie={item} />
//                 ))}
//     </div> 
//     </div>
//   )
// }

// export default MovieList

import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
function MovieList({genreId,index_}) {
    const [movieList,setMovieList]=useState([])
    const elementRef=useRef(null);
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
  return (
    <div className='relative'>
         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}/>
   
    <div ref={elementRef} className='flex overflow-x-auto gap-8
     scrollbar-hide scroll-smooth pt-4 px-3 pb-4'>
        {movieList.map((item,index)=>(
           <>
          {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
           </> 
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
    </div>
  )
}

export default MovieList