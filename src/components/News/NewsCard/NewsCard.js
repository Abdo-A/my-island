import { Card, Image } from "semantic-ui-react";
import React from "react";

import "./NewsCard.css";

import {
  convertISODateToReadableDate,
  convertUTCDateToLocalDate
} from "../../../data/universalFunctions/dateRelatedFunctions";
import { withSizes } from "react-sizes";

const newsCard = props => {
  let actualDate = JSON.stringify(
    convertISODateToReadableDate(
      convertUTCDateToLocalDate(new Date(props.date))
    )
  ).replace(/"/g, "");
  if (props.title && props.description && props.image && props.url) {
    return (
      <a href={props.url} target="_blank">
        <Card
          style={{
            display: "inline-block",
            height:
              props.screenWidth < 900 ? "auto" : props.date ? "410px" : "360px",
            margin: props.noMargin ? "" : "35px",
            boxShadow: "15px 25px 30px 0px rgba(0,0,0,0.75)"
          }}
        >
          <Image src={props.image} style={{ width: "280", height: "220px" }} />
          <Card.Content>
            <Card.Header>{props.title}</Card.Header>
            {props.date ? (
              <Card.Meta>
                <span className="date">
                  <strong>{actualDate}</strong>
                </span>
              </Card.Meta>
            ) : null}
            <Card.Description className="love">
              {props.description.substr(0, 45) + "..."}
            </Card.Description>
          </Card.Content>
          {props.date ? (
            <Card.Content
              extra
              style={{
                padding: "auto auto"
              }}
            >
              <strong>{actualDate}</strong>
            </Card.Content>
          ) : null}
        </Card>
      </a>
    );
  } else {
    return null;
  }
};

const mapSizesToProps = ({ width }) => ({
  screenWidth: width
});

export default withSizes(mapSizesToProps)(newsCard);

//Expected props:
//image, title, description, date(UTC timezone in ISO format)
