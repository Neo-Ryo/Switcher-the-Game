import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const LevelCard = ({ level, description }) => {
  return (
    <Card body>
      <CardTitle>{level}</CardTitle>
      <CardText>{description}</CardText>
      <Button color="danger">Go !</Button>
    </Card>
  );
};

export default LevelCard;
