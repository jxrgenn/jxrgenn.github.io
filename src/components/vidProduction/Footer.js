import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "../MailchimpForm";
import logo from "../../assets/img/black-sheep-blackbg.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* Logo column - always left aligned */}
          {/* <Col xs={12} md={6} className="text-start mb-4 mb-md-0">
            <img src={logo} alt="Logo" style={{ maxWidth: "200px" }} />
          </Col> */}

          {/* Social icons column - left on mobile, right on desktop */}
          <Col xs={12} md={6} className="text-start text-md-end">
            <div className="social-icon d-flex flex-wrap gap-3 justify-content-start justify-content-md-end">
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p className="mt-3 text-start text-md-end">Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}