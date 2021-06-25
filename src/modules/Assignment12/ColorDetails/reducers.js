const initialState = {
  colorsData: [],
  error: "",
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COLOR_REQUEST_SUCCESS":
      return {
        ...state,
        colorsData: action.payload,
      };

    case "GET_COLOR_REQUEST_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default colorReducer;
