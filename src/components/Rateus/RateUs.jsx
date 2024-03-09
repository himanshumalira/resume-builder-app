import React from 'react'

function RateUs() {
  return (
    <div className=' w-full h-screen bg-slate-50'>
      <h1>Rate Us 1-5 out of 5 Star</h1>
      <input type="range"
      min={1}
      max={5}></input>
      <label >Rate Us</label>
      <div>
        <button type='submit'>Rate</button>
      </div>
      
    </div>
  )
}

export default RateUs
