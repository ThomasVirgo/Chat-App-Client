import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { loadRestaurants } from "../../actions"

const NavigationBar = () => {

  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const updateLocation = (e) => {
    const input = e.target.value;
    setLocation(input);
  };

  const updateCategory = (e) => {
    const input = e.target.value;
    setCategory(input);
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    loadRestaurants(location);
  }

  return (
    <div className="navbar">
      {/* Add form validation */}
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" onChange={updateLocation}/>
            <Form.Select aria-label="Default select example" onChange={updateCategory} required>
              <option>Category</option>
              <option value="1">Dining</option>
              <option value="2">Gigs</option>
              <option value="3">Festivals</option>
              <option value="3">Comedies</option>
            </Form.Select>
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Brand href="/">Vibe</Navbar.Brand>
          <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/recommendations">Latest Recommendations</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
