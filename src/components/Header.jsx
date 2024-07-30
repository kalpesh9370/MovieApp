// import React, { useState } from 'react'
// import logo from "../assets/images/logo.png"
// //importing logos from react logo

// import { HiHome,
//     HiMagnifyingGlass,
//     HiStar,
//     HiPlayCircle,
//     HiTv } from "react-icons/hi2";
// import { HiPlus,HiDotsVertical } from "react-icons/hi";
// import HeaderItem from './HeaderItem';
// function Header() {
//     const [toggle,setToggle]=useState(false);
//     const menu=[
//         {
//             name:'HOME',
//             icon:HiHome
//         },
//         {
//             name:'SEARCH',
//             icon:HiMagnifyingGlass
//         },
//         {
//             name:'WATCH LIST',
//             icon:HiPlus
//         },
//         {
//             name:'ORIGINALS',
//             icon:HiStar
//         },
//         {
//             name:'MOVIES',
//             icon:HiPlayCircle
//         },
//         {
//             name:'SERIES',
//             icon:HiTv
//         }
//     ]
//   return (
//     <div className='flex items-center justify-between p-5'>
//         <div className='flex  gap-8 items-center'>
//         <img src={logo} className='w-[80px] 
//         md:w-[115px] object-cover' />
        
//         <div className='hidden md:flex gap-8'>

//         {/* for big screen */}
//         {menu.map((item)=>(
//             <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
//         ))}
//         </div>

//          {/* for small screen */}
//         <div className='flex md:hidden gap-5'>
//              {menu.map((item,index)=>index<3&&(
//              <HeaderItem  key={item.name} name={''} Icon={item.icon} />
//               ))}

//              {/* three dots */}
//              <div className='md:hidden' onClick={()=>setToggle(!toggle)}>       
//                 <HeaderItem name={''} Icon={HiDotsVertical} />
//                 {/* toggle feature */}
//                 {toggle? <div className='absolute mt-3 bg-[#121212] 
//                 border-[1px] border-gray-700 p-3 px-5 py-4'>
//                {menu.map((item,index)=>index>2&&(
//             <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
//         ))}
//                 </div>:null}
//             </div> 
//         </div>

//         </div>
//         <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
//         className='w-[40px] rounded-full right-0'/>
//     </div>
//   )
// }

// export default Header

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import logo1 from "../assets/images/kmovies-high-resolution-logo-transparent.png";
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const menu = [
    { name: 'HOME', icon: HiHome, path: '/' },
    { name: 'SEARCH', icon: HiMagnifyingGlass, path: '/search' },
    { name: 'WATCH LIST', icon: HiPlus, path: '/watchlist' },
    { name: 'ORIGINALS', icon: HiStar, path: '/originals' },
    { name: 'MOVIES', icon: HiPlayCircle, path: '/movies' },
    { name: 'SERIES', icon: HiTv, path: '/series' }
  ];

  return (
    <div className='flex items-center justify-between p-5 bg-[#121212] mt-0'>
      <div className='flex gap-8 items-center'>
        {/* <img src={logo} className='w-[80px] md:w-[115px] object-cover' /> */}
        <img src={logo1} className='w-[100px] md:w-[150px] object-cover' />

        <div className='hidden md:flex gap-8'>
          {/* for big screen */}
          {menu.map((item) => (
            <HeaderItem
              key={item.name}
              name={item.name}
              Icon={item.icon}
              onClick={() => navigate(item.path)}
            />
          ))}
        </div>

        {/* for small screen */}
        <div className='flex md:hidden gap-5'>
          {menu.slice(0, 3).map((item) => (
            <HeaderItem
              key={item.name}
              name={''}
              Icon={item.icon}
              onClick={() => navigate(item.path)}
            />
          ))}

          {/* three dots */}
          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical} />
            {/* toggle feature */}
            {toggle && (
              <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                {menu.slice(3).map((item) => (
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
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='w-[40px] rounded-full right-0' />
    </div>
  );
}

export default Header;
