import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MovieDetails from './components/MovieDetails.jsx'

const router = createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/movieDetails",element:<MovieDetails/>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Slider from './components/Slider';
// import ProductionHouse from './components/ProductionHouse';
// import GenreMovieList from './components/GenreMovieList';
// import MovieDetails from './components/MovieDetails'; // Import MovieDetails component

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<GenreMovieList />} />
//         <Route path="/movieDetails" element={<MovieDetails />} />
//         {/* Add other routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
