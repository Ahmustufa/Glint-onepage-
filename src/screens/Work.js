import React from "react";
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
import "../screenStyles/Work.css";
const Work = () => {
  return (
    <>
      <Row>
        <Col md={12} className="heading">
          <h6 className="mt-5">
            <b>RECENT WORKS</b>
          </h6>
          <h1>
            <b>
              We love what we do, check out <br /> some of our latest works
            </b>
          </h1>
          <div className="d-flex justify-content-center">
            <hr />
          </div>
          {/* <Row className="mt-5">
              <Col>
                  <div className="d-flex justify-content-center">
                  <img className="image1" src="https://preview.colorlib.com/theme/glint/images/portfolio/xlady-shutterbug.jpg.pagespeed.ic.L78MPZ15Bu.webp"/>
                  <img className="image2" src="https://preview.colorlib.com/theme/glint/images/portfolio/xwoodcraft.jpg.pagespeed.ic.9Sgb2Cbm2k.webp"/>
                  </div>
                <Row>
                    <Col>
                    
            
              <img className="image3" src="https://preview.colorlib.com/theme/glint/images/portfolio/xthe-beetle.jpg.pagespeed.ic.SN25FoWyHG.webp"/>
                  <img className="image4" src="https://preview.colorlib.com/theme/glint/images/portfolio/xgrow-green.jpg.pagespeed.ic.IfG2gjDTOk.webp"/>
                    
                    </Col>
                </Row>
                  <img className="image5" src=""/>
                  <img className="image6" src=""/>
              </Col>
              
              
          </Row>
          <Row>
              <Col className="d-flex justify-content-center ">
                  <div className="div-img">
              <img className="image3" src="https://preview.colorlib.com/theme/glint/images/portfolio/xthe-beetle.jpg.pagespeed.ic.SN25FoWyHG.webp"/></div>
                  <img className="image4" src="https://preview.colorlib.com/theme/glint/images/portfolio/xgrow-green.jpg.pagespeed.ic.IfG2gjDTOk.webp"/>
              </Col>
          </Row> */}
          <Row className="">
            <Col>
              <div className="d-flex justify-content-center">
                <img
                  className="image1"
                  src="https://preview.colorlib.com/theme/glint/images/portfolio/xlady-shutterbug.jpg.pagespeed.ic.L78MPZ15Bu.webp"
                />
                <img
                  className="image2"
                  src="https://preview.colorlib.com/theme/glint/images/portfolio/xwoodcraft.jpg.pagespeed.ic.9Sgb2Cbm2k.webp"
                />
              </div>
            </Col>

            <Col>
              <div className="div-img d-flex justify-content-center">
                <img
                  className="image3"
                  src="https://preview.colorlib.com/theme/glint/images/portfolio/xthe-beetle.jpg.pagespeed.ic.SN25FoWyHG.webp"
                />
                <img
                  className="image4"
                  src="https://preview.colorlib.com/theme/glint/images/portfolio/xgrow-green.jpg.pagespeed.ic.IfG2gjDTOk.webp"
                />
              </div>
            </Col>
          </Row>
          
        </Col>
      </Row>
    </>
  );
};

export default Work;
