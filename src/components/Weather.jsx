import { useState } from "react"
import WeatherImg from "./WeatherImg"





const Weather = ({weatherInfo}) => {
  
  const [isCelsius, setIsCelsius] = useState(true)

  const kelvinToCelsius = () => {
    const kelvin = weatherInfo.main.temp
    return (kelvin -273.15).toFixed(1)
  }  
  kelvinToCelsius()
  const kelvinToFrh = () => {
    const kelvin = weatherInfo.main.temp
    return ((kelvin - 273.15) * (9/5) + 32).toFixed(1)
  }  
  
  
  const handleChangeTemp = () => {
    setIsCelsius(!isCelsius)
  }


  const titleWeather = weatherInfo?.weather[0].description[0].toUpperCase() + weatherInfo?.weather[0].description.substring(1)
  
  return (
    <section className="grid  text-center gap-6 ">
      <h2 className="text-4xl font-bold">
        {weatherInfo?.name}, {weatherInfo?.sys.country}
      </h2>
      <section className="grid gap-4  w-full sm:flex">
        {/* Seccion arriba */}
        <article className="bg-white/70 gap-3 p-4 rounded-2xl grid grid-cols-2 items-center   sm:w-96" >
          <h3 className="col-span-2 text-black text-2xl">{titleWeather.toString()}</h3>
          <span id="temp" className="text-black text-4xl ">{isCelsius ? `${kelvinToCelsius()}°C` : `${kelvinToFrh()}°F`}</span>
          
          <WeatherImg icon={weatherInfo?.weather[0].icon} description={weatherInfo?.weather[0].description}/>
          
        </article>
        {/* Seccion abajo */}
        <section className="flex justify-between bg-white/70 rounded-2xl text-black  p-4 sm:flex-col sm:justify-around">

          <article className="flex gap-2 items-center justify-center sm:justify-start">
            <div>
              <img src="/images/wind.svg" alt="Speed" />
            </div>
              <span>{weatherInfo?.wind.speed} m/s</span>
          </article>
          <hr className="w-0.5 h-full bg-black opacity-50 m-1 sm:w-full  sm:h-0.5"/>
          <article className="flex gap-2 items-center justify-center sm:justify-start">
            <div>
              <img src="/images/humidity.svg" alt="Humidity" />
            </div>
              <span>{weatherInfo?.main.humidity}%</span>
          </article>
          <hr className="w-0.5 h-full bg-black opacity-50 m-1 sm:w-full sm:h-0.5"/>
          <article className="flex gap-2 items-center justify-center sm:justify-start">
            <div>
              <img src="/images/pressure.svg" alt="Pressure" />
            </div>
              <span>{weatherInfo?.main.pressure} hPa</span>
          </article>

        </section>

      </section>
      
      <div>
      
      <button onClick={handleChangeTemp} className=" text-black rounded-lg bg-white/70 w-2/4 p-2 content-center transition duration-1000 hover:bg-black/70 hover:text-white ">
        Change C/F
      </button>
    
      </div>
    </section>
  )
}

export default Weather