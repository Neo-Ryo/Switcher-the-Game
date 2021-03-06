import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const LevelCard = ({ level, description, id, isUnlock, color }) => {
  return (
    <Card body>
      <CardTitle>stage {level}</CardTitle>
      <CardText>{description}</CardText>
      <Link to={`levels/${id}`}>
        <Button outline color={color} disabled={isUnlock}>
          Go !
        </Button>
      </Link>
    </Card>
  );
};

export default LevelCard;
