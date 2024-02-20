import React from 'react'
import SecondNavbar from '../../components/SecondNavbar'

export default function Blog() {
  return (
    <>
    <SecondNavbar />
    <div className="max-w-[1400px] bg-stone-600 py-5 text-white mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
        <div className="bg-red-500 py-5 text-center">1</div>
        <div className="bg-red-500 py-5 text-center">2</div>
        <div className="bg-red-500 py-5 text-center">3</div>
        <div className="bg-red-500 py-5 text-center">4</div>
        <div className="bg-red-500 py-5 text-center">5</div>
        <div className="bg-red-500 py-5 text-center">6</div>
        <div className="bg-red-500 py-5 text-center">7</div>
        <div className="bg-red-500 py-5 text-center">8</div>
    </div>
    
    
    <div className="max-w-[1400px] bg-slate-500 mt-5 py-5 text-white mx-auto grid lg:grid-rows-4 md:grid-rows-2 sm:grid-rows-1 gap-5">
        <div className="bg-blue-500 py-5 text-center">1</div>
        <div className="bg-blue-500 py-5 text-center">2</div>
        <div className="bg-blue-500 py-5 text-center">3</div>
        <div className="bg-blue-500 py-5 text-center">4</div>
        <div className="bg-blue-500 py-5 text-center">5</div>
        <div className="bg-blue-500 py-5 text-center">6</div>
        <div className="bg-blue-500 py-5 text-center">7</div>
        <div className="bg-blue-500 py-5 text-center">8</div>
    </div>
    
    </>
  )
}
