import React from 'react';
import { Cities } from './components/cities/cities';
import { Weather } from './components/weather/weather';
import '../css/main.css'

export default class App extends React.Component {
  render() {
    return (
      <div>

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Weather Dood</h1>
            <p className="lead">Check the weather around the world dood</p>
          </div>
        </div>

        <div className="row">
          <div className='c-select'>
            <Cities />
          </div>
          <div>
            <Weather />
          </div>
        </div>

      </div>
    );
  }
}
