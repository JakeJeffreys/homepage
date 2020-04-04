import React, { Component } from 'react';
import Moment from 'react-moment';
import './css/App.css';
import FinanceBlogComponent from './FinanceBlogComponent';
import TechBlogComponent from './TechBlogComponent';
import RedditComponent from './RedditComponent';
import HackerNewsComponent from './HackerNewsComponent';
import $ from "jquery";

class App extends Component {

  componentDidMount() {
    console.log("Background");
    // $("body").css("background", "url(./src/background0.jpg)");
  }

  render() {

    return (
      <body style={{
        height: '200px',
        background: 'url(/src/background0.jpg)'
      }}>
      <div className="App" id="mainApp">

        <div id="left">
          <FinanceBlogComponent/>
          <RedditComponent/>
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
          <TechBlogComponent/>
          <HackerNewsComponent/>
        </div>

      </div>
      </body>

    );
  }
}

export default App;
