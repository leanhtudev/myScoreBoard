let initialState = false;
const AddStatus = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SCORE":
      state = action.status;
      return state;
    default:
      return state;
  }
};
export default AddStatus;
