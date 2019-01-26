import React, { Component } from "react";
import UserItemComponent from "../user-item/user-item.component";
import { connect } from "react-redux";
class UserListComponent extends Component {
  componentDidMount() {
    this.props.onGetUsersList();
  }

  sortTaskItem = (value, arr) => {
    arr.sort((a, b) => {
      if (a.totalScore > b.totalScore) {
        return value;
      } else if (a.totalScore < b.totalScore) {
        return -value;
      } else {
        return 0;
      }
    });
  };

  renderList = () => {
    let { list } = this.props;
    this.sortTaskItem(-1, list);
    return list.map((user, index) => {
      return <UserItemComponent key={index} index={index} user={user} />;
    });
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Score</th>
            <th>Total Score</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>{this.renderList()}</tbody>
      </table>
    );
  }
}
const mapStatetoProps = state => {
  return {
    list: state.list
  };
};
const mapDispatchToProps = dispatch => {
  return {
    //Props to get users list
    onGetUsersList: () => {
      dispatch({
        type: "GET_USERS_LIST"
      });
    }
  };
};
export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(UserListComponent);
