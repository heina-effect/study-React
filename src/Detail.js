import React, {useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
function Detail(props) {
    
    let {id} = useParams();
    let history = useHistory(); //방문기록을 다 저장해놓는 object
    let 찾은상품 = props.shoes.find(function(상품){
      return 상품.id = id
    });
    
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{찾은상품.title}</h4>
              <button className="btn btn-danger">주문하기</button> 
              <button className="btn btn-danger">장바구니</button> 
              <button className="btn btn-danger" onClick={ ()=>{ 
                  history.push('/');
               } }>뒤로가기</button> 
            </div>
          </div>
        </div> 
    )
}

export default Detail;