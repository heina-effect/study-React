import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import {Nav} from 'react-bootstrap';
import styled from 'styled-components'
import './Detail.scss'
import {재고context} from './App.js'
import { CSSTransition } from 'react-transition-group';

function Detail(props) {
  
  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState('');

  let [누른탭,누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false)
  let 재고 = useContext(재고context);

  useEffect(()=>{
    let 타이머 = setTimeout(()=>{
      alert변경(false);
    },2000);
    return ()=>{ clearTimeout(타이머) }
  },[alert]);

  let {id} = useParams();
  let history = useHistory(); //방문기록을 다 저장해놓는 object
  // let 찾은상품 = props.shoes.find(function(상품){
    //   return 상품.id = id
    // });
  let 찾은상품 = props.shoes.find(x => x.id == id)
  
  let 박스 = styled.div`padding : 20px;`;
  let 제목 = styled.h4`color : ${props => props.색상}`;

  return (
    <div className="container">

      <박스>
        <제목 className="red">Detail</제목>
      </박스>
      {inputData}
      <input onChange={(e)=>{ inputData변경(e.target.value)}}/>
      
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
          <img src={`https://codingapple1.github.io/shop/shoes${찾은상품.id+1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>

          <Info 재고={props.재고}></Info>

          <button className="btn btn-danger" onClick={()=>{
            props.재고변경([9,10,11])
          }}>주문하기</button> 
          <button className="btn btn-danger" onClick={ ()=>{ 
              history.push('/');
            } }>뒤로가기</button> 
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false); 누른탭변경(0)}}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false); 누른탭변경(1) }}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>
      
      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경} /> 
      </CSSTransition>
      

    </div> 
  )
}

function TabContent(props){

  useEffect(()=>{
    props.스위치변경(true)
  })

  if(props.누른탭 === 0){
    return <div>0번째 내용입니다.</div>
  }else if(props.누른탭 === 1){
    return <div>1번째 내용입니다.</div>
  }else if(props.누른탭 === 2){
    return <div>2번째 내용입니다.</div>
  }
}


function Info(props){
  return(
    <p>재고 : {props.재고[0]}</p>
  )
}

export default Detail;