import React, { Component } from "react";
import { connect } from "react-redux";

class ButtonAddComponent extends Component {
  handleOnClick = status => {
    this.props.onAddPlayer(status);
    let nameAdd = document.getElementById("nameAdd");
    let idAdd = document.getElementById("idAdd");

    if (!status) {
      idAdd.style.display = "none";
      nameAdd.style.display = "block";
    } else {
      idAdd.style.display = "block";
      nameAdd.style.display = "none";
    }
  };
  render() {
    return (
      <div>
        <button
          onClick={() => this.handleOnClick(false)}
          type="button"
          className="btn btn-info btn-lg mr-2"
          data-toggle="modal"
          data-target="#myModal"
        >
          Add PLayer
        </button>
        <button
          onClick={() => this.handleOnClick(true)}
          type="button"
          className="btn btn-info btn-lg"
          data-toggle="modal"
          data-target="#myModal"
        >
          Add New Score
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddPlayer: status => {
      dispatch({
        type: "ADD_SCORE",
        status
      });
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(ButtonAddComponent);
