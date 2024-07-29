import React from 'react'
import pixar from '../assets/images/pixar.png'
import starwar from '../assets/images/starwar.png'
import disney from '../assets/images/disney.png'
import nationalG from '../assets/images/nationalG.png'
import marvel from '../assets/images/marvel.png'

import disneyV from '../assets/Videos/disneyV.mp4'
import marvelV from '../assets/Videos/marvelV.mp4'
import pixarV from '../assets/Videos/pixarV.mp4'
import starWarsV from '../assets/Videos/starWarsV.mp4'
import nationalGeographicV from '../assets/Videos/nationalGeographicV.mp4'



function ProductionHouse() {
const productionHouseList = [
    {id:1,
      image:disney,
      video:disneyV
    },
    {id:1,
        image:marvel,
        video:marvelV
      },
      {id:1,
        image:pixar,
        video:pixarV
      },
      {id:1,
        image:starwar,
        video:starWarsV 
      },
      {id:1,
        image:nationalG,
        video:nationalGeographicV
      },
]

  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {productionHouseList.map((item)=>(
            <div className='border-[2px] border-gray-600 rounded-lg
            hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer
            relative shadow-xl shadow-black'>
                <video src={item.video} autoPlay loop playsInline muted
                    className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-65' ></video>

                <img src={item.image} className='w-full z-[1]'/>
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse