import React, { Component } from 'react';
import './css/RedditComponent.css';

class RedditComponent extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
    }
  }

  componentDidMount() {

    fetch('https://www.reddit.com/r/WorldNews/top/.json?count=5')
    .then(results => {
      return results.json();
    })
    .then(data => {
      let articles = data.data.children.map((item) => {
        return(
          <div key={item.data.children}>
            <a href={item.data.url}>
              {item.data.title}
            </a>
          </div>
        )
      })
      this.setState({articles: articles});
    })
  }

  render() {

    return(
      <div className="Reddit">
        <h3>
          <a href="https://www.reddit.com/r/worldnews/">
            Reddit World News
          </a>
        </h3>

        <div className="RedditElement">
          {this.state.articles[0]}
        </div>

        <div className="RedditElement">
          {this.state.articles[1]}
        </div>

        <div className="RedditElement">
          {this.state.articles[2]}
        </div>

      </div>
    );
  }
}

export default RedditComponent;
