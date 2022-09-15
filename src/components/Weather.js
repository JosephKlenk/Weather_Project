import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import DisplayForecast from "./DisplayForecase";
import "./weather.css";


function Weather() {

    const APIKEY = "a9ea3d914f6531051932cdac8eca6f41";

    const [form, setForm] = useState({
        city: "",
        country: ""
    });

    const [weather, setWeather] = useState([])

    // Function to retrieve current weather 
    async function weatherData(e) {
        e.preventDefault();
        if (form.city === "") {
            alert("Add values");
        } else {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
            ).then((res) => res.json())
                .then((data) => data);


            setWeather(
                {
                    data: data
                }
            );
        }
    }

    // Function to retrieve 5 day forecast
    async function fivedayForecast(e) {
        e.preventDefault();
        if (form.city === "") {
            alert("Add values");
        } else {
            const data2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${form.city},${form.country}&appid=${APIKEY}`
            ).then((res) => res.json())
                .then((data2) => data2);

            setWeather(
                {
                    data2: data2
                }
            );
        }

    }

    // Handles location entered
    const locationHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;


        if (name === "city") {
            setForm({ ...form, city: value })
        }

        if (name === "country") {
            setForm({ ...form, country: value })
        }
    };


    return (
        <div className="weather">
            <span className="title">Weather App</span>
            <br />

            <form>
                <input type="text" name="city" placeholder="Enter City" onChange={e => locationHandler(e)} />
                &nbsp; &nbsp; &nbsp; &nbsp;
                <input type="text" name="country" placeholder="Enter Country" onChange={e => locationHandler(e)} />
                <button className="getweather" onClick={(e) => { weatherData(e)}}> Search </button>
                <button className="getweather" onClick={(e) => fivedayForecast(e)}> Fiveday</button>
            </form>


            {
                weather.data !== undefined ?

                    <div>
                        <DisplayWeather data={weather.data} />
                    </div>
                    : null
            }

            {
                weather.data2 !== undefined ?

                    <div>
                        <DisplayForecast data2={weather.data2} />
                    </div>
                    : null
            }

        </div>
    )
}

export default Weather;