// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

// function MovieDetails() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Navigate to home if no state or movie is found
//     if (!location.state || !location.state.movie) {
//       navigate('/');
//     }
//   }, [location, navigate]);

//   // If state or movie is not available, render null or a loading message
//   if (!location.state || !location.state.movie) {
//     return null; // or return <div>Loading...</div>
//   }

//   const { movie } = location.state;
//   console.log(movie);

//   return (
//     <div className='flex '>
//       {/* <img src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} /> */}
//       <img src={IMAGE_BASE_URL + movie.backdrop_path} alt={movie.title}  className='p-10 w-[1000px] rounded-lg'/>
//       <div>
//       <h2 className=' text-white text-[60px] 
//                 font-bold'>{movie.title}</h2>
//       <p className='text-white text-[18px] 
//                 '>{movie.overview}</p>
      
//       <h4 className=' text-white text-[20px] 
//                 font-bold'>Release Date: {movie.release_date
// }</h4>
//       </div>
    
//     </div>
//   );
// }

// export default MovieDetails;

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    if (!location.state || !location.state.movie) {
      navigate('/');
    }
  }, [location, navigate]);

  const { movie } = location.state || {};

  useEffect(() => {
    if (movie && movie.id) {
      const fetchVideoDetails = async () => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=1b12022e477443eaac881bb465bd473c`);
          const videoData = response.data.results.find(video => video.site === 'YouTube' && video.type === 'Clip');
          console.log(movie);
          if (videoData) {
            setVideoKey(videoData.key);
          }
        } catch (error) {
          console.error('Error fetching video details:', error);
        }
      };

      fetchVideoDetails();
    }
  }, [movie]);

  if (!movie) {
    return null; // or return <div>Loading...</div>
  }

  return (
    <div className='p-10'>
      <div className='mx-5 my-3 md:mx-20 md:my-10'>
        <img src={IMAGE_BASE_URL + movie.backdrop_path} alt={movie.title} className=' w-[100%]  rounded-2xl '  />
       
          <h2 className='text-white text-[20px]  md:text-[60px] font-bold mx-5 my-2 md:mx-10 md:my-5'>{movie.title}</h2>
          <h2 className='text-white text-[10px] md:text-[25px] mx-5 my-2 md:mx-10 md:my-5 font-bold' >Overview:</h2>
          <p className='text-white text-[9px] md:text-[18px] mx-5 my-2 md:mx-10 md:my-5 ' > {movie.overview}</p>
          <h4 className='text-white text-[10px] md:text-[25px] font-bold mx-5 my-2 md:mx-10 md:my-5 '>Release Date: {movie.release_date}</h4>
          {/* <p className='text-white text-[25px]  mx-10 my-5'> {movie.release_date}</p> */}
        
      </div>
      <div className='mt-5 mb-5 md:mt-10 md:mb-5' >
        {videoKey && (
          <div className='mx-5 my-3 md:my-10 md:mx-20 h-[215] md:h-[615]'>
            <iframe
              width="100%"
              // height="315"
              //width 200
              height="615"
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
