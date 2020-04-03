import React, { FunctionComponent } from 'react';
import {
  Navbar,
  Nav,
  FormControl,
  Button,
  Form,
  InputGroup,
} from 'react-bootstrap';

const Header: FunctionComponent = () => {
  return (
    <Navbar className="main-header navbar navbar-expand navbar-white navbar-light">
      <Nav className="navbar-nav">
        <Nav.Link
          data-widget="pushmenu"
          className="nav-item d-none d-sm-inline-block"
          href="#"
        >
          <i className="fas fa-bars"></i>
        </Nav.Link>
        {/* <Nav.Link className="nav-item d-none d-sm-inline-block" href="#home">
          Home
        </Nav.Link>
        <Nav.Link className="nav-item d-none d-sm-inline-block" href="#home">
          Home
        </Nav.Link>
        <Nav.Link className="nav-item d-none d-sm-inline-block" href="#home">
          Home
        </Nav.Link> */}
      </Nav>

      {/* <Form inline className="ml-3">
        <InputGroup className="input-group-sm">
          <FormControl
            className="form-control-navbar"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Append>
            <Button className="btn btn-navbar" type="submit">
              <i className="fas fa-search"></i>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form> */}
    </Navbar>
  );
};

export default Header;
