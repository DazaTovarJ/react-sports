import React, {useContext, useState} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import AppCard from "../components/AppCard";
import {MainContext} from "../context/MainContext";

function Content() {
  const [category, setCategory] = useState("");
  const {sportsData, setSportsData, data} = useContext(MainContext);

  const handleChange = (e) => {
    setCategory(e.target.value);
    filterByCategory(e.target.value);
  };

  const filterByCategory = (category) => {
    if (category === "") {
      setSportsData(data);
    } else {
      const filteredData = data.filter((sport) => sport.category === category);
      setSportsData(filteredData);
    }
  };

  return (
    <Container>
      <h2>Content</h2>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="category">
          <Form.Label column sm={2}>
            Filter by
          </Form.Label>
          <Col sm={10}>
            <Form.Select value={category} onChange={handleChange}>
              <option value="">Select an option</option>
              <option value="Team">Team</option>
              <option value="Motor">Motor</option>
              <option value="Board">Board</option>
            </Form.Select>
          </Col>
        </Form.Group>
      </Form>
      <Row>
        {sportsData.map((sport) => (
          <Col xs={6} lg={4} key={sport.id} className="g-4">
            <AppCard {...sport} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Content;
