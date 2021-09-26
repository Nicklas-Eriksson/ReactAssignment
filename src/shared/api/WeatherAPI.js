import React, {useState} from 'react'
import './WeatherAPI.css'

const apiKeyAndBase = {
    key: '96dfa7ce9e14961f951448e252ecbec4',
    base: 'https://api.openweathermap.org/data/2.5/'
}

function WeatherAPI() {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const search = e => {
        if(e.key === 'Enter'){
            fetch(`${apiKeyAndBase.base}weather?q=${query}&units=metric&APPID=${apiKeyAndBase.key}`).then(res => res.json()).then(result => {
                setWeather(result)
                setQuery('')
            })
        }
    }

    const dateBuilder = (d) =>{
        let months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December']
        let days = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag']
    
        let day = days[d.getDay()]
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()
    
        return `${day} ${date} ${month} ${year}`
    }

    return (
        // First checks if the type of weather is rain, if it is the background changes to rain. If not it checks if the temp is above 15c, if it is it swaps to a warmer background. If is is belov it swaps to a colder background.
        <div className={(typeof weather.main != 'undefined') ? (
            (weather.weather[0].main === 'Rain') ? 'rainVisible' : (typeof weather.main != 'undefined') ? (
                (weather.main.temp > 15) ? 'warmVisible' : 'coldVisible'
            ):'warmVisible'
        ):'warmVisible'}>
            <div class='weatherApp'>
                <main>                   
                    <div className="searchBox">
                        <input 
                        className='searchBar'
                        placeholder='Search'
                        type="text"
                        onChange={e=>setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                        />
                    </div>
                        {(typeof weather.main != 'undefined') ? (
                            <div>
                                <div className='weatherBoxContainer'>
                                    <div className="locationBox">
                                        <div className="location">
                                        {weather.name}, 
                                        {weather.sys.country}
                                        </div>
                                        <div className="date">{dateBuilder(new Date())}</div>
                                    </div>
                                    <div className="weatherBox">
                                        <div className="temp">
                                            {Math.round(weather.main.temp)}℃
                                        </div>
                                        <div className="weather">
                                            {weather.weather[0].main}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ): (
                            <div>
                                <h1>Search for a location</h1>
                                <h2>To see the current weather</h2>
                            </div>
                        )
                    }
                </main>
            </div>
        </div>
    )
}

export default WeatherAPI
