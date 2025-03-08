import React, { useEffect, useRef } from 'react';
import './App.css'
import Invitation from './components/Invitation';


function App() {



  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100">
      <h1 className="text-4xl font-bold mb-4">Baby Shower Invitation</h1>
      <Invitation />
    </div>
  )
}

export default App
