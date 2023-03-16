import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import AppCard from "../components/AppCard";

const sample = {
  title: "Sample App",
  body: "This is a sample app",
  img: "https://picsum.photos/1000/500",
  teams: [
    {
      website: "https://www.google.com",
      name: "Team 1",
    },
    {
      website: "https://www.google.com",
      name: "Team 2",
    },
    {
      website: "https://www.google.com",
      name: "Team 3",
    },
  ],
  count: 0,
};

function Overview() {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <AppCard {...sample} />
        </Col>
      </Row>
    </Container>
  );
}

export default Overview;
