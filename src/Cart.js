import React from "react";
import {Table} from "react-bootstrap"
import { connect, useDispatch, useSelector } from "react-redux";
import './Detail.scss'

function Cart (props){

  let state = useSelector((state)=> state);
  console.log(state.reducer);
  let dispatch = useDispatch();

  return (
      <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
          {state.reducer.map((e,i) => {
            return (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.quan}</td>
                  <td>
                    <button onClick={()=>{ dispatch({type : '수량증가', 데이터 : e.id}) }}>+</button>
                    <button onClick={()=>{ dispatch({type : '수량감소', 데이터 : e.id}) }}>-</button>
                  </td>
                </tr>
              )
            })
          }
      </Table>
      { props.alert열렸니 === true 
      ? (<div className="my-alert-red">
      <p>지금 구매하시면 신규할인 20%</p>
      <button onClick={()=>{ props.dispatch({type : 'alert닫기'})}}>닫기</button>
      </div>)
      : null
        
      
      
      }
    </div>
  )
}

// function state를props화(state){ //redux store 데이터 가져와서 props로 변환해주는 함수
//   return{
//     state : state.reducer,
//     alert열렸니 : state.reducer2
//   }
// }
// export default connect(state를props화)(Cart)

export default Cart;