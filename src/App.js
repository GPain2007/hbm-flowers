import "./App.css";
import img from "./images/logo.png";
import "typeface-glacial-indifference";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <Container
      fluid
      className="page"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <Row className="hbc-row">
        <Col className="">
          <div className="florist-text">Florist</div>{" "}
          <Row>
            <Col>
              <div className="subtitle-text"> Something Big is Coming Soon</div>
            </Col>
          </Row>
          <div className="links-text">
            In the meantime you can reach out on Instagram:{" "}
          </div>
          <div className="hbm-link">
            <a
              style={{ textDecoration: "none" }}
              className="links-text"
              href="https://www.instagram.com/hbm_flowercity"
              target="_blank"
            >
              @hbm_flowercity
            </a>
            or by email at{" "}
            <a
              style={{ textDecoration: "none" }}
              className="links-text"
              href="mailto:hbmflowercity@gmail.com"
              target="_blank"
            >
              hbmflowercity@gmail.com
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
