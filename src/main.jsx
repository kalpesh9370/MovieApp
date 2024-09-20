import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MovieDetails from './components/MovieDetails.jsx'

import Login from './components/Login1.jsx';
import Signup from './components/Signup.jsx';
import { AuthProvider } from './components/AuthContext.jsx'; // Import AuthProvider


const router = createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/movieDetails",element:<MovieDetails/>},
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap the router with AuthProvider */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);


