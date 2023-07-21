import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Navbar.css";

function OffcanvasExample() {
  const color = {
    color: "purple",
    fontSize:"1.5em"
  }

  const buttonStyle = {
    backgroundColor : "purple",
    color: "white"
  }

  const links =  {
    color: "black",
    fontWeight: "600"
  }
  return (
    <>
      
        <Navbar key="xl" bg="inverse" expand="xl" className="">
          <Container fluid>
            <Navbar.Brand  className='text-3xl' style={color} href="#"><em><strong>Glitz$Glams</strong></em></Navbar.Brand>
            <Navbar.Toggle aria-controls="xl" />
            <Navbar.Offcanvas
              id='#'
              aria-labelledby="#"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="lg">
                  Glitz$Glams
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Link style={links} href="#action1">Home</Nav.Link>
                  <Nav.Link style={links} href="#action2">Store</Nav.Link>
                  <NavDropdown style={links}
                  
                    title="Categories"
                    id=""
                  >
                    <NavDropdown.Item href="#action3">Men</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Women
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Children
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button style={buttonStyle} variant="">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
  );

  
}

export default OffcanvasExample;