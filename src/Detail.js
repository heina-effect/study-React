import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { Nav, Card } from 'react-bootstrap';
import styled from 'styled-components'
import './Detail.scss'
import { 재고context } from './App.js'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

function Detail(props) {
  //styled-components
  let box = styled.div`padding : 20px;`;
  let title = styled.h4`color : ${props => props.색상}`;

  let [alert, setAlert] = useState(true);
  let [clickTab, setClickTab] = useState(0);
  let [switchs, setSwitch] = useState(false)
  let 재고 = useContext(재고context);

  useEffect(() => {
    let 타이머 = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => { clearTimeout(타이머) }
  }, [alert]);

  let { id } = useParams();
  let history = useHistory(); //방문기록을 다 저장해놓는 object
  // let findProduct = props.shoes.find(function(상품){
  //   return 상품.id = id
  // });
  let findProduct = props.shoes.find(x => x.id == id)

  useEffect(() => {
    let localArray = localStorage.getItem('watched'); //["값"]

    if (localArray === null) { localArray = []; }
    else { localArray = JSON.parse(localArray); } //json형태로 변경['값']

    localArray.push(id); //['값','값']
    localArray = new Set(localArray);//중복제거 Set(1) {'1'}
    localArray = [...localArray];

    localStorage.setItem('watched', JSON.stringify(localArray));
  }, [])

  return (
    <div className="container">
      <box>
        <title className="red">Detail</title>
      </box>
      {
        alert === true ?
          <div className="my-alert-red">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>
          : null
      }
      {/* {재고} */}

      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${findProduct.id + 1}.jpg`} width="100%" />
        </div>

        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}</p>

          <Info inventory={props.inventory}></Info>

          <button className="btn btn-danger" onClick={() => {
            // props.setInventory([9,10,11])
            props.dispatch({ type: '항목추가', 데이터: { id: findProduct.id, name: findProduct.title, quan: 1 } });
            history.push('/cart');
          }}>주문하기</button>

          <button className="btn btn-danger" onClick={() => {
            history.push('/');
          }}>뒤로가기</button>
        </div>


      </div>

      <div className='watched-wrap'>
        {
          localStorage.getItem('watched') === null
            ? null
            : <Story shoes={props.shoes} />
        }
      </div>
        

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => { setSwitch(false); setClickTab(0) }}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => { setSwitch(false); setClickTab(1) }}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={switchs} classNames="wow" timeout={500}>
        <TabContent clickTab={clickTab} setSwitch={setSwitch} />
      </CSSTransition>

    </div>
  )
}

function TabContent(props) {

  useEffect(() => {
    props.setSwitch(true)
  })

  if (props.clickTab === 0) {
    return <div>0번째 내용입니다.</div>
  } else if (props.clickTab === 1) {
    return <div>1번째 내용입니다.</div>
  } else if (props.clickTab === 2) {
    return <div>2번째 내용입니다.</div>
  }
}


function Info(props) {
  return (
    <p>재고 : {props.inventory[0]}</p>
  )
}

function state를props화(state) { //redux store 데이터 가져와서 props로 변환해주는 함수
  return {
    state: state.reducer,
    alert열렸니: state.reducer2
  }
}

function Story(props) {
  let localArray = localStorage.getItem('watched');
  localArray = JSON.parse(localArray);
  return (
    <div>
      <h5 className="mt-5">내가 본 상품</h5>
      {localArray.map((id, index) => {
        return (
          <figure key={index}>
            <img variant="top" src={`https://codingapple1.github.io/shop/shoes${props.shoes[id].id + 1}.jpg`} width="100%" />
            <figcaption>{props.shoes[id].title}</figcaption>
          </figure>
        )
      })}
    </div>
  )
}
export default connect(state를props화)(Detail)