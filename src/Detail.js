import React, {useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import styled from 'styled-components'
import './Detail.scss'

function Detail(props) {
    
    let {id} = useParams();
    let history = useHistory(); //방문기록을 다 저장해놓는 object
    // let 찾은상품 = props.shoes.find(function(상품){
    //   return 상품.id = id
    // });
    let 찾은상품 = props.shoes.find(x => x.id == id)

    let 박스 = styled.div`
      padding : 20px;
    `;
    let 제목 = styled.h4`
      color : ${props => props.색상}
    `;
    
    return (
        <div className="container">

          <박스>
            <제목 className="red">Detail</제목>
          </박스>

          <div className="my-alert-red">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>

          <div className="row">
            <div className="col-md-6">
              <img src={`https://codingapple1.github.io/shop/shoes${찾은상품.id+1}.jpg`} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{찾은상품.title}</h4>
              <p>{찾은상품.content}</p>
              <p>{찾은상품.price}</p>
              <button className="btn btn-danger">주문하기</button> 
              <button className="btn btn-danger" onClick={ ()=>{ 
                  history.push('/');
               } }>뒤로가기</button> 
            </div>
          </div>
        </div> 
    )
}

export default Detail;