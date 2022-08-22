import React from 'react'
import Footer from './components/Footer'
import Hearder from './components/Hearder'
import Navbar from './components/Navbar'
const App = () => {
  return (
         <div className='bg-purple-200 h-screen'>
              <Navbar/>


                 <ul className='md:w-64 border-4 mx-auto border-purple-500 p-2 mt-2 text-center'>


                        <h3>Priority Box Details</h3>


                     <li className='bg-green-500 text-white p-1'>Green = First Priority</li>
                     <li className='bg-yellow-500 text-white p-1'>Yellow = Second Priority</li>
                     <li className='bg-red-500 text-white p-1'>Red =  Low Priority</li>
                   
                     
                 </ul>


               <div className=' sm:w-full md:w-2/4 p-4  bg-white mx-auto md:mt-[30px] text-center p-4 rounded-lg'>
               <Hearder/> 
               {/* <TodoList/>  */}
                <Footer/>
               </div>
               
         </div>
  )
}

export default App