import React from 'react';
import {Route, Routes} from "react-router-dom";
import Hero from "./components/main/Hero";
import './index.css';
import MainNavigation from "./components/ui/MainNavigation";

function App() {
  return (
    <div className='overflow-y-hidden'>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/blog' />
        <Route path='/contact' />
      </Routes>
    </div>
  );
}

export default App;
