import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
      <div className="p-4 bg-blue-500 text-white">
          <h1 className="text-2xl font-bold">Tailwind CSS is working!</h1>
      </div>
  );
}


import UserProfile from './components/UserProfile';

function App() {
    return (
        <div>
            <UserProfile />
        </div>
    );
}

export default App;