import React, { Component } from "react";

class UserItemComponent extends Component {
  render() {
    let { index, user } = this.props;
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.lastScore}</td>
        <td>{user.totalScore}</td>
        <td>{index + 1}</td>
      </tr>
    );
  }
}

export default UserItemComponent;
