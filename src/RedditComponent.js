import React, { Component } from 'react';
import './css/RedditComponent.css';

class RedditComponent extends Component {

  render() {

    return(
      <div className="Reddit">
        <h3>
          Reddit News
        </h3>

        <div className="RedditElement">
              Temp Link 1
        </div>

        <div className="RedditElement">
              "Temp Link 2"
        </div>

        <div className="RedditElement">
              "Temp Link 3"
        </div>

      </div>
    );
  }
}

export default RedditComponent;
