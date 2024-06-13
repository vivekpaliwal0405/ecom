import React, { useEffect, useRef, useState } from 'react'

const LearnHooks = () => {
    const btnRef = useRef();
    const [count , setCount ]= useState(0)
    useEffect(()=>{ 
        console.log(count);
    },[count])

    

  return (

<div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
  <button ref = {btnRef}
    onClick={() => setCount((prev) => prev + 1)}
    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ease-in-out"
  >
    Add Count
  </button>
  
  <button
  onClick={()=>{
    btnRef.current.click();
    btnRef.current.style.display = "block"
  }}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ease-in-out m-3"
  >
    Trigger
  </button>
</div>
  )
}

export default LearnHooks
