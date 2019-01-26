import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBarComponent from "./Component/search-bar/search-bar.component";
import UserListComponent from "./Component/user-list/user-list.component";
import ButtonAddComponent from "./Component/button-add/button-add.component";
import ModalComponent from "./Component/modal/modal-component";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-4">Score Board</h1>
        {/* search bar */}
        <SearchBarComponent />
        {/* Table */}
        <UserListComponent />
        {/* buttons */}
        {/* Trigger the modal with a button */}
        <ButtonAddComponent />
        {/* Modal */}
        <ModalComponent />
      </div>
    );
  }
}

export default App;
