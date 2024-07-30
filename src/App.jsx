
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMovieList'
// import MovieDetails from './MovieDetails';

function App() {

  return (
    <div className=''>
     <Header/>
     <Slider/>
     <ProductionHouse/>
     <GenreMovieList/>
    </div>
  )
}

export default App

