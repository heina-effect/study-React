import React, {useState} from 'react';
import 중요데이터 from './data.js'
import logo from './logo.svg';
import main1 from './img/common1.jpg';
import main2 from './img/common2.jpg';
import main3 from './img/common3.jpg';
import {Navbar, Container, Nav, Carousel, Button } from 'react-bootstrap';
import './App.css';

function App() {

  let [shoes, shoes변경] = useState(중요데이터);
  let [modal, modal변경] = useState(false);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">A+ shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Carousel fade className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={main1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={main2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={main3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <div className="row">
        <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            <h4 onClick={()=>{modal변경(modal=true)}}>{shoes[0].title}</h4>
            <p>{shoes[0].content}</p>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].content}</p>
            <p>{shoes[2].price}</p>
          </div>
        </div>
      </div>
      { modal === true ? <Modal/> : null }
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}
export default App;
