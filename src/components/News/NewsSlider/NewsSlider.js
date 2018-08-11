import { Carousel } from "antd";
import { Icon } from "semantic-ui-react";
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
            <div className="NewsSlider__HorizontalContainer">
              <Icon
                name="angle left"
                size="huge"
                className="NewsSlider__Arrow NewsSlider__LeftArrow"
                onClick={() => this.carousel.prev()}
              />
              <a
                href={article.url}
                target="_blank"
                className="NewsSlider__ImageContainer"
              >
                <img
                  src={article.urlToImage}
                  className="NewsSlider__Image"
                  alt="news"
                />
              </a>
              <Icon
                name="angle right"
                size="huge"
                className="NewsSlider__Arrow NewsSlider__RightArrow"
                onClick={() => this.carousel.next()}
              />
            </div>
            <a href={article.url} target="_blank">
              <h3 className="NewsSlider__Title">{article.title}</h3>
              <p className="NewsSlider__Date">{actualDate}</p>
            </a>
          </div>
        );
      } else {
        return null;
      }
    });
  }
  return (
    <Carousel
      autoplay
      effect="fade"
      ref={carousel => {
        this.carousel = carousel;
      }}
    >
      {articlesSlider}
    </Carousel>
  );
};

export default newsSlider;
