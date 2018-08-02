import React from "react";

import "./NewsCardsCollection.css";
import NewsCard from "../NewsCard/NewsCard";

const newsCardsCollection = props => {
  let articleCardsToDisplay = "";
  let mountedArticlesInCardsCount = 0;
  if (props.articles) {
    console.log(props.maximumNumberOfArticleInSlider);
    articleCardsToDisplay = props.articles.map((article, index) => {
      if (
        article.title &&
        article.urlToImage &&
        article.url &&
        article.description &&
        article.publishedAt &&
        mountedArticlesInCardsCount < props.maximumNumberOfArticleCards &&
        index > props.maximumNumberOfArticleInSlider
      ) {
        mountedArticlesInCardsCount++;
        return (
          <span key={article.url} className="MyCountryNews__NewsCardWrapper">
            <NewsCard
              title={article.title}
              image={article.urlToImage}
              url={article.url}
              description={article.description}
              date={article.publishedAt}
            />
          </span>
        );
      } else {
        return null;
      }
    });
  }
  return (
    <div
      style={{
        marginTop: "5vh",
        display: "flex",
        flexDirection: "row",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {articleCardsToDisplay}
    </div>
  );
};

export default newsCardsCollection;

//Expected props:
//articles, maximumNumberOfArticleCards, maximumNumberOfArticleInSlider
