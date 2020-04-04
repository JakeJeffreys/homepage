import React, { Component } from 'react';
import './css/FinanceBlogComponent.css';
import * as rssParser from 'react-native-rss-parser';
import Moment from 'react-moment';
import moment from 'moment';

class FinanceBlogComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        fs: [],
        rbf: [],
        mmm: [],
        grs: []
    };
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://financialsamurai.com/feed')
    .then((response) => response.text())
    .then((data) => rssParser.parse(data))
    .then ((rss) => {
      let newStatus = false;
      let date = moment(rss.items[0].published);
      if(moment(new Date()).diff(date, 'days') < 2)
        newStatus = true;
      this.setState({
        fs: {
          date: rss.items[0].published,
          new: newStatus,
          article: rss.items[0].title,
          url: rss.items[0].id
        }
      })
    })

    fetch('https://cors-anywhere.herokuapp.com/https://retireby40.org/feed/')
    .then((response) => response.text())
    .then((data) => rssParser.parse(data))
    .then ((rss) => {
      let newStatus = false;
      let date = moment(rss.items[0].published);
      if(moment(new Date()).diff(date, 'days') < 2)
        newStatus = true;
      this.setState({
        rbf: {
          date: rss.items[0].published,
          new: newStatus,
          article: rss.items[0].title,
          url: rss.items[0].id
        }
      })
    })

    fetch('https://cors-anywhere.herokuapp.com/https://www.mrmoneymustache.com/feed/')
    .then((response) => response.text())
    .then((data) => rssParser.parse(data))
    .then ((rss) => {
      let newStatus = false;
      let date = moment(rss.items[0].published);
      if(moment(new Date()).diff(date, 'days') < 2)
        newStatus = true;
      this.setState({
        mmm: {
          date: rss.items[0].published,
          new: newStatus,
          article: rss.items[0].title,
          url: rss.items[0].id
        }
      })
    })

    fetch('https://cors-anywhere.herokuapp.com/https://www.getrichslowly.org/feed/')
    .then((response) => response.text())
    .then((data) => rssParser.parse(data))
    .then ((rss) => {
      let newStatus = false;
      let date = moment(rss.items[0].published);
      if(moment(new Date()).diff(date, 'days') < 2)
        newStatus = true;
      this.setState({
        grs: {
          date: rss.items[0].published,
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
      <div className="FinanceBlogs">

        <h3>
          Finance Blogs
        </h3>

        <div className="FinanceBlogElement">
          <div id="Website">
            Financial Samurai
          </div>
          <div id="date">
            <Moment format="YYYY-MM-DD">{this.state.fs.date}</Moment>
            <NewOrOld newFlag={this.state.fs.new}/>
          </div>
          <div id="article">
            <a href={this.state.fs.url}>
              {this.state.fs.article}
            </a>
          </div>
        </div>

        <div className="FinanceBlogElement">
          <div id="Website">
            Retire By 40
          </div>
          <div id="date">
            <Moment format="YYYY-MM-DD">{this.state.rbf.date}</Moment>
            <NewOrOld newFlag={this.state.rbf.new}/>
          </div>
          <div id="article">
            <a href={this.state.rbf.url}>
              {this.state.rbf.article}
            </a>
          </div>
        </div>

        <div className="FinanceBlogElement">
          <div id="Website">
            Mr. Money Mustache
          </div>
          <div id="date">
            <Moment format="YYYY-MM-DD">{this.state.mmm.date}</Moment>
            <NewOrOld newFlag={this.state.mmm.new}/>
          </div>
          <div id="article">
            <a href={this.state.mmm.url}>
              {this.state.mmm.article}
            </a>
          </div>
        </div>

        
        <div className="FinanceBlogElement">
          <div id="Website">
            Get Rich Slowly
          </div>
          <div id="date">
            <Moment format="YYYY-MM-DD">{this.state.grs.date}</Moment>
            <NewOrOld newFlag={this.state.grs.new}/>
          </div>
          <div id="article">
            <a href={this.state.grs.url}>
              {this.state.grs.article}
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default FinanceBlogComponent;
