import { Carousel } from "antd";
import React from "react";

import "./NewsSlider.css";

import {
  convertISODateToReadableDate,
  convertUTCDateToLocalDate
} from "../../../data/universalFunctions/dateRelatedFunctions";

const newsSlider = props => {
  let mountedArticlesInSliderCount = 0;

  let articlesSlider = "";
  if (props.articles) {
    articlesSlider = props.articles.map(article => {
      if (
        article.title &&
        article.urlToImage &&
        article.url &&
        article.description &&
        article.publishedAt &&
        mountedArticlesInSliderCount < props.maximumNumberOfArticleInSlider
      ) {
        mountedArticlesInSliderCount++;
        let actualDate = JSON.stringify(
          convertISODateToReadableDate(
            convertUTCDateToLocalDate(new Date(article.publishedAt))
          )
        ).replace(/"/g, "");
        return (
          <div key={article.url}>
            <a href={article.url} target="_blank">
              <img
                src={article.urlToImage}
                className="NewsSlider__Image"
                alt="news"
              />
              <h3 className="NewsSlider__Title">{article.title}</h3>
            </a>
            <p>{actualDate}</p>
          </div>
        );
      } else {
        return null;
      }
    });
  }
  return <Carousel autoplay>{articlesSlider}</Carousel>;
};

export default newsSlider;
