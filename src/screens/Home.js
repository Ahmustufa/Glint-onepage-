import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, FormControl, Image, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap";
import "../screenStyles/Home.css";
import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Sidebardata } from "../components/Sidebardata";
const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="bg-home">
      {/* <Navbar bg="dark" className="nav" expand={false} fixed="top">
  <Container fluid>
    <Navbar.Brand href="#" className="logo"><Image
              className="glint-logo m-1"
              src="data:image/webp;base64,UklGRnYDAABXRUJQVlA4TGkDAAAv7UATEPdAmG1Uf6DTu+cUBAJJXPt7LRBI8tufZ4EAYcF/pAQJ/qNYAQO0BIBpYlsJPdJO79f97/MpiQzg+4zo/wTA/9RbsDbEuxQ1Hpp8iwKeq+0Gbdiq8u2pqgntwiQK1mpERGsdxXwRIbOFkJnWJJNFvnJUHsFwwoIU0ihuqHaHXLscxePFPi1BYj5Q8dihTV0ZThgFMh+HFPbpSkeBE1cia+xWUT+FoWEhCLs2pRcIbXEdqsPOVewFTIuHZagG+6deIJwogmXIGh/R9wIlGEQTCixDNfiYqZcRP1g1+JAqwaIZlLZEKaVIzoioDIsWUNZHaC2bZekMi7ahaKjALr7NVFi0qiRsAdFiG0yFVXMoSCBO6shXGFcmZzWiso7yiBLyVYYLs/mPB/4FhMwWZNJR8QqbNVUWXp4u0zyV4dJqEAOMqjgUDHUsG7JVhour2WBUpFBUp6FoXoTHHIJH8W0gEdkBpuXxQhqHYxmYlsdLt1FUZKdpGbw4D2JjWZjW5WYQjpWWBWkMimNgXdQQMnJpYXAbwcYq89OeUopkJMyRPebY1nwJcTTMziQ4LZaH9eCUA71ajpegi9NgAjQTL46HJPBiGssGTGKFAShOnBsB23DsAJCbpqaBnzjmXmwCYBh4L0CSbowVScOxHJqZF6mjCzMLIjAczzEzoykQB+vNSax4c4DlBPiLZzlYbg6x/M0pLFXuDRgOupuzsXC7N6BZKt8bYqGut6ZqFpp6Z2Djocl34uX1mQGWhyrKpcV6/9n3ff/7fG4qiofoqkz1uChZ6OVvP/9ogU0CFVVeIYWrQjJv//bWrxbwEojKx6a6OZRcBlUlXv7t7R8t1YggorK0pZQieYPCEzMMNPWguNrwuzP/PTdANUIdTsxxUIWUyCHS2dvO/mqBrFaLWOfm7Jv3rwmyeggP88piWE7+ePtzE1TzAAQTAy0WTnbB1zaotjcVYWokprsBoL5shblVLYXx6EcA+Fn3owi484Eo5o8+eb8CUKkXV2B+4KWwHjzz3iUAiu/BJhCcEXipdABfnD+QLv4qn0B0SuBFdIbjp1/GixhAIS1nqIDwnCAqlqIK5y+/Te9wbSYroBwVkJ8UVNJNmio0P32d/b1Ah4mCteo/1jqKGRY1kzWIaB1l4D9//uz73/c73HMA"
            ></Image></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Navigation</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar> */}
        <Row className="mb-5">
          <Col className="mb-5" md={10}>
            <Image
              className="glint-logo m-4"
              src="data:image/webp;base64,UklGRnYDAABXRUJQVlA4TGkDAAAv7UATEPdAmG1Uf6DTu+cUBAJJXPt7LRBI8tufZ4EAYcF/pAQJ/qNYAQO0BIBpYlsJPdJO79f97/MpiQzg+4zo/wTA/9RbsDbEuxQ1Hpp8iwKeq+0Gbdiq8u2pqgntwiQK1mpERGsdxXwRIbOFkJnWJJNFvnJUHsFwwoIU0ihuqHaHXLscxePFPi1BYj5Q8dihTV0ZThgFMh+HFPbpSkeBE1cia+xWUT+FoWEhCLs2pRcIbXEdqsPOVewFTIuHZagG+6deIJwogmXIGh/R9wIlGEQTCixDNfiYqZcRP1g1+JAqwaIZlLZEKaVIzoioDIsWUNZHaC2bZekMi7ahaKjALr7NVFi0qiRsAdFiG0yFVXMoSCBO6shXGFcmZzWiso7yiBLyVYYLs/mPB/4FhMwWZNJR8QqbNVUWXp4u0zyV4dJqEAOMqjgUDHUsG7JVhour2WBUpFBUp6FoXoTHHIJH8W0gEdkBpuXxQhqHYxmYlsdLt1FUZKdpGbw4D2JjWZjW5WYQjpWWBWkMimNgXdQQMnJpYXAbwcYq89OeUopkJMyRPebY1nwJcTTMziQ4LZaH9eCUA71ajpegi9NgAjQTL46HJPBiGssGTGKFAShOnBsB23DsAJCbpqaBnzjmXmwCYBh4L0CSbowVScOxHJqZF6mjCzMLIjAczzEzoykQB+vNSax4c4DlBPiLZzlYbg6x/M0pLFXuDRgOupuzsXC7N6BZKt8bYqGut6ZqFpp6Z2Djocl34uX1mQGWhyrKpcV6/9n3ff/7fG4qiofoqkz1uChZ6OVvP/9ogU0CFVVeIYWrQjJv//bWrxbwEojKx6a6OZRcBlUlXv7t7R8t1YggorK0pZQieYPCEzMMNPWguNrwuzP/PTdANUIdTsxxUIWUyCHS2dvO/mqBrFaLWOfm7Jv3rwmyeggP88piWE7+ePtzE1TzAAQTAy0WTnbB1zaotjcVYWokprsBoL5shblVLYXx6EcA+Fn3owi484Eo5o8+eb8CUKkXV2B+4KWwHjzz3iUAiu/BJhCcEXipdABfnD+QLv4qn0B0SuBFdIbjp1/GixhAIS1nqIDwnCAqlqIK5y+/Te9wbSYroBwVkJ8UVNJNmio0P32d/b1Ah4mCteo/1jqKGRY1kzWIaB1l4D9//uz73/c73HMA"
            ></Image>
            </Col>
            <Col className="nav" md={2}>
            <div className="navbar">
              <Link to={"/"} className="menu-bars">
               <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
              </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} />
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <Link to={"/"} className="menu-bars">
                  <FontAwesomeIcon icon={faTimes} />
                </Link>
              </li>
              {Sidebardata.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            
          </Col>
        </Row>

        <Container className="glint-container">
          <Row>
            <Col sm={12}>
              <p className="glint-p">
                <b>WELCOME TO GLINT</b>
              </p>
              <h1 className="glint-h1 mb-3">
                We are a creative group <br /> of people who design <br />
                influential brands and <br /> digital experiences.
              </h1>

              <Row>
                <Col className="glint-col">
                  <Button
                    variant="outline-light"
                    className="px-5 py-3 mx-2 glint-button1"
                  >
                    START A PROJECT
                  </Button>

                  <Button
                    variant="outline-light"
                    className="px-5 py-3 mx-2 glint-button2"
                  >
                    MORE ABOUT US
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="brand-icons"></div>
      </div>

      <div className="bg-home1"></div>
    </>
  );
};

export default Home;

{
  /* <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faBehance} />
        <FontAwesomeIcon icon={faDribbble} /> */
}
