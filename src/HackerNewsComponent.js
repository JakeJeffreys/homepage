import React, { Component } from 'react';
import axios from 'axios';
import './css/HackerNewsComponent.css';

class HackerNewsComponent extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
    }
  }

  makeRequest(data) {
    return axios.get('https://hacker-news.firebaseio.com/v0/item/'+ data +'.json')
    .then(results => results.data)
    .then(article => {
      return(
        <div key={article.id}>
          <a href={article.url}>
            {article.title}
          </a>
        </div>
      )
    });
  }

  componentDidMount() {

    let articles = [];

    axios.get('https://hacker-news.firebaseio.com/v0/beststories.json')
    .then(results => results.data)
    .then(async (data) => {
      for(var j=0; j < 5 ; j++) {
        articles.push(await this.makeRequest(data[j]));
      }
      this.setState({articles});
    })
  }

  render() {
    return(
      <div className="HackerNews">
        <h3>
          <a href="https://news.ycombinator.com/">
            Hacker News
          </a>
        </h3>

        <div className="HackerNewsElement">
          {this.state.articles[0]}
        </div>

        <div className="HackerNewsElement">
          {this.state.articles[1]}
        </div>

        <div className="HackerNewsElement">
          {this.state.articles[2]}
        </div>

        <div className="HackerNewsElement">
          {this.state.articles[3]}
        </div>

        <div className="HackerNewsElement">
          {this.state.articles[4]}
        </div>


      </div>
    );
  }
}

export default HackerNewsComponent;
