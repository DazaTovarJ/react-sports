import React from "react";
import {Button, Container, Form} from "react-bootstrap";
import {useFormik} from "formik";

const initialForm = {
  title: "",
  body: "",
  img: "",
  category: "",
  teams: [
    {
      name: "",
      website: "",
    },
    {
      name: "",
      website: "",
    },
    {
      name: "",
      website: "",
    },
  ],
};

function Create() {
  const formik = useFormik({
    initialValues: initialForm,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container>
      <h2>Create</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formik.values.title}
            placeholder="Enter title"
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="body"
            value={formik.values.body}
            placeholder="Enter description"
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Select name="category" value={formik.values.category}>
            <option value="">Select an option</option>
            <option value="Team">Team</option>
            <option value="Motor">Motor</option>
            <option value="Board">Board</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            name="img"
            value={formik.values.img}
            placeholder="Enter image url"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="team-1">
          <Form.Label>Team 1</Form.Label>
          <Form.Control
            type="text"
            name="team-1"
            value={formik.values.teams[0].name}
            placeholder="Enter team 1"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="link-1">
          <Form.Label>Link 1</Form.Label>
          <Form.Control
            type="text"
            name="link1"
            value={formik.values.teams[0].website}
            placeholder="Enter link url"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="team-2">
          <Form.Label>Team 2</Form.Label>
          <Form.Control
            type="text"
            name="team-2"
            value={formik.values.teams[1].name}
            placeholder="Enter team 2"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="link-2">
          <Form.Label>Link 2</Form.Label>
          <Form.Control
            type="text"
            name="link2"
            value={formik.values.teams[1].website}
            placeholder="Enter link url"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="team-3">
          <Form.Label>Team 3</Form.Label>
          <Form.Control
            type="text"
            name="team-3"
            value={formik.values.teams[2].name}
            placeholder="Enter team 3"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="link-3">
          <Form.Label>Link 3</Form.Label>
          <Form.Control
            type="text"
            name="link3"
            value={formik.values.teams[2].website}
            placeholder="Enter link url"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Create;
