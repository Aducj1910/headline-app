import React, { Component } from "react";
import { Card } from "react-bootstrap";

const StatsBar = (props) => {
  const { military, entertainment, culture, political, economy } = props;
  return (
    <Card bg="danger" text="white" style={{ width: "10rem" }}>
      <Card.Header>
        <Card.Title>Stats:</Card.Title>
      </Card.Header>
      <Card.Text className="m-3" align="center">
        <b>
          Military:<br></br>
          {military}
        </b>
      </Card.Text>
      <Card.Text className="m-3" align="center">
        <b>
          Entertainment:<br></br>
          {entertainment}
        </b>
      </Card.Text>
      <Card.Text className="m-3" align="center">
        <b>
          Political:
          <br></br>
          {political}
        </b>
      </Card.Text>
      <Card.Text className="m-3" align="center">
        <b>
          Culture:
          <br></br>
          {culture}
        </b>
      </Card.Text>
      <Card.Text className="m-3" align="center">
        <b>
          Economy:
          <br></br>
          {economy}
        </b>
      </Card.Text>
      <Card.Footer align="center">
        <b>Ratings: </b>10
      </Card.Footer>
    </Card>
  );
};

export default StatsBar;
