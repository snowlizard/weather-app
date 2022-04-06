import React from 'react';
import { Cities } from './components/cities/cities';
import History from './components/history';
import Weather from './components/weather';
import rootStore from './rootStore';
import '../css/main.css'

export default class App extends React.Component {
  render() {
    return (
      <div className='main-container'>

        <div className="banner">
          <div className="">
            <h1 className="title">Weather Dood</h1>
            <p className="subtitle">Check the weather around the world dood</p>
          </div>
        </div>

        <div id='city-selector'>
          <Cities store={rootStore} />
        </div>

        <div className='weather-container'>
          <Weather store={rootStore} />
          <History store={rootStore} />
        </div>
      </div>
    );
  }
}
