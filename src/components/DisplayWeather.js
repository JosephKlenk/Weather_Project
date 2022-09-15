import React from "react";
import "./displayweather.css";


function DisplayWeather(props) {
    const { data } = props;

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();

    const iconurl =
    `http://openweathermap.org/img/w/${data.cod != 404 ? data.weather[0].icon : null}.png`

        
    return (
        <div className="displayweather">
            {data.cod != 404 ? (
                <React.Fragment>
                    <div className="maincard">
                        <span className="cardtitle">
                            {data.name}, {data.sys.country}
                        </span>
                        <span className="cardsubtitle">
                            As of { weekday[d.getDay()]} {new Date().toLocaleTimeString()}
                        </span>

                        <h1>
                            {Math.floor((data.main.temp - 273.15) * 1.8 + 32).toFixed(1)}
                            <sup>o</sup>F
                        </h1>
                        <span className="weather-main">{data.weather[0].main}</span>
                        <img className="weather-icon" src={iconurl} alt="" srcSet="" />
                        <span className="weather-description">
                            {data.weather[0].description}
                        </span>
                    </div>
                    <div className="weatherdetails">
                        <div className="row1">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4>High/Low</h4>
                                        </td>
                                        <td>
                                            <span>
                                                {Math.floor((data.main.temp_max - 273.15) * 1.8 + 32).toFixed(1)}/
                                                {Math.floor((data.main.temp_min - 273.15) * 1.8 + 32).toFixed(1)}
                                                <sup>o</sup>F
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Humidity</h4>
                                        </td>
                                        <td>
                                            <span>{data.main.humidity} %</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Pressure</h4>
                                        </td>
                                        <td>
                                            <span>{data.main.pressure} hPa</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Visibility</h4>
                                        </td>
                                        <td>
                                            <span>{(data.visibility / 1609).toFixed(1)} miles</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="row2">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4>Wind</h4>
                                        </td>
                                        <td>
                                            <span>{Math.floor(data.wind.speed * 2.236936)} mph</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Wind Direction</h4>
                                        </td>
                                        <td>
                                            <span>
                                                {data.wind.deg}
                                                <sup>o</sup> deg
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Sunrise</h4>
                                        </td>
                                        <td>
                                            <span>
                                                {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Sunset</h4>
                                        </td>
                                        <td>
                                            <span>
                                                {new Date(data.sys.sunset * 1000).toLocaleTimeString()}

                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </React.Fragment>
            ) : (
                <div className="maincard">
                    <h2>{data.message}</h2>
                </div>
            )}
        </div>
        
    );
}

export default DisplayWeather;
