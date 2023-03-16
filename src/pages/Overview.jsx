import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import AppCard from "../components/AppCard";
import data from "../data/data";

function Overview() {
  return (
    <Container>
      <h2 className="my-2">Overview</h2>
      <Row>
        {data.map((sport) => (
          <Col xs={6} lg={4} key={sport.id} className="g-4">
            <AppCard {...sport} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Overview;
