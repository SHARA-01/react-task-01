import React, { useState } from 'react'

function Task02() {
    const [count, setCount] = useState(0)

    return (
        <div className='flex flex-col space-y-6'>
            <h1 className='text-center font-bold border-b-2 border-gray-300'>{count}</h1>
            <span className='flex space-x-12 mx-auto justify-center'>
                <button
                 className="border-2 px-2 py-1 bg-blue-500 rounded-md hover:text-white  " 
                 onClick={()=> setCount(count+1)}
                 >Increament</button>
                <button
                 className="border-2 px-2 py-1 bg-blue-500 rounded-md hover:text-white"
                 onClick={()=> count>0 ? setCount(count-1): ''}>Decreament</button>
            </span>
        </div>
    )
}

export default Task02