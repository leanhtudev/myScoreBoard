import { UsersList } from "../data/userList";
let initialState = [];
let usersList = JSON.parse(localStorage.getItem("UsersList"));
if (usersList) {
  initialState = usersList;
} else {
  initialState = UsersList;
}
let FindbyName = (arr, keyword) => {
  let result = [];
  for (let i in arr) {
    if (arr[i].name.toLowerCase().indexOf(keyword.toLowerCase()) != -1) {
      result = [...result, arr[i]];
    }
  }
  return result;
};
let FindByID = (arr, id) => {
  let result = [];
  for (let i in arr) {
    if (arr[i].id === parseInt(id)) {
      result = [...result, arr[i]];
    }
  }
  return result;
};
const list = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_LIST":
      return [...state];
    case "ADD_NEXT_USER":
      state = [...state, action.user];
      localStorage.setItem("UsersList", JSON.stringify(state));

      return [...state];
    case "UPDATE_SCORE":
      state = [...state];
      for (let i in state) {
        if (state[i].id === action.newObj.id) {
          state[i].lastScore = parseInt(action.newObj.lastScore);
          state[i].totalScore += state[i].lastScore;
        }
      }
      return [...state];
    case "SEARCH":
      state = [...state];
      let findOutList = [];
      console.log(action.keyword);
      if (action.keyword == "") {
        return [...initialState];
      } else {
        findOutList = FindByID(initialState, action.keyword);
        if (!findOutList[0]) {
          findOutList = FindbyName(initialState, action.keyword);
        }
      }

      console.log(action.keyword);
      // if (!findOutList[0]) {
      //   findOutList = FindbyName(state, action.keyword);
      // }
      state = [...findOutList];
      return [...state];
    default:
      return [...state];
  }
};
export default list;
