import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Ja from './Components/A/HomePageDesktop';
import { useEffect, useState } from 'react';
import lowader from './Loader.webm'
function App() {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    const time = setTimeout(() => {
      setLoader(false)
    }, 8000);


  }, [])
  // const
  return (

    <>
      {
        loader ? (
          <section className='loader bg-dark d-flex justify-content-center align-items-center'>

            <div className='container-fluid  d-flex justify-content-center align-items-center loader-inner'>
              <div>
                <video className='logo_web'
                  autoPlay loop muted>
                  <source src={lowader} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        ) : (
          <HomePage />
        )
      }
    </>
  );
}

export default App;
