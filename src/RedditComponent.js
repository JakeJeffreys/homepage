import React, { Component } from 'react';
import './css/RedditComponent.css';

class RedditComponent extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      url: [],
    }
  }

  componentDidMount() {

    fetch('https://www.reddit.com/r/WorldNews/top/.json?count=5')
    .then(results => {
      return results.json();
    }).then(data => {
      console.log("data", data.data.children);
      let articles = data.data.children.map((item) => {
        console.log("item", item.data.title);
        return(
          <div key={item.data.children}>
            <a href={item.data.url}>
              [{item.data.score}]
              -&nbsp;
              {item.data.title}
            </a>
          </div>
        )
      })
      this.setState({articles: articles});
      console.log("state", this.state.articles);
    })
  }

  render() {

    return(
      <div className="Reddit">
        <h3>
          Today's Reddit News
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
