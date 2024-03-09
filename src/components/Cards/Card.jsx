import React from 'react'
import TemplateOne from '../Templates/TemplateOne'
import { Link } from 'react-router-dom'
 function Card({template}) {

  const handleClick = function(){
    return <TemplateOne/>
  }
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{template}</h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        {/* <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
         onClick={handleClick}
        >
          Try It
        </button> */}
        <Link
                            to="/tempone"
                            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Try It
                        </Link>
      </div>
    </div>
  )
}

export default Card
