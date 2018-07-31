import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./NewsCard.css";

const newsCard = props => {
  return (
    <a href={props.url} target="_blank">
      <Card
        style={{ display: "inline-block", height: "400px", margin: "20px" }}
      >
        <Image src={props.image} style={{ width: "280", height: "220px" }} />
        <Card.Content>
          <Card.Header>{props.title}</Card.Header>
          <Card.Meta>
            <span className="date" />
          </Card.Meta>
          <Card.Description className="love">
            {props.description.substr(0, 20) + "..."}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>{props.date}</a>
        </Card.Content>
      </Card>
    </a>
  );
};

export default newsCard;

//Expected props:
//image, title, description, date
