import React from 'react'
import Navbar from '../components/navbar.jsx'

import imgFeatureFurniture from '../assets/bike travellers-cuate.png'

function Home() {
  return (
    <div>
    
      <Navbar />
     
    
      <div className="m-10 mt-20">
        <div className="flex justify-center">
          <img
            src={imgFeatureFurniture}
            alt="feature_furniture"
            className="rounded-lg  max-h-[600px] w-auto"
          />
        </div>

        <h1 className="text-center text-4xl my-5 font-bold text-green-700">
         GO GREEN ARMY
        </h1>

        <p className="text-center text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
          A bicycle is a two-wheeled human-powered (sometimes electric-assisted) vehicle. You pedal to move the chain, which turns the rear wheel and propels you forward. Bicycles come in many styles for commuting, fitness, racing, off-road, cargo, and leisure.
          which makes them a versatile and eco-friendly transportation option.
        </p>
 
      </div>

        </div>
      
  )
}

export default Home