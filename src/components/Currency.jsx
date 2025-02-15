import React, { useState } from 'react'
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_CxQJEyeneA3phlH3LPmbebCOkfC4fIpwzYy6tXaz";


function Currency() {

  const [amount, setAmount] = useState(0);
  const [fromCurrency , setFromCurrency] = useState('EUR');
  const [toCurrency , setToCurrency] = useState('USD');
  const [result , setResult] = useState(0);
  
  
  const exchange = async ()=> {
      const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
      const result = (response.data.data[toCurrency] * amount).toFixed(2);
      setResult(result);
      }

  return (
    <div className="currency-div">
      <div className='header text-white align-middle justify-center items-center h-auto flex flex-col mb-7'>
        <h3>Calculate your Currency!</h3>
      </div>
      <div>
        <input value={amount} onChange={(e) => setAmount(e.target.value)}  className="amount mr-5"/>
        <select onChange={(e)=> setFromCurrency(e.target.value) } className="from-currency-opt mr-10 ">
            <option>EUR</option>
            <option>USD</option>
            <option>CHF</option>
            <option>TRY</option>
        </select>

        <select onChange={(e) => setToCurrency(e.target.value)} className=" to-currency-opt mr-5">
            <option>EUR</option>
            <option>USD</option>
            <option>CHF</option>
            <option>TRY</option>
        </select>
        
        <input value={result} type='number' className="result"/> 
        </div>  
        <div >
      <button 
      onClick={exchange}
      className=" bg-red-500 block mx-auto mt-7 text-white pl-5 pr-5 rounded-sm"> Calculate!</button>
    </div>
    </div>
    
  )
}

export default Currency