import React from 'react';

function FeatureCard() {
    return(
        <div
            key={title}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
    );
    
}
export default FeatureCard;