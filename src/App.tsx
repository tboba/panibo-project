import React from 'react';
import {Route, Routes} from "react-router-dom";
import './index.css';
import MainNavigation from "./components/ui/MainNavigation";
import MainContent from "./components/main/MainContent";
import Footer from "./components/ui/Footer";
import NotFound from "./components/ui/NotFound";

function App() {
  return (
    <div className='overflow-y-hidden'>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<MainContent />} />
        {/*<Route path='/blog' />*/}
        {/*<Route path='/contact' />*/}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
