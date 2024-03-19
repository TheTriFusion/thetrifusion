import React, { useState } from 'react';
import './App.css';
import HomePage from './PageComponents/homePage';
import ScreenLoading from './PageComponents/loading';

function App() {
    const [isScreenLoading, setIsScreenLoading] = useState(true);
    setTimeout(() => {
      setIsScreenLoading(false);
    }, 3000);
  
  
  return (
    <>
    { isScreenLoading ? (
      <ScreenLoading/>  
    ) : (
      <div>
        
        <HomePage />
      </div>
    )}
    </>
  );
}

export default App;
//
//<HomePage/>