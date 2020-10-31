import React, { Component } from "react";
import {
  Card,
  Button,
  CardColumns,
  CardGroup,
  Accordion,
} from "react-bootstrap";

const RealNewsCard = (props) => {
  const { realNewsHeadline, onMediaName } = props;
  return (
    <div>
      <CardGroup>
        <CardColumns>
          {realNewsHeadline.map((real) => (
            <div key={real._id} className="col-ml-3">
              <Accordion>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={"./images12/" + onMediaName()} />
                  <Card.Header>
                    <Accordion.Toggle
                      style={{ cursor: "pointer" }}
                      as={Card.Title}
                      variant="link"
                      eventKey="0"
                    >
                      {real.text}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Card.Text>{real.article}</Card.Text>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          ))}
        </CardColumns>
      </CardGroup>
    </div>
  );
};

export default RealNewsCard;
