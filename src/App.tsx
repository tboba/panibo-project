import React from 'react';
import {Route, Routes} from "react-router-dom";
import './index.css';
import MainNavigation from "./components/ui/MainNavigation";
import MainContent from "./components/main/MainContent";
import Footer from "./components/ui/Footer";
import NotFound from "./components/ui/NotFound";
import BlogBoard from "./components/blog/BlogBoard";
import BlogContextProvider from "./components/store/blog-store";
import ContactPage from "./components/contact/ContactPage";

function App() {
  return (
    <div className='overflow-y-hidden'>
      <MainNavigation />
      <BlogContextProvider>
        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route path='/blog' element={<BlogBoard />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BlogContextProvider>
      <Footer />
    </div>
  );
}

export default App;
