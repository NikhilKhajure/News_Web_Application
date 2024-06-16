import React from 'react'
import Header from './Components/Header/Header'
import NewsDataProvider from '../NewsData/NewsData'
import Home from './Components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNewsComp from './Components/Maincompo/MainNewsComp';
import Footer from './Components/Footer/Footer';
import Maincompcard from './Components/Maincompo/Maincompcard';
function App() {
  return (
    <>
      <NewsDataProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="*" element={<MainNewsComp />} />
            <Route path="/allnews" element={<Maincompcard />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </NewsDataProvider>
    </>
  )
}

export default App
