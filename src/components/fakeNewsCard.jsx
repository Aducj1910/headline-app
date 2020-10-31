import React, { Component } from "react";
import {
  Card,
  Button,
  CardColumns,
  CardGroup,
  Accordion,
} from "react-bootstrap";

const FakeNewsCard = (props) => {
  const { fakeNewsHeadline, onPublish } = props;
  return (
    <div>
      <CardGroup>
        <CardColumns>
          {fakeNewsHeadline.map((fake) => (
            <div key={fake._id} className="col-ml-2">
              <Accordion>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={"./images/" + fake._id + ".jpg"}
                  />
                  <Card.Header>
                    <Accordion.Toggle
                      style={{ cursor: "pointer" }}
                      as={Card.Title}
                      variant="link"
                      eventKey="0"
                    >
                      {fake.text}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Card.Text>{fake.article}</Card.Text>
                    </Card.Body>
                  </Accordion.Collapse>
                  <Card.Body>
                    <Card.Text>{fake.price.toString()}</Card.Text>
                    <Button variant="danger" onClick={() => onPublish(fake)}>
                      Publish
                    </Button>
                  </Card.Body>
                </Card>
              </Accordion>
            </div>
          ))}
        </CardColumns>
      </CardGroup>
    </div>
  );
};

export default FakeNewsCard;
