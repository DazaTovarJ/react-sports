import React, {Fragment, useContext} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {FieldArray, Formik} from "formik";
import * as Yup from "yup";
import {MainContext} from "../context/MainContext";

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
  const {data, addSport} = useContext(MainContext);

  return (
    <Formik
      initialValues={initialForm}
      onSubmit={(values, {setSubmitting, resetForm}) => {
        console.log(values);
        values.teams = values.teams.map((team, i) => {
          team.id = i + 1;
          return team;
        });
        const dataToSubmit = {...values, id: data.length + 1};
        addSport(dataToSubmit);
        setSubmitting(false);
        resetForm(initialForm);
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .min(3, "Title is too short")
          .max(20, "Title is too long")
          .required("Title is required"),
        body: Yup.string()
          .min(50, "Description is too short")
          .max(200, "Description is too long")
          .required("Description is required"),
        category: Yup.string().required("Category is required"),
        teams: Yup.array().of(
          Yup.object().shape({
            name: Yup.string()
              .min(3, "Team name is too short")
              .max(15, "Team name is too long")
              .required("Team name is required"),
            website: Yup.string()
              .min(10, "Team website is too short")
              .max(50, "Team website is too long")
              .required("Team website is required"),
          }),
        ),
      })}
    >
      {({values, errors, handleChange, handleSubmit}) => (
        <Container>
          <h2>Create</h2>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={values.title}
                placeholder="Enter title"
                onChange={handleChange}
                isInvalid={errors.title}
              />
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                name="body"
                value={values.body}
                placeholder="Enter description"
                onChange={handleChange}
                isInvalid={errors.body}
              />
              <Form.Control.Feedback type="invalid">
                {errors.body}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={values.category}
                onChange={handleChange}
                isInvalid={errors.category}
              >
                <option value="">Select an option</option>
                <option value="Team">Team</option>
                <option value="Motor">Motor</option>
                <option value="Board">Board</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.category}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                name="img"
                value={values.img}
                placeholder="Enter image url"
                onChange={handleChange}
              />
            </Form.Group>
            <FieldArray name="teams">
              {({insert, remove, push}) => (
                <>
                  {values.teams.map((team, index) => (
                    <Fragment key={index}>
                      <Form.Group
                        className="mb-3"
                        controlId={`team-name-${index + 1}`}
                      >
                        <Form.Label>Team {index + 1}</Form.Label>
                        <Form.Control
                          type="text"
                          name={`teams[${index}].name`}
                          value={team.name}
                          placeholder="Enter team name"
                          onChange={handleChange}
                          isInvalid={
                            errors.teams &&
                            errors.teams[index] &&
                            errors.teams[index].name
                          }
                        />
                        {errors.teams && errors.teams[index] && (
                          <Form.Control.Feedback type="invalid">
                            {errors.teams[index].name}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId={`team-link-${index + 1}`}
                      >
                        <Form.Label>Link {index + 1}</Form.Label>
                        <Form.Control
                          type="text"
                          name={`teams[${index}].website`}
                          value={team.website}
                          placeholder="Enter link url"
                          onChange={handleChange}
                          isInvalid={
                            errors.teams != undefined &&
                            errors.teams[index] != undefined &&
                            errors.teams[index].website
                          }
                        />
                        {errors.teams && errors.teams[index] && (
                          <Form.Control.Feedback type="invalid">
                            {errors.teams[index].website}
                          </Form.Control.Feedback>
                        )}
                      </Form.Group>
                    </Fragment>
                  ))}
                </>
              )}
            </FieldArray>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
}

export default Create;
