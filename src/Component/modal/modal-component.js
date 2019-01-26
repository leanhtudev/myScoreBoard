import React, { Component } from "react";
import { connect } from "react-redux";
class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      lastScore: "",
      totalScore: 0
    };
  }
  //handle when change the input
  handleOnChange = e => {
    console.log(this.props.list);
    if (e.target.name == "name") {
      this.setState({
        [e.target.name]: e.target.value
      });
    } else {
      this.setState({
        [e.target.name]: parseInt(e.target.value)
      });
    }
  };
  //handle when press submit
  handleOnSubmit = e => {
    e.preventDefault();
    //status is false ? add new user : add new score
    if (!this.props.onAddStatus) {
      alert(
        "Hello " +
          this.state.name +
          ". Your ID is: " +
          (this.props.list.length + 1)
      );
      this.state["id"] = this.props.list.length + 1;
      this.state["totalScore"] += this.state["lastScore"];
      this.props.onAddUser(this.state);
    } else {
      this.props.onUpdate(this.state);
    }
    document.getElementById("btnClose").click();
    this.setState({
      name: "",
      id: "",
      lastScore: "",
      totalScore: 0
    });
  };

  findIndex = (arr, id) => {
    for (var i in arr) {
      if (arr[i].id === id) {
        return parseInt(i);
      }
    }
    return -1;
  };
  render() {
    console.log(this.props.onAddStatus);
    let { name, id, lastScore } = this.state;
    return (
      <div id="myModal" className="modal fade" role="dialog">
        <form onSubmit={this.handleOnSubmit}>
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  {this.props.onAddStatus ? "Add Score" : "Add Player"}
                </h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              {/* add player */}
              <div className="modal-body">
                <div className="form-group" id="nameAdd">
                  <label htmlFor="name">Name</label>
                  <input
                    value={name}
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group" id="idAdd">
                  <label htmlFor="name">ID</label>
                  <input
                    value={id}
                    type="text"
                    className="form-control"
                    name="id"
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Score</label>
                  <input
                    value={lastScore}
                    type="text"
                    className="form-control"
                    name="lastScore"
                    onChange={this.handleOnChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  id="btnClose"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    onAddStatus: state.AddStatus, //props to change  model title
    list: state.list
  };
};
const mapDispatchToProps = dispatch => {
  return {
    //Props to add new user
    onAddUser: user => {
      dispatch({
        type: "ADD_NEXT_USER",
        user
      });
    },
    //Props to add score to existing user
    onUpdate: newObj => {
      dispatch({
        type: "UPDATE_SCORE",
        newObj
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalComponent);
