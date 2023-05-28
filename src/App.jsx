import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';
import Weather from './components/Weather';
import Loader from './components/Loader';


function App() {
  
  const [weatherInfo, setWeatherInfo] = useState(null)

  function success(pos) {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "8dbb9c1b67d87ae71a4094beb86cf24b"

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios.get(URL)
      .then(({data}) => setWeatherInfo(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [])
  

  //Search City Button
 

  const handleSubmit = (e) => {
    e.preventDefault()
    const city = e.target.nameCity.value

    if(city === "")return navigator.geolocation.getCurrentPosition(success)


    const API_KEY = "8dbb9c1b67d87ae71a4094beb86cf24b"
    const URL_City = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    axios.get(URL_City)
      .then(({data}) => setWeatherInfo(data))
      .catch((err) => console.log(err))
      changeBkg()
  }


  return (
    <>
    
      <header className='text-center text-sm py-2 gap-4 font-bold flex flex-col justify-center items-center min-h-0 sm:text-2xl'>
        <h1 className='text-2xl'>Weather app</h1>
        <form onSubmit={handleSubmit} className="mx-auto min-h-full">
          <div className="flex rounded-md overflow-hidden transition duration-1000 hover:bg-black/70 hover:text-white">
            <input id="nameCity" type="text" className="text-white outline-none bg-white/70 px-1" placeholder="Search your city.."/>
            <button className="bg-white/70 p-2" >Search</button>
          </div>
        </form>
      </header>
      <main className='flex justify-center items-center min-h-0'>
        {
          weatherInfo ? <Weather weatherInfo={weatherInfo}/> : <Loader/>
        }
        
      </main>
      <footer className='text-center sm:text-2xl'>
        Crated by Jesús for Academlo
      </footer>
    </>
  )
}

export default App
