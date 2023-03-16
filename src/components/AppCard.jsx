import React from "react";
import {Button, Card} from "react-bootstrap";

function AppCard({img, title, body, teams}) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={img} alt={title} />
      <Card.Body>
        <Card.Title as="h5">{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        {teams &&
          teams.map((team, i) => (
            <Card.Text key={i}>
              <b>Team {i + 1}</b>:{" "}
              <a href={team.website} target="_blank" rel="noopener">
                {team.name}
              </a>
            </Card.Text>
          ))}
        <Button variant="primary">Detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default AppCard;
