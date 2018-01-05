import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./index.less"
import {fetchRecords} from "../../actions"

class ConsumeRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch( fetchRecords("u_456")); //fixme: test api request
  }

  renderDetail(key){
    return (
      <tbody key = {key}>
        <tr>
          <th className="thNormal">1</th>
          <th className="thNormal">2</th>
          <th className="thNormal">3</th>
          <th className="thNormal">2011-11-11</th>
        </tr>
      </tbody>
    );
  }

  render() {
    const {consumeRecords} = this.props;
    console.log("consumeRecords", consumeRecords);
    let data = [1,2,3,4,5];
    //
    return (
      <table className="recordTable">
        <caption>详细记录</caption>
        <tbody key="0">
          <tr>
            <th className="thHeader">学生ID</th>
            <th className="thHeader">奖励类型</th>
            <th className="thHeader">数量</th>
            <th className="thHeader">奖励时间</th>
          </tr>
        </tbody>
        { data.map( (v) => this.renderDetail(v) )}
      </table>
    );
  }
}

 export default connect((state, ownProps) => {
   const { consumeRecords} = state;
   return {
     consumeRecords
   };
 })(ConsumeRecord);
