import React from 'react'
import LoadingPage from './New Sample/Loading';
import FirstTransaction from './New Sample/FirstTransaction';
import WelcomePage from './New Sample/MainRedirect';
import HomePage from './New Sample/HomePage';
import AboutPage from './New Sample/About';
import ContactPage from './New Sample/ContactForm';
import FooterPage from './New Sample/Footer';
import ServicePage from './New Sample/ServicePage';
import SemiServices from './New Sample/SemiServices';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/'>
          <Route index element={<LoadingPage/>}/>
          <Route path='/FirstTransaction' element={<FirstTransaction/>}/>
          <Route path='/MainRedirect' element={<WelcomePage/>}/>
          <Route path='/HomePage' element={<HomePage/>}/>
          <Route path='/About' element={<AboutPage/>}/>
          <Route path='/SemiServices' element={<SemiServices/>}/>
          <Route path='/ContactForm' element={<ContactPage/>}/>
          <Route path='/Footer' element={<FooterPage/>}/>
          <Route path='/ServicePage' element={<ServicePage/>}/>
        </Route>
        </Routes>
      </Router>
       
    </>
  )
}

export default App