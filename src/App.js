/* eslint-disable */
import React, { useContext, useState, lazy, Suspense, useReducer } from 'react';
import { Navbar, Container, Nav, Button, Spinner } from 'react-bootstrap';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Banner from './Banner.js';
import Footer from './Footer.js';
import SnsCard from './SnsCard.js';
import Login from './login.js';
import Register from './register.js';
import Data from './data.js'
import axios from 'axios';

let Detail = lazy(() => { return import('./Detail.js') });
let Cart = lazy(() => { return import('./Cart.js') });

export let 재고context = React.createContext(); //범위 생성 문법

function App() {

  let [shoes, setShoes] = useState(Data);
  let [modal, setModal] = useState(false);
  let [spiner, setSpiner] = useState(true);
  let [inventory, setInventory] = useState([10, 11, 12]);

  return (

    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" href="#home">A+ shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/Cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/login">login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <main style={{flex : '1'}}>

        <Switch>
          <Route exact path="/">

            <Banner />

            <div className="container mt-5">
              {/* 값을 공유할 html */}
              <재고context.Provider value={inventory}>
                <h3>BEST ITEMS</h3>
                <p>A+ ONLINE SHOP</p>
                <div className="row">
                  {
                    shoes.map((a, i) => {
                      return <Card shoes={shoes[i]} i={i} key={i} />
                      // return <Card shoes={a}/>
                    })
                  }
                </div>
              </재고context.Provider>
              
              {/* 버튼 클릭시 상품 가져오기 */}
              <button className="btn btn-dark" onClick={() => {
                {
                  spiner === true ?
                    <Spinner animation="border" variant="dark" /> : null
                }
                axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result) => {
                    spiner === false;
                    var newData = result.data;
                    setShoes([...shoes, ...newData]);
                  })
                  .catch(() => {
                    spiner === false;
                    console.log('실패했어요!')
                  });
              }}>MORE</button>
            </div>
            
            <SnsCard/>

          </Route>

          <Route path="/Detail/:id" >
            <재고context.Provider value={inventory}>
              <Suspense fallback={<div>로딩중이에요</div>}>
                <Detail shoes={shoes} inventory={inventory} setInventory={setInventory} />
              </Suspense>
            </재고context.Provider>
          </Route>

          <Route path="/cart">
            <Suspense fallback={<div>로딩중이에요</div>}>
              <Cart></Cart>
            </Suspense>
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <Route path="/:id">
            <div>
              잘못된경로입니다.
            </div>
          </Route>
        </Switch>

      </main>
      
      <Footer />
      {/* onClick={()=>{setModal(modal=true)}}
      { modal === true ? <Modal/> : null } */}
    </div>
  );
}
function Card(props) {

  //hook 사용하기 useContext(범위이름)
  let 재고 = useContext(재고context);
  let history = useHistory();
  let [isHover, setIsHover] = useState(false);

  return (
    <div className="col-md-4">
      <div onClick={() => { history.push('/detail/' + props.shoes.id) }}>
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="100%" />
        <h4>{props.shoes.title}</h4>
        <p onMouseOver={()=>setIsHover(true)}
        onMouseOut={()=>setIsHover(false)}>
         {isHover ? '더보기' : props.shoes.content +" & "+ props.shoes.price} </p>
      </div>
    </div>
  )
}

function Test() {

  let 재고 = useContext(재고context);
  return (
    <p>재고는 : {재고[0]}</p>
  )
}

export default App;
