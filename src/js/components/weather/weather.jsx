import React from "react";

export const Weather = () => {
    return (
        <div className="weather-container">
            <div id="city-banner">
                <div>
                    <img src="city.png" alt="city"
                    id="city-img"/>
                </div>
                <span>{data.name}</span>
            </div>

            <div className="temp-info">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Temperature: {data.main.temp}°F
                    </li>

                    <li className="list-group-item">
                        Feels like: {data.main.feels_like}°F
                    </li>

                    <li className="list-group-item">
                        High: {data.main.temp_max}°F
                    </li>

                    <li className="list-group-item">
                        Low: {data.main.temp_min}°F
                    </li>

                    <li className="list-group-item">
                        Humidity: {data.main.humidity}°F
                    </li>
                </ul>
                <div className="figure">
                    <img src="assets/sun.png" 
                    alt="sun and clouds" 
                    id="weather"
                    className="figure-img img-figure rounded"/>
                </div>
            </div>

        </div>
    );
}

const data = {
    "coord": {
      "lon": 139.6917,
      "lat": 35.6895
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 53.51,
      "feels_like": 52.7,
      "temp_min": 49.78,
      "temp_max": 56.55,
      "pressure": 1019,
      "humidity": 88
    },
    "visibility": 10000,
    "wind": {
      "speed": 3.44,
      "deg": 80
    },
    "clouds": {
      "all": 75
    },
    "dt": 1649190183,
    "sys": {
      "type": 2,
      "id": 2038398,
      "country": "JP",
      "sunrise": 1649190079,
      "sunset": 1649235953
    },
    "timezone": 32400,
    "id": 1850144,
    "name": "Tokyo",
    "cod": 200
  };