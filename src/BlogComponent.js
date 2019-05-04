import React, { Component } from 'react';
import blogData from './scripts/data.json';
import './css/BlogComponent.css';


class BlogComponent extends Component {

  render() {

    const date_CH = blogData["Coding Horror"]["0"].date;
    const new_CH = blogData["Coding Horror"]["0"].new;
    const article_CH = blogData["Coding Horror"]["0"].article;
    const url_CH = blogData["Coding Horror"]["0"].url;


    const date_JOS = blogData["Joel On Software"]["0"].date;
    const new_JOS = blogData["Joel On Software"]["0"].new;
    const article_JOS = blogData["Joel On Software"]["0"].article;
    const url_JOS = blogData["Joel On Software"]["0"].url;

    const date_ALA = blogData["A List Apart"]["0"].date;
    const new_ALA = blogData["A List Apart"]["0"].new;
    const article_ALA = blogData["A List Apart"]["0"].article;
    const url_ALA = blogData["A List Apart"]["0"].url;

    function NewOrOld(props) {
      const newFlag = props.newFlag;
      if (newFlag) {
        return <span id="new">(NEW)</span>;
      } else {
        return null;
      }
    }

    return(
      <div className="Blogs">

        <h3>
          Blog Scraper
        </h3>

        <div className="BlogElement">
          <div id="Website">
            Coding Horror
          </div>
          <div id="date">
            {date_CH}
            <NewOrOld newFlag={new_CH}/>
          </div>
          <div id="article">
            <a href={url_CH}>
              {article_CH}
            </a>
          </div>
        </div>

        <div className="BlogElement">
          <div id="Website">
            Joel On Software
          </div>
          <div id="date">
            {date_JOS}
            <NewOrOld newFlag={new_JOS}/>
          </div>
          <div id="article">
            <a href={url_JOS}>
              {article_JOS}
            </a>
          </div>
        </div>

        <div className="BlogElement">
          <div id="Website">
            A List Apart
          </div>
          <div id="date">
            {date_ALA}
            <NewOrOld newFlag={new_ALA}/>
          </div>
          <div id="article">
            <a href={url_ALA}>
              {article_ALA}
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default BlogComponent;
