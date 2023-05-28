const WeatherImg = ({icon, description}) => {

  
  const iconImages = {
    "01d": {
      "icon": "/imagesIcon/01d.png",
      "bkg": 'bg-[url("/bgkImages/clearsky.jpg")]'
    },
    "01n": {
      "icon": "/imagesIcon/01n.png",
      "bkg": 'bg-[url("/bgkImages/clearsky.jpg")]'
    },
    "02d": {
      "icon": "/imagesIcon/02d.png",
      "bkg": 'bg-[url("/bgkImages/fewclouds.jpg")]'
    }, 	
    "02n": {
      "icon": "/imagesIcon/02n.png",
      "bkg": 'bg-[url("/bgkImages/fewclouds.jpg")]'
    }, 	 
    "03d": {
      "icon": "/imagesIcon/03d-03n.png",
      "bkg": 'bg-[url("/bgkImages/scatteredclouds.jpg")]'
    }, 	
    "03n": {
      "icon": "/imagesIcon/03d-03n.png",
      "bkg": 'bg-[url("/bgkImages/scatteredclouds.jpg")]'
    }, 	 
    "04d": {
      "icon": "/imagesIcon/04d-04n.png",
      "bkg": 'bg-[url("/bgkImages/brokenclouds.jpg")]'
    }, 	
    "04n": {
      "icon": "/imagesIcon/04d-04n.png",
      "bkg": 'bg-[url("/bgkImages/brokenclouds.jpg")]'
    }, 	 
    "09d": {
      "icon": "/imagesIcon/09d-09n.png",
      "bkg": 'bg-[url("/bgkImages/showerrain.jpg")]'
    }, 	
    "09n": {
      "icon":"/imagesIcon/09d-09n.png",
      "bkg": 'bg-[url("/bgkImages/showerrain.jpg")]'
    }, 	
    "10d": {
      "icon": "/imagesIcon/10d.png",
      "bkg": 'bg-[url("/bgkImages/rain.jpg")]'
    }, 	
    "10n": {
      "icon": "/imagesIcon/10n.png",
      "bkg": 'bg-[url("/bgkImages/rain.jpg")]'
    }, 
    "11d": {
      "icon": "/imagesIcon/11d-11n.png",
      "bkg": 'bg-[url("/bgkImages/thunderstorm.jpg")]'
    }, 	
    "11n": {
      "icon": "/imagesIcon/11d-11n.png",
      "bkg": 'bg-[url("/bgkImages/thunderstorm.jpg")]'
    }, 	
    "13d": {
      "icon": "/imagesIcon/13d-13n.png",
      "bkg": 'bg-[url("/bgkImages/snow.jpg")]'
    }, 	
    "13n": {
      "icon": "/imagesIcon/13d-13n.png",
      "bkg": 'bg-[url("/bgkImages/snow.jpg")]'
    }, 
    "50d": {
      "icon": "/imagesIcon/50d-50n.png",
      "bkg": 'bg-[url("/bgkImages/mist.jpg")]'
    }, 	
    "50n": {
      "icon": "/imagesIcon/50d-50n.png",
      "bkg": 'bg-[url("/bgkImages/mist.jpg")]'
    }, 
  }

  return (
    <div className="min-w-fit  ">
    <img src={iconImages[`${icon}`]?.icon} alt={description} className="w-full  "/>
    </div>
  )
}

export default WeatherImg