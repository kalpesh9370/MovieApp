
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from "../assets/images/kmovies-high-resolution-logo-transparent.png";
import { HiHome, HiOutlineDotsHorizontal } from "react-icons/hi"; // Use HiOutlineDotsHorizontal
import HeaderItem from './HeaderItem';
import { useAuth } from './AuthContext.jsx'; // Import useAuth

function Header() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth(); // Get authentication state and logout function

  const menu = [
    { name: 'HOME', icon: HiHome, path: '/' },
    // Other menu items can be added here
  ];

  const handleLogout = () => {
    logout(); // Call logout function
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className='flex items-center justify-between p-5 bg-[#121212] mt-0'>
      <div className='flex gap-8 items-center'>
        <img src={logo1} className='w-[100px] md:w-[150px] object-cover' alt="Logo" />

        <div className='hidden md:flex gap-8'>
          {/* For big screen */}
          {menu.map((item) => (
            <HeaderItem
              key={item.name}
              name={item.name}
              Icon={item.icon}
              onClick={() => navigate(item.path)}
            />
          ))}
        </div>

        {/* For small screen */}
        <div className='flex md:hidden gap-5'>
          {menu.slice(0, 3).map((item) => (
            <HeaderItem
              key={item.name}
              name={''}
              Icon={item.icon}
              onClick={() => navigate(item.path)}
            />
          ))}

          {/* Three dots */}
          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiOutlineDotsHorizontal} />
            {/* Toggle feature */}
            {toggle && (
              <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                {menu.slice(1).map((item) => ( // Adjust for more items if needed
                  <HeaderItem
                    key={item.name}
                    name={item.name}
                    Icon={item.icon}
                    onClick={() => navigate(item.path)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Authentication Buttons */}
      <div className="flex items-center gap-4">
        {!isAuthenticated ? (
          <>
            <button onClick={() => navigate('/login')} className="auth-button">
              Login
            </button>
            <button onClick={() => navigate('/signup')} className="auth-button">
              Signup
            </button>
          </>
        ) : (
          <button onClick={handleLogout} className="auth-button">
            Logout
          </button>
        )}
      </div>

      {/* User Avatar */}
      {/* <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='w-[40px] rounded-full' alt="User Avatar" /> */}
    </div>
  );
}

export default Header;
