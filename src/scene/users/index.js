import React, { Component } from 'react';

import Square from '../../component/Square';
import {Link } from 'react-router'
import "./index.less"

export class Example1 extends Component {
  render() {
    return (
      <Square value="1" />
    );
  }
}

export class Example2 extends Component {
  render() {
    return (
      <Square value="2" />
    );
  }
}


export class Example extends Component {
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  render() {
    let {routeParams} = this.props;
    return (
      <Square value={routeParams.name} />
    );
  }
}

export default class UserList extends React.Component {
  render() {
    let data = {id:11 ,name: "shenl", age:23};
    return (
      <div className="user">
        <div className="user-leftPanel">
          <Link to="/user/Example1">家庭收支</Link>
          <Link to="/user/Example2">出游记录</Link>
          <Link to="/user/trainRecords">培训记录</Link>
          <Link to= {"/user/Example/" + data.id}>测试工具</Link>
        </div>
        <div className="user-rightPanel">
          {this.props.children}
        </div>
      </div>
    )
  }
}
