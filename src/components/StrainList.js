import React from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function StrainList({ strains }) {
  // console.log(strains);
  
  return (
    <CardGroup>
    {strains.data.map((item) => (
        <Card style={{ minWidth: '290px', minHeight: '200px' }}>
          <Card.Header>
            <Card.Title>{item.name}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text><Card.Img variant="top" src={item.image} style={{ height: '320px', width: '320px' }} /></Card.Text>
            <Card.Text>Brand: {item.seedCompany.name}</Card.Text>
            <Card.Text>Genetics: {item.genetics.names}</Card.Text>
            <Card.Text>
              <Button variant="success" href={item.url} target="_blank">Cannabis Report</Button>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
    ))}
    </CardGroup>
  );
}

export default StrainList;
