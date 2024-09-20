
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMovieList'
import { Navigate } from 'react-router-dom'; // Import Navigate
import { useAuth } from './components/AuthContext.jsx'; // Import useAuth
// import MovieDetails from './MovieDetails';

function App() {
  const { isAuthenticated } = useAuth(); // Get authentication state

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }else{

    return (
      <div className="app-container"> 
        <Header />
        <Slider />
        <ProductionHouse />
        <GenreMovieList />
      </div>
    );

  }

  
}

 export default App