import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';

export default function SearchForm({ setSearchTerm }) {
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchStrain() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Search your favorite strain</Form.Label>
        <Form.Control type="text" 
          placeholder="" 
          ref={searchValue} 
          onChange={searchStrain} />
      </Form.Group>
    </Form>
  );
}
