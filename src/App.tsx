import React from 'react';
import {Route, Routes} from "react-router-dom";
import './index.css';
import MainNavigation from "./components/ui/MainNavigation";
import MainContent from "./components/main/MainContent";

function App() {
  return (
    <div className='overflow-y-hidden'>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/blog' />
        <Route path='/contact' />
      </Routes>
    </div>
  );
}

export default App;
