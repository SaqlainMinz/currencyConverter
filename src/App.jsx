import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  
 
  return (
  
      <div className='w-full h-screen flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:`url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.dTQMsM9fKYFbf9rFCrr8xAHaEK%3Fpid%3DApi&f=1&ipt=5f60e926b81a6d999196ae72cbdcfa529ee5abaf3c32dd46663ad133273e7024&ipo=images)`}}>
       <h1 className='bg-amber-600'>hi</h1>
      </div>
  
  )
}

export default App
