import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { Nav, Card } from 'react-bootstrap';
import styled from 'styled-components'
import './Detail.scss'
import { 재고context } from './App.js'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

// detail페이지 들어가면 localStorage 있는 항목을 꺼냄
// null 이 나오거나 []가 나오거나 ,
// []가 나오면 거기에 url파라미터 id부분을 push()함 
// 중복된다면 추가하지 않는다.

function Detail(props) {

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

  let box = styled.div`padding : 20px;`;
  let title = styled.h4`color : ${props => props.색상}`;
  
  let story = [];
  localStorage.setItem('product', JSON.stringify({ id : `${ findProduct.id }`}))
  let getLocal = localStorage.getItem('product')
  let parseLocal = JSON.parse(getLocal)
  story.push(parseLocal);

  for(var i = 0; i <getLocal.length; i++){
    // if()
  }

  return (
    <div className="container">
      {getLocal}
      {console.log(parseLocal)}
      {console.log(story)}
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

        <Story getLocal={getLocal} findProduct={findProduct} />


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

  let parseLocal = JSON.parse(props.getLocal)

  if (props.getLocal) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Title>관심가진 상품</Card.Title>
        <Card.Body>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Text>{parseLocal.title}</Card.Text>
        </Card.Body>
      </Card>)
  }
  else {
    return null
  }
}
export default connect(state를props화)(Detail)