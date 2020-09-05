import React from "react";
import Card from 'react-bootstrap/Card';

function Strain({ strainDetails }) {
  return (
    <Card>
      <Card.Img variant="top" src={strainDetails.image} />
      <Card.Body>
        <Card.Title>{strainDetails.name}</Card.Title>
        <Card.Text>
          <p><span>Brand:</span> {strainDetails.seedCompany.name}</p>
          <p><span>Genetics:</span> {strainDetails.genetics.name}</p>
          <p><span>Brand:</span> <a href={strainDetails.url}>Cannabis Report</a></p>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted"></small>
      </Card.Footer>
    </Card>
  )
}

export default Strain;