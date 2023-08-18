import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';

function BasicExample() {
  return (
    <div className='nav1'>
      <Navbar expand="lg" className=" tech" >
        <Container className='first'>
          <Navbar.Brand className='first' href="#home">Stores</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="first1">
              <Nav.Link href="#home" className='turtle'>Home</Nav.Link>
              <Nav.Link href="#link"className='turtle'>Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='turtle'>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Form className='small'>
        <Row className='blue' >
          <Col>
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
          </Col>
          <Col >
            <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
              Username
            </Form.Label>
            <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                id="inlineFormInputGroupUsername"
                placeholder="Username"
              />
            </InputGroup>
          </Col>
          <Col>
            <Form.Check
              type="checkbox"
              className='rembember'
              id=""
              label="Remember me"
            />
          </Col>
          <Col >
            <Button className='button10' type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default BasicExample;


