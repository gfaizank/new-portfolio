import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.png";
import installNode from "../assets/portfolio/installNode.png";
import navbar from "../assets/portfolio/navbar.png";
import reactParallax from "../assets/portfolio/reactParallax.png";
import reactSmooth from "../assets/portfolio/reactSmooth.png";
import reactWeather from "../assets/portfolio/reactWeather.png";

const Portfolio = () => {


    const portfolios=[
        {
            id: 1,
            src: arrayDestruct,
            href: 'https://urbanspace.shop/' , 

        },
        {
            id: 2,
            src: navbar,
            href: 'https://github.com/gfaizank/Google_drive_clone' ,
        },
        {
            id: 3,
            src: reactParallax, 
            href: 'https://github.com/gfaizank/Video_Calling_Application' ,
        },
        {
            id: 4,
            src: reactSmooth,
            href: 'https://github.com/gfaizank/bookStore', 
        },
        {
            id: 5,
            src: installNode,
            href: 'https://github.com/gfaizank/weather',
        },
        {
            id: 6,
            src: reactWeather,
            href: 'https://github.com/gfaizank/To-do-List',
        },
    ]

  return (
    <div name="portfolio" className=' bg-gradient-to-b from-black to-gray-800 w-full
     text-white md:h-screen '>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col
         justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className=' py-6'>Check out some of my work right here</p>
            </div>

            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8
             px-12 sm:px-0 '>
            {
                portfolios.map(({id, src, href}) => (
                

                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className=' rounded-md duration-200 hover:scale-105'/>
                    <div className=' flex items-center justify-center'>
                        <button className=' w-1/2 px-6 py-3 m-4 duration-200
                         hover:scale-105 ' ><a href={href}>Demo</a></button>
                        <button className=' w-1/2 px-6 py-3 m-4 duration-200
                         hover:scale-105 ' >Code</button>
                         
                    </div>
                </div>
                ))
            }
            </div>
            
        </div>

    </div>
  )
}

export default Portfolio
