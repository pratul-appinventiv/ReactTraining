import axios from "axios";

const getColorRequestSuccess = (data) => {
  return {
    type: "GET_COLOR_REQUEST_SUCCESS",
    payload: data,
  };
};

const getColorRequestFailure = (error) => {
  return {
    type: "GET_COLOR_REQUEST_FAILURE",
    payload: error,
  };
};

export const getColors = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://reqres.in/api/unknown");
      dispatch(getColorRequestSuccess(res.data.data));
    } catch (error) {
      dispatch(getColorRequestFailure(error));
    }
  };
};
