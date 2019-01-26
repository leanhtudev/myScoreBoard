import React, { Component } from "react";
import { connect } from "react-redux";
class SearchBarComponent extends Component {
  handleOnChange = e => {
    this.props.onSearchUser(e.target.value);
  };
  render() {
    return (
      <div className="form-group d-flex ">
        <input
          type="text"
          className="form-control mr-2"
          onChange={this.handleOnChange}
          placeholder="Search by Name or ID"
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // Props for sending keyword for searching
    onSearchUser: keyword => {
      dispatch({
        type: "SEARCH",
        keyword
      });
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SearchBarComponent);
