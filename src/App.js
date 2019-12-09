import React from "react";
import Background from "./images/asset2.png";
import {
  Badge,
  Image,
  Col,
  Button,
  Form,
  Row,
  Container
} from "react-bootstrap";
import BaloonImage from "./images/asset1-cropped.jpg";
import RegisterForm from "./Components/RegisterForm.js";

import "./App.css";
function App() {
  return (
    <div>
      <Container
        style={{
          minWidth: "500px",
          width: "70%",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-40%)"
        }}
      >
        <Row style={{ position: "relative" }} noGutters>
          <Col sm={5}>
            <div
              className="baloon-image-bacground"
              style={{
                minWidth: "200px",
                float: "left",
                width: "100%",
                position: "absolute",
                height: "100%",
                borderRadius: "25px 0px 0px 25px",
                topMargin: "40px"
              }}
            >
              <Container
                style={{ width: "80%", float: "left", marginTop: "30px" }}
              >
                <h4>REDIFINING MOBILE ADVERTISEMENT</h4>
                <p />
                <p />

                <p style={{ marginTop: "30px", marginBottom: "1px" }}>
                  Please use this form to register.
                </p>
                <p style={{ marginTop: "5px" }}>
                  If you are a member, please <a href="">login</a>.
                </p>
              </Container>
            </div>
            {/*<Image src={BaloonImage} style={{float:'left', margin:'0',width: '100%' ,position: 'absolute',height: '100%',borderRadius: '25px 0px 0px 25px'}} className='img-maintain-ratio' fluid>*/}
          </Col>
          <Col
            sm={7}
            style={{
              borderRadius: "0px 25px 25px 0px",
              backgroundColor: "white"
            }}
          >
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
