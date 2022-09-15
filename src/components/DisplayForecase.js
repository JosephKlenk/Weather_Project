import React from "react";
import "./displayforecast.css";

function DisplayForecast(props) {
    const { data2 } = props;

    // Displays day for fiveday forcast
    var weekday = new Array(7);
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    weekday[6] = "Sunday";


    // Retrieves icons for each day
    const iconurl =
        `http://openweathermap.org/img/w/${data2.cod != 404 ? data2.list[0].weather[0].icon : null}.png`

    const iconurl2 =
        `http://openweathermap.org/img/w/${data2.cod != 404 ? data2.list[8].weather[0].icon : null}.png`

    const iconurl3 =
        `http://openweathermap.org/img/w/${data2.cod != 404 ? data2.list[16].weather[0].icon : null}.png`

    const iconurl4 =
        `http://openweathermap.org/img/w/${data2.cod != 404 ? data2.list[24].weather[0].icon : null}.png`

    const iconurl5 =
        `http://openweathermap.org/img/w/${data2.cod != 404 ? data2.list[32].weather[0].icon : null}.png`

    return (
        <div className="container">
            <div className="day1">
                <img className="weather-icon" src={iconurl} alt="" srcSet="" />
                <span>{weekday[(new Date(data2.list[0].dt * 1000).getDay())]}</span>
                <br></br>
                <span>{Math.floor((data2.list[0].main.temp_max - 273.15) * 1.8 + 32).toFixed(1)}<sup>o</sup>F/
                    {Math.floor((data2.list[0].main.temp_min - 273.15) * 1.8 + 32).toFixed(1)}
                    <sup>o</sup>F
                </span>
            </div>
            <div className="day2">
                <img className="weather-icon" src={iconurl2} alt="" srcSet="" />
                <span>{weekday[(new Date(data2.list[8].dt * 1000).getDay())]}</span>
                <br></br>
                <span>{Math.floor((data2.list[8].main.temp_max - 273.15) * 1.8 + 32).toFixed(1)}<sup>o</sup>F/
                    {Math.floor((data2.list[8].main.temp_min - 273.15) * 1.8 + 32).toFixed(1)}
                    <sup>o</sup>F
                </span>
            </div>
            <div className="day3">
                <img className="weather-icon" src={iconurl3} alt="" srcSet="" />
                <span>{weekday[(new Date(data2.list[16].dt * 1000).getDay())]}</span>
                <br></br>
                <span>{Math.floor((data2.list[16].main.temp_max - 273.15) * 1.8 + 32).toFixed(1)}<sup>o</sup>F/
                    {Math.floor((data2.list[16].main.temp_min - 273.15) * 1.8 + 32).toFixed(1)}
                    <sup>o</sup>F
                </span>
            </div>
            <div className="day4">
                <img className="weather-icon" src={iconurl4} alt="" srcSet="" />
                <span>{weekday[(new Date(data2.list[24].dt * 1000).getDay())]}</span>
                <br></br>
                <span>{Math.floor((data2.list[24].main.temp_max - 273.15) * 1.8 + 32).toFixed(1)}<sup>o</sup>F/
                    {Math.floor((data2.list[24].main.temp_min - 273.15) * 1.8 + 32).toFixed(1)}
                    <sup>o</sup>F
                </span>
            </div>
            <div className="day5">
                <img className="weather-icon" src={iconurl5} alt="" srcSet="" />
                <span>{weekday[(new Date(data2.list[32].dt * 1000).getDay())]} </span>
                <br></br>
                <span>{Math.floor((data2.list[32].main.temp_max - 273.15) * 1.8 + 32).toFixed(1)}<sup>o</sup>F/
                    {Math.floor((data2.list[32].main.temp_min - 273.15) * 1.8 + 32).toFixed(1)}
                    <sup>o</sup>F
                </span>
            </div>

        </div>

    );
}

export default DisplayForecast;