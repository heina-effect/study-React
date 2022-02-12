import React from "react";
import {Table} from "react-bootstrap"
import { connect } from "react-redux";

function Cart (props){
    return (
        <div>
        <Table responsive>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
            {props.state.map((e,i) => {
              return (
                  <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.quan}</td>
                    <td>Table cell</td>
                  </tr>
                )
              })
            }
        </Table>
      </div>
    )
}

function state를props화(state){ //redux store 데이터 가져와서 props로 변환해주는 함수
  return{
    state : state
  }

}
export default connect(state를props화)(Cart)

// export default Cart;