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
