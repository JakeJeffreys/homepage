import React, { Component } from 'react';
import Moment from 'react-moment';
import './css/App.css';
import TechBlogComponent from './TechBlogComponent';
import RedditComponent from './RedditComponent';
import HackerNewsComponent from './HackerNewsComponent';


class App extends Component {
  render() {

    return (
      <div className="App" id="mainApp">

        <div id="left">
          <TechBlogComponent/>
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
          <HackerNewsComponent/>
          <RedditComponent/>
        </div>

      </div>

    );
  }
}

export default App;
