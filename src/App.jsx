import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyinfo';
import {InputBox} from './components/index.js';

function App() {
  const [amount, setAmount] = useState(0)
  const[from,setfrom]=useState('usd');
  const[to,setTo]=useState('inr');
  const[convertedAmount,setConvertedAmount]=useState(0);

const currencyData= useCurrencyInfo(from);

const options = Object.keys(currencyData);
console.log(options)
const convert= ()=>{
  setConvertedAmount(amount * currencyData[to])
}
const swap =()=>{
  setfrom(to);
  setTo(from)
  setConvertedAmount(amount)
  amount(convertedAmount)
}
  return (
  
      // <div className='w-full h-screen flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:`url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.dTQMsM9fKYFbf9rFCrr8xAHaEK%3Fpid%3DApi&f=1&ipt=5f60e926b81a6d999196ae72cbdcfa529ee5abaf3c32dd46663ad133273e7024&ipo=images)`}}>
      // <div className='w-full'>
      //   <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
      //   <form onSubmit={(e)=>{
      //     e.preventDefault();
      //     convert()
      //   }}>
      //     <div className='w-full mb-1'>
      //       <InputBox 
      //       label="from"
      //       amount={amount}
      //       currencyOption={options}
      //       onCurrencyChange={(currency)=>setfrom(currency)}
      //       onAmountChange={(amount)=>setAmount(amount)}
      //       selectedCurrency={from}
      //       />

      //     </div>
      //     <div className='relative w-full h-0.5'>

      //   <button
      //   className='absolute left-1/2 -translate-x-1/2 
      //   -translate-y-1/2 border-2 border-white
      //   rounded-md bg-blue-600 text-white px-2 py-0.5
      //   '
      //   onClick={swap}
      //   >Swap</button>
      //     </div>
      //   <div className='w-full mb-1'>
      //       <InputBox 
      //       label="to"
      //       amount={convertedAmount}
      //       currencyOption={options}
      //       amountDesabled={true}
      //       onCurrencyChange={(currency)=>setTo(currency)}
      //       selectedCurrency={to}
      //       />

      //     </div>
      //     <button type='submit'
      //     className='w-full bg-blue-600 text-white px-4 py-3
      //     rounded-lg'
      //     > Convert {from} to {to}</button>
      //   </form>
      //   </div>

      // </div>
      // </div>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200">
      <div className="w-full max-w-md mx-auto border-[4px] border-pink-400 rounded-3xl p-6 shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] bg-white font-comic text-center">

        <h1 className="text-3xl font-bold mb-4 text-purple-700 drop-shadow-md">
          💰 Currency Converter 💸
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-4"
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOption={options}
            onCurrencyChange={(currency) => setfrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={from}
          />

          <div className="relative">
            <button
              type="button"
              onClick={swap}
              className="absolute left-1/2 -translate-x-1/2 
              -translate-y-1/2 px-4 py-2 bg-yellow-300 hover:bg-yellow-400
              border-4 border-black rounded-full text-lg font-bold shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] transition-all"
            >
              🔁 Swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOption={options}
            amountDesabled={true}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
          />

          <button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500 text-white text-xl font-bold px-6 py-3
            rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,0.4)] border-4 border-black transition-all"
          >
            Convert {from.toUpperCase()} ➡ {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  
  )
}

export default App
