import React from 'react';
import {Route, Routes} from "react-router-dom";
import './index.css';
import MainNavigation from "./components/ui/MainNavigation";
import MainContent from "./components/main/MainContent";
import Footer from "./components/ui/Footer";
import NotFound from "./components/ui/NotFound";
import BlogBoard from "./components/blog/BlogBoard";
import ContactPage from "./components/contact/ContactPage";
import BlogContextProvider from "./store/blog-store";
import {Helmet} from "react-helmet";

const Favicon = require('./static/icons/favicon.ico');
const AppleTouchIcon = require('./static/icons/apple-touch-icon.png');

const App = () => {
  return (
    <div className='overflow-y-hidden'>
      <Helmet>
        <title>panibo.pl | Strona Główna</title>
        <link rel="icon" href={Favicon}/>
        <link rel="apple-touch-icon" href={AppleTouchIcon} />
      </Helmet>

      <MainNavigation/>
      <BlogContextProvider>
        <Routes>
          <Route path='/' element={<MainContent/>}/>
          <Route path='/blog' element={<BlogBoard/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BlogContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
