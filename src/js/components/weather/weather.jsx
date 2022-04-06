import React from "react";

export default class Weather extends React.Component {
    constructor(props){
        super(props);
    }


  render(){
    return (
      <div className="card weather-card">

        <div className="card-header">
            Today's Forcast
        </div>

        <div className="card-body body-flex">
            <div id="city-banner">
              <div>
                  <img src="city.png" alt="city"
                  id="city-img"/>
              </div>
              <span>{this.props.city.name}</span>
            </div>
        
            <div className="temp-info">
              <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                      Temperature: {this.props.city.main.temp}°F
                  </li>

                  <li className="list-group-item">
                      Feels like: {this.props.city.main.feels_like}°F
                  </li>

                  <li className="list-group-item">
                      High: {this.props.city.main.temp_max}°F
                  </li>

                  <li className="list-group-item">
                      Low: {this.props.city.main.temp_min}°F
                  </li>

                  <li className="list-group-item">
                      Humidity: {this.props.city.main.humidity}%
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
      </div>
  );
  }
}