import React, { Component } from "react";
import logo from "./logo.png";
import compass from "./compass.png";
import student from "./student.png";
import cloud from "./cloud.png";
import GitHubLogin from "../GitHubLogin/GitHubLogin";
import Pfaq from "../Pfaq/Pfaq";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/ButtonToolbar";
import ButtonToolbar from "react-bootstrap/Button";
import "./Home.css";

const onSuccess = response => {
  console.log("In onSuccess: " + JSON.stringify(response));
};
import Header from "../Header/Header";

const onFailure = response => console.error("The error: " + response);
const redirectUri = "http://localhost:3000/auth/github/callback";
import "whatwg-fetch";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: []
    };
  }

  componentDidMount() {
    fetch("/api/counters")
      .then(res => res.json())
      .then(json => {
        this.setState({
          counters: json
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="jumbotron">
            <Image src={logo} fluid />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="mt-5">
                  MongoDB is part of the GitHub Student Developer Pack
                </h1>
                <p className="lead">
                  Learn more about the{" "}
                  <a href="https://education.github.com/pack">
                    GitHub Student Developer Pack
                  </a>
                </p>
                <p>
                  MongoDB is a general purpose, document-based, distributed
                  database built for modern application developers and for the
                  cloud era. No database makes you more productive.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 text-center">
                <Image width="100" src={compass} fluid thumbnail></Image>
                <div className="benefitHeader">MongoDB Compass</div>
                <div className="benefit text-left">
                  MongoDB Compass is the GUI for MongoDB. Compass allows you to
                  analyze and understand the contents of your data without
                  formal knowledge of MongoDB query syntax. In addition to
                  exploring your data in a visual environment, you can also use
                  Compass to optimize query performance, manage indexes, and
                  implement document validation.
                </div>{" "}
                <br></br>
                <ButtonToolbar variant="dark" size="sm">
                  <Button variant="dark" size="sm">
                    Learn More
                  </Button>
                </ButtonToolbar>
              </div>
              <div className="col-lg-4 text-center">
                <Image width="100" src={student} fluid thumbnail></Image>
                <div className="benefitHeader">
                  MongoDB University On-Demand
                </div>
                <div className="benefit text-left">
                  All of our MongoDB University training courses - from beginner
                  to advanced - are completely free for anyone and everyone. As
                  part of the on-demand program you are able to take the courses
                  at your leisure rather than having to adhere to our normal
                  course schedule.
                </div>{" "}
                <br></br>
                <ButtonToolbar variant="dark" size="sm">
                  <Button variant="dark" size="sm">
                    Learn More
                  </Button>
                </ButtonToolbar>
              </div>
              <div className="col-lg-4 text-center">
                <Image width="100" src={cloud} fluid thumbnail></Image>
                <div className="benefitHeader">
                  $200 in MongoDB Atlas Credits
                </div>
                <div className="benefit text-left">
                  MongoDB Atlas is the global cloud database service for
                  applications built on MongoDB. You can easily deploy fully
                  managed databases within minutes to get started. If you scale
                  up, MongoDB Atlas’ automation and proven best practices
                  guarantee availability, scalability, and compliance with the
                  most demanding data security and privacy standards.{" "}
                </div>
                <br></br>
                <ButtonToolbar variant="dark" size="sm">
                  <Button variant="dark" size="sm">
                    Learn More
                  </Button>
                </ButtonToolbar>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center signup">
                <ul className="list-unstyled">
                  <GitHubLogin
                    clientId="ecf018efd0f29df6ed0e"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    redirectUri={redirectUri}
                  />
                </ul>
              </div>
            </div>
            <div className="row">
              <Pfaq></Pfaq>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
