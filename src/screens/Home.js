import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
} from "react-bootstrap";
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
import {
  faBars,
  faTimes,
  faBrush,
  faVectorSquare,
  faBullhorn,
  faGlobe,
  faBox,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { Sidebardata } from "../components/Sidebardata";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Work from "./Work";

const Home = () => {
  return (
    <>
      <div className="bg-home">
        <Row className="mb-5">
          <Col md={12}>
            <Row className="mb-5">
              <Col md={12} className="mb-5">
                <Navbar className="mt-2" expand={false} fixed="top">
                  <Container fluid>
                    <Navbar.Brand href="#" className="logo">
                      <Image
                        className="glint-logo m-1"
                        src="data:image/webp;base64,UklGRnYDAABXRUJQVlA4TGkDAAAv7UATEPdAmG1Uf6DTu+cUBAJJXPt7LRBI8tufZ4EAYcF/pAQJ/qNYAQO0BIBpYlsJPdJO79f97/MpiQzg+4zo/wTA/9RbsDbEuxQ1Hpp8iwKeq+0Gbdiq8u2pqgntwiQK1mpERGsdxXwRIbOFkJnWJJNFvnJUHsFwwoIU0ihuqHaHXLscxePFPi1BYj5Q8dihTV0ZThgFMh+HFPbpSkeBE1cia+xWUT+FoWEhCLs2pRcIbXEdqsPOVewFTIuHZagG+6deIJwogmXIGh/R9wIlGEQTCixDNfiYqZcRP1g1+JAqwaIZlLZEKaVIzoioDIsWUNZHaC2bZekMi7ahaKjALr7NVFi0qiRsAdFiG0yFVXMoSCBO6shXGFcmZzWiso7yiBLyVYYLs/mPB/4FhMwWZNJR8QqbNVUWXp4u0zyV4dJqEAOMqjgUDHUsG7JVhour2WBUpFBUp6FoXoTHHIJH8W0gEdkBpuXxQhqHYxmYlsdLt1FUZKdpGbw4D2JjWZjW5WYQjpWWBWkMimNgXdQQMnJpYXAbwcYq89OeUopkJMyRPebY1nwJcTTMziQ4LZaH9eCUA71ajpegi9NgAjQTL46HJPBiGssGTGKFAShOnBsB23DsAJCbpqaBnzjmXmwCYBh4L0CSbowVScOxHJqZF6mjCzMLIjAczzEzoykQB+vNSax4c4DlBPiLZzlYbg6x/M0pLFXuDRgOupuzsXC7N6BZKt8bYqGut6ZqFpp6Z2Djocl34uX1mQGWhyrKpcV6/9n3ff/7fG4qiofoqkz1uChZ6OVvP/9ogU0CFVVeIYWrQjJv//bWrxbwEojKx6a6OZRcBlUlXv7t7R8t1YggorK0pZQieYPCEzMMNPWguNrwuzP/PTdANUIdTsxxUIWUyCHS2dvO/mqBrFaLWOfm7Jv3rwmyeggP88piWE7+ePtzE1TzAAQTAy0WTnbB1zaotjcVYWokprsBoL5shblVLYXx6EcA+Fn3owi484Eo5o8+eb8CUKkXV2B+4KWwHjzz3iUAiu/BJhCcEXipdABfnD+QLv4qn0B0SuBFdIbjp1/GixhAIS1nqIDwnCAqlqIK5y+/Te9wbSYroBwVkJ8UVNJNmio0P32d/b1Ah4mCteo/1jqKGRY1kzWIaB1l4D9//uz73/c73HMA"
                      ></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle
                      aria-controls="offcanvasNavbar"
                      className="bar px-2 me-2"
                    >
                      MENU
                      <FontAwesomeIcon icon={faBars} className="mx-2" />
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                      id="offcanvasNavbar"
                      aria-labelledby="offcanvasNavbarLabel"
                      placement="end"
                      className="side"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                          Navigation
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                          <Nav.Link href="#action1" className="direct">Home</Nav.Link>
                          <Nav.Link href="#action2" className="direct">About</Nav.Link>
                          <Nav.Link href="#action2" className="direct">Services</Nav.Link>
                          <Nav.Link href="#action2" className="direct">Works</Nav.Link>
                          <Nav.Link href="#action2" className="direct">Clients</Nav.Link>
                          <Nav.Link href="#action2" className="direct">Contact</Nav.Link>
                          <NavDropdown
                            className="direct"
                            title="Socials"
                            id="offcanvasNavbarDropdown"
                          > 
                            <NavDropdown.Item href="#action3">
                              <FontAwesomeIcon icon={faFacebookF} /> Facebook
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                              <FontAwesomeIcon icon={faInstagram} /> Instagram
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                              <FontAwesomeIcon icon={faTwitter} /> Twitter
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                              <FontAwesomeIcon icon={faBehance} /> Behance
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                              <FontAwesomeIcon icon={faDribbble} /> Dribble
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
                </Navbar>
              </Col>
            </Row>

            <Container className="glint-container">
              <Row>
                <Col sm={12}>
                  <p className="glint-p">
                    <b>WELCOME TO GLINT</b>
                  </p>
                  <h1 className="glint-h1 mb-3">
                    <b>
                      
                      We are a creative group <br /> of people who design <br />
                      influential brands and <br /> digital experiences.
                    </b>
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
          </Col>
        </Row>
      </div>

      <div className="bg-home1">
        <Row>
          <Row>
          <Col></Col>
          <Col md={8} className="home1-row mt-5">
            <p className="home1-p">
              <b>HELLO THERE</b>
            </p>
            <h1 className="home1-h1">
              <b>We Are Glint</b>
            </h1>
            <hr />
            <p className="p4 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt.
            </p>
          </Col>
          <Col></Col>
          </Row>
          <Row className="mt-4">
            <Col md={2}> </Col>
            <Col md={2} className="Col-counter">
              <div className="div-counter">
                <p className="p5">
                  <b>127</b>
                </p>
                <p className="p6">
                  <b>Awards Received</b>
                </p>
              </div>

              <div className="v" />
            </Col>

            <Col md={2} className="Col-counter">
              <div className="div-counter">
                <p className="p5">
                  <b>1505</b>
                </p>
                <p className="p6">
                  <b>Cups of Coffee</b>
                </p>
              </div>

              <div className="v " />
            </Col>
            <Col md={2} className="Col-counter">
              <div className="div-counter">
                <p className="p5">
                  <b>109</b>
                </p>
                <p className="p6">
                  <b>Projects Completed</b>
                </p>
              </div>

              <div className="v" />
            </Col>

            <Col md={2} className="Col-counter">
              <div className="div-counter">
                <p className="p5">
                  <b>102</b>
                </p>
                <p className="p6">
                  <b>Happy Clients</b>
                </p>
              </div>
            </Col>

            <Col md={2} ></Col>
          </Row>
        </Row>
      </div>

      <Row className="mt-5">
        <Col md={12} className="mt-5">
          <h6 className="text-center" ><b>WHAT WE DO</b></h6>
          <h1 className="text-center hx" ><b>
            We’ve got everything you need to <br/>launch and grow your business
            </b> </h1>
        </Col>
      </Row >
      <Row className="my-5">
        <Col md={5} className="justify-content-center mx-auto">
          <Row>
            <Col md={1} className="justify-content-end ms-auto p-2 bd-highlight" >
              <p
                className="text-center my-auto px-2"
                style={{ display: "inline-block" }}
              >
                <FontAwesomeIcon className="text-center fs-3" icon={faBrush} />
              </p>
            </Col>
            <Col md={9}>
              <h1 className="" style={{ display: "inline-block" }}>
                Brand Identity
              </h1>
              <p className="">
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </Col>
          </Row>

     <Col md={1}></Col>
        </Col>
        <Col md={5} className="justify-content-center mx-auto">
          <Row>
            <Col md={1} className="justify-content-end ms-auto p-2 bd-highlight" >
              <p
                className="text-center my-auto px-2"
                style={{ display: "inline-block" }}
              >
                <FontAwesomeIcon className="text-center fs-3" icon={faVectorSquare} />
              </p>
            </Col>
            <Col md={9}>
              <h1 className="" style={{ display: "inline-block" }}>
              Illustration
              </h1>
              <p className="">
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </Col>
          </Row>

        </Col>
        <Col md={1}></Col>
      </Row>

      <Row className="my-5">
        <Col md={5} className="justify-content-center mx-auto">
          <Row>
            <Col md={1} className="justify-content-end ms-auto p-2 bd-highlight" >
              <p
                className="text-center my-auto px-2"
                style={{ display: "inline-block" }}
              >
                <FontAwesomeIcon className="text-center fs-3" icon={faBullhorn} />
              </p>
            </Col>
            <Col md={9}>
              <h1 className="" style={{ display: "inline-block" }}>
              Marketing
              </h1>
              <p className="">
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </Col>
          </Row>
          <Col md={1}></Col>
        </Col>
        <Col md={5} className="justify-content-center mx-auto">
          <Row>
            <Col md={1} className="justify-content-end ms-auto p-2 bd-highlight" >
              <p
                className="text-center my-auto px-2"
                style={{ display: "inline-block" }}
              >
                <FontAwesomeIcon className="text-center fs-3" icon={faGlobe} />
              </p>
            </Col>
            <Col md={9}>
              <h1 className="" style={{ display: "inline-block" }}>
              Web Design
              </h1>
              <p className="">
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </Col>
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>


      <Row className="my-5 ">
        <Col md={5} className="justify-content-center mx-auto">
          <Row>
            <Col md={1} className="justify-content-end ms-auto p-2 bd-highlight" >
              <p
                className="text-center my-auto px-2"
                style={{ display: "inline-block" }}
              >
                <FontAwesomeIcon className="text-center fs-3" icon={faBox} />
              </p>
            </Col>
            <Col md={9}>
              <h1 className="" style={{ display: "inline-block" }}>
              Packaging Design
              </h1>
              <p className="">
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </Col>
            
          </Row>
          <Col md={1}></Col>
     
        </Col>
        <Col md={5} className="justify-content-center mx-auto">
          <Row>
            <Col md={1} className="justify-content-end ms-auto p-2 bd-highlight" >
              <p
                className="text-center my-auto px-2"
                style={{ display: "inline-block" }}
              >
                <FontAwesomeIcon className="text-center fs-3" icon={faCode} />
              </p>
            </Col>
            <Col md={9}>
              <h1 className="" style={{ display: "inline-block" }}>
              Web Development
              </h1>
              <p className="">
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </p>
            </Col>
            
          </Row>

        
        </Col>
        <Col md={1}></Col>
       
      </Row>

   
    <Work/>
      
    </>
  );
};

export default Home;
