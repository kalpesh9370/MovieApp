// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../App.css'

// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";


// function MovieDetails() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [videoKey, setVideoKey] = useState(null);

//   useEffect(() => {
//     if (!location.state || !location.state.movie) {
//       navigate('/');
//     }
//   }, [location, navigate]);

//   const { movie } = location.state || {};

//   useEffect(() => {
//     if (movie && movie.id) {
//       const fetchVideoDetails = async () => {
//         try {
//           const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=1b12022e477443eaac881bb465bd473c`);
//           const response1 = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/recommendations?api_key=1b12022e477443eaac881bb465bd473c`);
          
//           console.log("recommendations")
//            console.log(response1);
//           const videoData = response.data.results.find(video => video.site === 'YouTube' && video.type === 'Clip');
//           console.log(movie);
//           if (videoData) {
//             setVideoKey(videoData.key);
//           }
//         } catch (error) {
//           console.error('Error fetching video details:', error);
//         }
//       };

//       fetchVideoDetails();
//     }
//   }, [movie]);

//   if (!movie) {
//     return null; // or return <div>Loading...</div>
//   }

//   return (
//     <div className='p-4 md:p-10'>
//       <div className='mx-2 my-2 md:mx-10 md:my-10'>
//         <img src={IMAGE_BASE_URL + movie.backdrop_path} alt={movie.title} className='w-full rounded-2xl' />
       
//         <h2 className='text-white text-xl md:text-5xl font-bold mx-2 my-2 md:mx-10 md:my-5'>{movie.title}</h2>
//         <h3 className='text-white text-lg md:text-2xl font-bold mx-2 my-2 md:mx-10 md:my-5'>Overview:</h3>
//         <p className='text-white text-base md:text-lg mx-2 my-2 md:mx-10 md:my-5'>{movie.overview}</p>
//         <h4 className='text-white text-lg md:text-2xl font-bold mx-2 my-2 md:mx-10 md:my-5'>Release Date: {movie.release_date}</h4>
//       </div>
//       <div className='mt-5 mb-5 md:mt-10 md:mb-5'>
//         {videoKey && (
//           <div className='mx-2 my-3 md:my-10 md:mx-15 
//               '>
//          <iframe
//               width="100%"
//               src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className='iframe-mobile-height md:iframe-desktop-height'
//               style={{ height: window.innerWidth >= 768 ? '750px' : '350px'}}
//             ></iframe>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MovieDetails;


import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import MovieCard from './MovieCard';
import Header from './Header';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [videoKey, setVideoKey] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    if (!location.state || !location.state.movie) {
      navigate('/');
    }
  }, [location, navigate]);

  const { movie } = location.state || {};
  console.log(movie)

  useEffect(() => {
    if (movie && movie.id) {
      const fetchMovieDetails = async () => {
        try {
          const [videoResponse, recommendationsResponse] = await Promise.all([
            axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=1b12022e477443eaac881bb465bd473c`),
            axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/recommendations?api_key=1b12022e477443eaac881bb465bd473c`),
            // axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/reviews?api_key=1b12022e477443eaac881bb465bd473c`)
          ]);


          const videoData = videoResponse.data.results.find(video => video.site === 'YouTube' && video.type === 'Clip');
          if (videoData) {
            setVideoKey(videoData.key);
          }

          setRecommendedMovies(recommendationsResponse.data.results);
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      };

      fetchMovieDetails();
    }
  }, [movie]);

  if (!movie) {
    return null; // or return <div>Loading...</div>
  }

  const handleMovieClick = (selectedMovie) => {
    navigate('/moviedetails', { state: { movie: selectedMovie } });
  };

  return (
    <div>
      <Header/>
      <div className='p-4 md:p-10'>
      
      <div className='mx-2 my-2 md:mx-10 md:my-10'>
      <h2 className='text-white text-xl md:text-5xl font-bold mx-2 my-2 md:mx-10 md:my-5'>{movie.title}</h2>

        <img src={IMAGE_BASE_URL + movie.backdrop_path} alt={movie.title} className='w-full rounded-2xl' />
       
        <h3 className='text-white text-lg md:text-2xl font-bold mx-2 my-2 md:mx-10 md:my-5'>Overview:</h3>
        <p className='text-white text-base md:text-lg mx-2 my-2 md:mx-10 md:my-5'>{movie.overview}</p>
        <h4 className='text-white text-lg md:text-2xl font-bold mx-2 my-2 md:mx-10 md:my-5'>Release Date: {movie.release_date}</h4>
      </div>
      <div className='mt-5 mb-5 md:mt-10 md:mb-5'>
        {videoKey && (
          <div className='mx-2 my-3 md:my-10 md:mx-15'>
            <iframe
              width="100%"
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ height: window.innerWidth >= 768 ? '750px' : '350px' }}
            ></iframe>
          </div>
        )}
      </div>

      <div className='p-4 md:p-10'>
        <h2 className='text-white text-xl md:text-3xl font-bold mx-2 my-2 md:mx-10 md:my-5'>Similar Movies</h2>

        <div className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-4 px-3 pb-4'>
          {recommendedMovies.map((item, index) => (
            <MovieCard 
              key={item.id} 
              movie={item} 
              onClick={() => handleMovieClick(item)} 
            />
          ))}
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default MovieDetails;
