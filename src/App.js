/* eslint-disable */
import React, {useContext, useState} from 'react';
import {Navbar, Container, Nav, Button, Spinner} from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
import Banner from'./Banner.js';
import Detail from './Detail.js'
import Data from './data.js'
import axios from 'axios';
import Cart from './Cart.js'

export let 재고context = React.createContext(); //범위 생성 문법

function App() {

  let [shoes, shoes변경] = useState(Data);
  let [modal, modal변경] = useState(false);
  let [spiner, spiner변경] = useState(true);
  let [재고, 재고변경] = useState([10,11,12]);

  return (

    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" href="#home">A+ shop</Navbar.Brand>
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

            {/* 값을 공유할 html */}
            <재고context.Provider value={재고}>
              <div className="row">
                {
                  shoes.map((a,i)=>{
                    return <Card shoes={shoes[i]} i={i} key={i}/>
                    // return <Card shoes={a}/>
                  })
                }
              </div>
            </재고context.Provider>

            <button className="btn btn-primary" onClick={()=>{
              {
                spiner === true ?
                <Spinner animation="border" variant="dark" /> : null
              }
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                spiner === false;
                var newData = result.data;
                shoes변경([...shoes, ...newData]);
              })
              .catch(()=>{
                spiner === false;
                console.log('실패했어요!')
              });
            }}>더보기</button>
          </div>
        </Route>

        <Route path="/Detail/:id" >

          <재고context.Provider value={재고}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
          </재고context.Provider>
          
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>
        
        <Route path="/:id">
            <div>
              잘못된경로입니다.
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
          <Button variant="primary">Save nges</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

function Card(props){

  //hook 사용하기 useContext(범위이름)
  let 재고 = useContext(재고context);

  return(
    <div>
      <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1)+ '.jpg'} width="100%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content} & {props.shoes.price}</p>
      </div>
      <Test/>
    </div>
  )
}

function Test(){

  let 재고 = useContext(재고context);

  return(
    <p>재고는 : {재고[0]}</p>
  )
}

export default App;
