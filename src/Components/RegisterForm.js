import React, { Component } from "react";
import { Col, Image, Button, Form, Row, Container } from "react-bootstrap";
import GoogleIcon from "../images/google.png";
import AdludioStudioIcon from "../images/asset3.png";

const register_url = "";
class RegisterForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    nameLabelVisble: true,
    emailLabelVisible: true,
    passwordLabelVisible: true
  };

  submit = event => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
      email: event.target.email.value
    };
    console.log(data);
  };

  nameChanged = event => {
    if (event.target.value == "") this.setState({ nameLabelVisble: true });
    else this.setState({ nameLabelVisble: false });
  };

  emailChanged = event => {
    if (event.target.value == "") this.setState({ emailLabelVisible: true });
    else this.setState({ emailLabelVisible: false });
  };

  passwordChanged = event => {
    if (event.target.value == "") this.setState({ passwordLabelVisible: true });
    else this.setState({ passwordLabelVisible: false });
  };

  render() {
    return (
      <div style={{ color: "#5F5F5F" }}>
        <Container
          className="text-center"
          style={{
            height: "360px",
            width: "80%",
            marginBottom: "40px",
            marginTop: "15px"
          }}
        >
          <Row>
            <Col sm={1}>
              <Image
                src={AdludioStudioIcon}
                style={{ width: "90px", marginBottom: "13px" }}
              />
            </Col>
            <Col />
          </Row>

          <form onSubmit={this.submit}>
            <Row>
              <Col>
                <label className="title-label">Register</label>
              </Col>
            </Row>
            <Row>
              <Col>
                <label
                  className={
                    (this.state.nameLabelVisble
                      ? "hovering-label"
                      : "transparent-label") + " in-front"
                  }
                >
                  Full Name
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  id="username"
                  className="below"
                  onChange={this.nameChanged}
                  type="text"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label
                  className={
                    (this.state.emailLabelVisible
                      ? "hovering-label"
                      : "transparent-label") + " in-front"
                  }
                >
                  Email
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  id="email"
                  className="below"
                  onChange={this.emailChanged}
                  type="text"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label
                  className={
                    (this.state.passwordLabelVisible
                      ? "hovering-label"
                      : "transparent-label") + " in-front"
                  }
                >
                  Password
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  id="password"
                  className="below"
                  onChange={this.passwordChanged}
                  type="password"
                />
              </Col>
            </Row>
            <Button
              type="submit"
              className="small-space-vertical-margin text-center"
              style={{
                minWidth: "80px",
                fontSize: ".8em",
                backgroundColor: "#8D2786",
                width: "25%",
                borderRadius: "16px"
              }}
            >
              REGISTER
            </Button>
          </form>
          <button
            style={{
              minWidth: "180px",
              border: "0",
              color: "#5F5F5F",
              fontSize: ".8em",
              height: "30px",
              width: "60%",
              backgroundColor: "white"
            }}
            className="box-shadow--2dp"
          >
            <Image
              style={{ float: "left", width: "22px", height: "20px" }}
              src={GoogleIcon}
              fluid
            />
            Sign in with Google
          </button>
        </Container>
      </div>
    );
  }
}

export default RegisterForm;
