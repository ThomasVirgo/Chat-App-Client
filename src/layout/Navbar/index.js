import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div className="navbar">
      {/* Add form validation */}
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
            <Form.Select aria-label="Default select example">
              <option>Category</option>
              <option value="1">Dining</option>
              <option value="2">Events</option>
              <option value="3">Movies</option>
            </Form.Select>
          </Form>
          <Navbar.Brand href="/">Vibe</Navbar.Brand>
          <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">Latest Recommendations</Nav.Link>
            <Nav.Link href="#action1">Register</Nav.Link>
            <Nav.Link href="#action2">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
