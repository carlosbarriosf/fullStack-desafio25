import React, { useEffect, useState } from 'react'

import { FaMagnifyingGlass } from "react-icons/fa6";

import { getWeather } from '../assets/api'
import { weatherConditions } from '../assets/weatherConditions';


function ClimaCiudad() {

    const [city, setCity] = useState()
    const [value, setValue] = useState('')

    // getWeather('?q=posadas,ar&appid=7c6595d60d53ed29eaf2ade5db6059cc&units=metric')
    // .then(data => console.log(data))

    useEffect(() => {
        getWeather('?q=posadas&appid=7c6595d60d53ed29eaf2ade5db6059cc&units=metric')
            .then(data => {
                setCity(data);
                console.log(data)
            })
            .catch(err => console.error(err))
    }, [])


    const searchCity = e => {
        e.preventDefault();
        if(value) {
            getWeather(`?q=${value}&appid=7c6595d60d53ed29eaf2ade5db6059cc&units=metric`)
                .then(data => {
                    setCity(data);
                    console.log(data);
                })
                .catch(err => {
                    console.error(err)
                    setCity()
                })
                .finally(() => setValue(''))
        }
    }


    return (
        <div className='weatherApp-container' onSubmit={(e) => searchCity(e)}>
            <form className="controls">
                <input 
                    type="search" 
                    name="" 
                    id="" 
                    placeholder='Buscar por ciudad..'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button className='searchBtn' type="submit">
                    <FaMagnifyingGlass />
                </button>
            </form>
            {city && (
                <>
                    <div className="weather-container">
                        <h2 className='cityName'>{city.name}, <span>{city.sys.country}</span></h2>
                        <div className='weather'>
                            <h3 className='weather__temperature'>{city.main.temp}° C</h3>
                            <div className='weather__description'>
                                {weatherConditions.icon[city.weather[0].icon]}
                                <p>{weatherConditions.description[city.weather[0].icon]}</p>
                            </div>
                        </div>
                    </div>
                    {city.main.temp < 10 ? <p>Hace mucho frío</p> 
                        : city.main.temp > 30 ? <p>Hace mucho calor</p>
                        : <p>Temperatura normal</p>
                    }
                </>
            )}
            {!city && (
                <div>
                    Ups! Algo salió mal, intente nuevamente.
                </div>
            )}
        </div>
    )
}

export default ClimaCiudad