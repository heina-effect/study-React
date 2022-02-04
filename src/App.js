/* eslint-disable */
import React, {useState} from 'react';
import Banner from'./Banner.js';
import Detail from './Detail.js'
import Data from './data.js'
import logo from './logo.svg';
import {Navbar, Container, Nav, Button } from 'react-bootstrap';
import './App.css';

import { Link, Route, Switch } from 'react-router-dom'

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [modal, modal변경] = useState(false);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">A+ shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Detail">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Banner/>
          <div className="container">
            <div className="row">
              {
                shoes.map((a,i)=>{
                  return <Card shoes={shoes[i]} i={i} key={i}/>
                  // return <Card shoes={a}/>
                })
              }
            </div>
          </div>
        </Route>

        <Route path="/Detail/:id" >
          <Detail shoes={shoes} />
        </Route>

        <Route path="/:id">
            <div>
              아무거나 적었을 때 이거 보여줘
            </div>
        </Route>
      </Switch>
  
      {/* onClick={()=>{modal변경(modal=true)}}
      { modal === true ? <Modal/> : null } */}
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

function Card(props){
  return(
    <div>
      <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1)+ '.jpg'} width="100%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content} & {props.shoes.price}</p>
      </div>
    </div>
  )
}

export default App;
