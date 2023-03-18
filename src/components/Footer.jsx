import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={6} lg={4}>
          <h3>Site map</h3>
          <ul>
            <li>
              <Link to="/content">Sports Content</Link>
            </li>
            <li>
              <Link to="/create">Create Sport Card</Link>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <h3>Development detail</h3>
          <p>
            Copyright &copy; {new Date().getFullYear()} Jaime Daza. This site is
            open source.
          </p>
          <h4>Social Media</h4>
          <ul>
            <li>
              <a
                href="http://www.linkedin.com/in/DazaTovarJ"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="http://www.github.com/DazaTovarJ"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="http://www.instagram.com/DazaTovarJ"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="http://www.twitter.com/DazaTovarJ"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={12} lg={4}>
          <h4>About this site</h4>
          <p>
            React Sports is a site that allows you to explore the world of
            sports and contribute to its awareness.
          </p>
          <p>
            This site is powered by React, and its development aims to be a
            demonstration of what you can do with this library. Check out and
            start learning today at
            <a href="http://www.reactjs.org" target="_blank" rel="noreferrer">
              ReactJS.org
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
