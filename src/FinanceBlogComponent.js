import React, { Component } from 'react';
import blogData from './scripts/json/financeblogs.json';
import './css/FinanceBlogComponent.css';


class FinanceBlogComponent extends Component {

  render() {

    const date_OI = blogData["Oblivious Investor"]["0"].date;
    const new_OI = blogData["Oblivious Investor"]["0"].new;
    const article_OI = blogData["Oblivious Investor"]["0"].article;
    const url_OI = blogData["Oblivious Investor"]["0"].url;

    const date_RBF = blogData["Retire By 40"]["0"].date;
    const new_RBF = blogData["Retire By 40"]["0"].new;
    const article_RBF = blogData["Retire By 40"]["0"].article;
    const url_RBF = blogData["Retire By 40"]["0"].url;

    const date_MMB = blogData["My Money Blog"]["0"].date;
    const new_MMB = blogData["My Money Blog"]["0"].new;
    const article_MMB = blogData["My Money Blog"]["0"].article;
    const url_MMB = blogData["My Money Blog"]["0"].url;

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
            Oblivious Investor
          </div>
          <div id="date">
            {date_OI}
            <NewOrOld newFlag={new_OI}/>
          </div>
          <div id="article">
            <a href={url_OI}>
              {article_OI}
            </a>
          </div>
        </div>

        <div className="FinanceBlogElement">
          <div id="Website">
            Retire By 40
          </div>
          <div id="date">
            {date_RBF}
            <NewOrOld newFlag={new_RBF}/>
          </div>
          <div id="article">
            <a href={url_RBF}>
              {article_RBF}
            </a>
          </div>
        </div>

        <div className="FinanceBlogElement">
          <div id="Website">
            My Money Blog
          </div>
          <div id="date">
            {date_MMB}
            <NewOrOld newFlag={new_MMB}/>
          </div>
          <div id="article">
            <a href={url_MMB}>
              {article_MMB}
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default FinanceBlogComponent;
