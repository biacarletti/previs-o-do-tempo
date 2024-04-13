import { useEffect, useState } from "react"
import { WeatherData } from "./models";
import lupa from '../src/assets/lupa.png';



export function App() {
    const [city, setCyte] = useState('')
    const [weatherForecast, setWeatherForecast] = useState<WeatherData>()

    useEffect(() => {
        console.log(import.meta.env)
    }, [])

    function handleCityChange(value: string) {
        setCyte(value)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    const handleSearch = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=79eddc120bd5dabf84a54e409a5e6c5c&lang=pt&units=metric`)
            .then((response) => {
                if (response.status == 200) {
                    return response.json()
                }
            })
            .then((data) => {
                // data.rain = {["1h"]: 123}
                setWeatherForecast(data)
            })
    }


    return (
        <main className="main">
            <form onSubmit={handleSubmit}>
                <label htmlFor="termo-de-consulta" className="label">Confira o Clima da Cidade </label>
                <div className="search">
                <input
                    type="text"
                    name="termo-de-consulta"
                    id="termo-de-consulta"
                    value={city}
                    onChange={event => handleCityChange(event.target.value)}
                    className="input"
                />
            <button onClick={handleSearch} type="submit" className="button"><img className="img_button" src={lupa} alt="lupa" /></button>
                </div>
            </form>

            {weatherForecast &&
                <div className="container">
                    <div className="city​_image_weather">
                    <div>{weatherForecast?.name}</div>
                    <ul>
                        {
                            weatherForecast.weather &&
                            weatherForecast.weather.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <img src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} />
                                    </li>
                                )
                            })

                        }
                    </ul>
                    </div>
                    <div className="climate">
                    <div>
                        <p>Temperatura: {weatherForecast?.main.temp} °C</p>
                    </div>
                    <p>Umidade: {weatherForecast?.main.humidity} % </p>
                    {
                        weatherForecast?.rain &&
                        <p>Chuva: {weatherForecast?.rain?.["1h"]}</p>
                    }
                    <p>Vento: {weatherForecast?.wind.speed.toFixed(0)} Km/h</p>
                    </div>
                </div>}
        </main>
    )
}