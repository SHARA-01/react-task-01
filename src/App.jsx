import { useState } from 'react'
import './App.css'
import Task01 from './pages/Task01'
import Task02 from './pages/Task02'
import Task03 from './pages/Task03'
import Task04 from './pages/task04'
import Task05 from './pages/Task05'

function App() {
 const [dis, setDis] = useState(false)

  return (
    <div className='flex flex-col'>
      <div className='flex'>
      <div className='w-1/3 min-h-full border-r-2 border-gray-400 justify-center'>
      <h1 className='w-full text-center font-bold text-2xl my-2 mx-auto'>React Task 01</h1>
      <button className="w-full border-2 px-2 py-1 bg-blue-500 rounded-md mx-auto" onClick={()=> setDis(!dis)}>{ dis ? "Hide" : "Show" } child components </button>
      {
        dis ?  <Task01 />  : ''
      }
        
      </div>
      <div className='w-1/3 min-h-full border-r-2 border-gray-400 px-8'>
      <h1 className='w-full text-center font-bold text-2xl my-2 mx-auto '>React Task 02</h1>
      <Task02 />
      </div>
      <div className='w-1/3 min-h-full border-r-2 border-gray-400 px-8'>
      <h1 className='w-full text-center font-bold text-2xl my-2 mx-auto '>React Task 03</h1>
      <Task03 />
      </div>
      <hr />
      </div>
     <div className='my-10 border-t-2 border-black/50 px-5 py-5'>
        <h1 className='font-bold'>React Task 04</h1>
        <Task04 />
     </div>
     <div>
     <h1 className='font-bold'>React Task 05</h1>
     <Task05 />
     </div>
    </div>
  )
}

export default App
