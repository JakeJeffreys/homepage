import React, { Component } from 'react';
import './css/TechBlogComponent.css';
import * as rssParser from 'react-native-rss-parser';
import Moment from 'react-moment';
import moment from 'moment';

class TechBlogComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        vc: [],
        ta: [],
        kh: [],
        ala: []
    };
  }
  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://feeds.megaphone.fm/vergecast')
    .then((response) => response.text())
    .then((data) => rssParser.parse(data))
    .then ((rss) => {
      let newStatus = false;
      let date = moment(rss.items[0].published);
      if(moment(new Date()).diff(date, 'days') < 2)
        newStatus = true;
      this.setState({
        vc: {
          date: rss.items[0].published,
          new: newStatus,
          article: rss.items[0].title,
          url: 'https://www.theverge.com/the-vergecast'
        }
      })
    })

    fetch('https://cors-anywhere.herokuapp.com/https://www.theatlantic.com/feed/channel/technology/')
    .then((response) => response.text())
    .then((data) => rssParser.parse(data))
    .then ((rss) => {
      let newStatus = false;
      let date = moment(rss.items[0].published);
      if(moment(new Date()).diff(date, 'days') < 2)
        newStatus = true;
      this.setState({
        ta: {
          date: rss.items[0].published,
          new: newStatus,
          article: rss.items[0].title,
          url: rss.items[0].links[0].url
        }
      })
    })

    fetch('https://cors-anywhere.herokuapp.com/https://www.knowledgehut.com/blog/feed')
    .then((response) => response.text())
    .then((data) => rssParser.parse(data))
    .then ((rss) => {
      let newStatus = false;
      let date = moment(rss.items[0].published);
      if(moment(new Date()).diff(date, 'days') < 2)
        newStatus = true;
      this.setState({
        kh: {
          date: rss.items[0].published,
          new: newStatus,
          article: rss.items[0].title,
          url: rss.items[0].id
        }
      })
    })

    fetch('https://cors-anywhere.herokuapp.com/https://alistapart.com/main/feed')
    .then((response) => response.text())
    .then((data) => rssParser.parse(data))
    .then ((rss) => {
      let newStatus = false;
      let dateString = rss.items[0].published.replace(/\t|\n/g, '');
      let date = moment(dateString);
      if(moment(new Date()).diff(date, 'days') < 2)
        newStatus = true;
      this.setState({
        ala: {
          date: dateString,
          new: newStatus,
          article: rss.items[0].title,
          url: rss.items[0].id
        }
      })
    })
  }

  render() {

    function NewOrOld(props) {
      const newFlag = props.newFlag;
      if (newFlag) {
        return <span id="new">(NEW)</span>;
      } else {
        return null;
      }
    }

    return(
      <div className="TechBlogs">

        <h3>
          Tech Blogs
        </h3>

        <div className="TechBlogElement">
          <div id="Website">
            VergeCast
          </div>
          <div id="date">
            <Moment format="YYYY-MM-DD">{this.state.vc.date}</Moment>
            <NewOrOld newFlag={this.state.vc.new}/>
          </div>
          <div id="article">
            <a href={this.state.vc.url}>
              {this.state.vc.article}
            </a>
          </div>
        </div>


        <div className="TechBlogElement">
          <div id="Website">
            The Atlantic
          </div>
          <div id="date">
            <Moment format="YYYY-MM-DD">{this.state.ta.date}</Moment>
            <NewOrOld newFlag={this.state.ta.new}/>
          </div>
          <div id="article">
            <a href={this.state.ta.url}>
              {this.state.ta.article}
            </a>
          </div>
        </div>

        <div className="TechBlogElement">
          <div id="Website">
            Knowledge Hut
          </div>
          <div id="date">
            <Moment format="YYYY-MM-DD">{this.state.kh.date}</Moment>
            <NewOrOld newFlag={this.state.kh.new}/>
          </div>
          <div id="article">
            <a href={this.state.kh.url}>
              {this.state.kh.article}
            </a>
          </div>
        </div>

        <div className="TechBlogElement">
          <div id="Website">
            A List Apart
          </div>
          <div id="date">
            <Moment format="YYYY-MM-DD">{this.state.ala.date}</Moment>
            <NewOrOld newFlag={this.state.ala.new}/>
          </div>
          <div id="article">
            <a href={this.state.ala.url}>
              {this.state.ala.article}
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default TechBlogComponent;
