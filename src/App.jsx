import { useState } from 'react'
import './App.css'
import Task01 from './components/Task01'
import Task02 from './components/Task02'
import Task03 from './components/Task03'

function App() {
 

  return (
    <div className='flex'>
     
      <div className='w-1/3 min-h-full border-r-2 border-gray-400'>
      <h1 className='w-full text-center font-bold text-2xl my-2 mx-auto'>React Task 01</h1>
        <Task01 />  
      </div>
      <div className='w-1/3 min-h-full border-r-2 border-gray-400 px-8'>
      <h1 className='w-full text-center font-bold text-2xl my-2 mx-auto '>React Task 02</h1>
      <Task02 />
      </div>
      <div className='w-1/3 min-h-full border-r-2 border-gray-400 px-8'>
      <h1 className='w-full text-center font-bold text-2xl my-2 mx-auto '>React Task 03</h1>
      <Task03 />
      </div>
    </div>
  )
}

export default App
