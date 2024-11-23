// src/HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">My Simple Home Page</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-4 p-8">
        <section className="mb-8">
          <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to My React App!</h1>
        <p className="text-gray-700">This is a simple React app with a plain background and a navbar.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Get Started</button>
      </div>
        </section>

        {/* Additional Sections */}
        {/* Add more sections or components as needed */}
      </main>
    </div>
  );
};
   
export default HomePage;
