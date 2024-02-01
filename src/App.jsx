import React from 'react'
import Home from './Pages/Home/Home'

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <Home/>
    </div>
  )
}

export default App
