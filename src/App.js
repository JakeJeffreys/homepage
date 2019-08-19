import React, { Component } from 'react';
import Moment from 'react-moment';
// import Weather from 'react-weather-component';
import './css/App.css';
import BlogComponent from './BlogComponent';
import RedditComponent from './RedditComponent';


class App extends Component {
  render() {

    return (
      <div className="App" id="mainApp">
        <header className="App-header"></header>

        <div id="left">
          <BlogComponent/>
        </div>

        <div id="center">
          <div className="Time" id="time">
            <Moment interval={60000} format="h:mm A"></Moment>
          </div>
          <div className="Date" id="date">
            <Moment format="dddd, MMMM Do"></Moment>
          </div>
        </div>

        <div id="right">
          <RedditComponent/>
        </div>

      </div>

    );
  }
}

export default App;
