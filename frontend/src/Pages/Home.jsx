import React from 'react';

const Home = () => (
  <div className="flex flex-col items-center justify-center text-center py-20 bg-gray-50">
    <h1 className="text-4xl font-bold text-blue-600">Plan Your Dream Trip with AI ✈️</h1>
    <p className="mt-4 text-lg text-gray-600 max-w-xl">
      Add your trip details and let AI create personalized itineraries with 
      daily activities, hotels, food, transport, and budget breakdown.
    </p>
    <a href="/dashboard" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
      Start Planning
    </a>
  </div>
);
export default Home;
