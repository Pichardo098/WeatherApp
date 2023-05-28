import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';
import Weather from './components/Weather';
import Loader from './components/Loader';

const iconImages = {
  "01d": {
    "icon": "/imagesIcon/01d.png",
    "bkg": "clearsky"
  },
  "01n": {
    "icon": "/imagesIcon/01n.png",
    "bkg": "clearsky"
  },
  "02d": {
    "icon": "/imagesIcon/02d.png",
    "bkg": "fewclouds"
  }, 	
  "02n": {
    "icon": "/imagesIcon/02n.png",
    "bkg": "fewclouds"
  }, 	 
  "03d": {
    "icon": "/imagesIcon/03d-03n.png",
    "bkg": "scatteredclouds"
  }, 	
  "03n": {
    "icon": "/imagesIcon/03d-03n.png",
    "bkg": "scatteredclouds"
  }, 	 
  "04d": {
    "icon": "/imagesIcon/04d-04n.png",
    "bkg": "brokenclouds"
  }, 	
  "04n": {
    "icon": "/imagesIcon/04d-04n.png",
    "bkg": "brokenclouds"
  }, 	 
  "09d": {
    "icon": "/imagesIcon/09d-09n.png",
    "bkg": "showerrain"
  }, 	
  "09n": {
    "icon":"/imagesIcon/09d-09n.png",
    "bkg": "showerrain"
  }, 	
  "10d": {
    "icon": "/imagesIcon/10d.png",
    "bkg": "rain"
  }, 	
  "10n": {
    "icon": "/imagesIcon/10n.png",
    "bkg": "rain"
  }, 
  "11d": {
    "icon": "/imagesIcon/11d-11n.png",
    "bkg": "thunderstorm"
  }, 	
  "11n": {
    "icon": "/imagesIcon/11d-11n.png",
    "bkg": "thunderstorm"
  }, 	
  "13d": {
    "icon": "/imagesIcon/13d-13n.png",
    "bkg": "snow"
  }, 	
  "13n": {
    "icon": "/imagesIcon/13d-13n.png",
    "bkg": "snow"
  }, 
  "50d": {
    "icon": "/imagesIcon/50d-50n.png",
    "bkg": "mist"
  }, 	
  "50n": {
    "icon": "/imagesIcon/50d-50n.png",
    "bkg": "mist"
  }, 
}
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
    //body.style.backgroundImage = iconImages[`${weatherInfo?.weather[0].icon}`]?.bkg
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
    
    //body.style.backgroundImage = iconImages[`${weatherInfo?.weather[0].icon}`]?.bkg
  }

  
  return (
    
    <div id='main' className={iconImages[weatherInfo?.weather[0].icon]?.bkg} >

      <header className='text-center text-sm py-2 gap-4 font-bold flex flex-col justify-center items-center min-h-0 sm:text-2xl'>
        <h1 className='text-2xl'>Weather app</h1>
        <form onSubmit={handleSubmit} className="mx-auto min-h-full">
          <div className="flex rounded-md overflow-hidden transition duration-1000 hover:bg-black/70 hover:text-white">
            <input id="nameCity" type="text" className="text-white outline-none bg-white/70 px-1" placeholder="Search your city.."/>
            <button className="bg-white/70 p-2" >Search</button>
          </div>
        </form>
      </header>
      <main >
        {
          weatherInfo ? <Weather weatherInfo={weatherInfo}/> : <Loader/>
        }
        
      </main>
      <footer className='text-center sm:text-2xl'>
        Created by Jesús for Academlo
      </footer>

    </div>
    
  )
}

export default App
